const fs = require('fs');
const path = require('path');

// Paths
const masterJsonPath = path.join(__dirname, 'video-embeds.json');
const galleryArchivePath = path.join(__dirname, 'pages', 'gallery-archive.html');

// Read the master JSON file
const masterData = JSON.parse(fs.readFileSync(masterJsonPath, 'utf-8'));
const masterVideos = masterData.videos.reduce((acc, video) => {
    acc[video.id] = video;
    return acc;
}, {});

// Read the gallery archive HTML
let galleryHtml = fs.readFileSync(galleryArchivePath, 'utf-8');

// Find the video data array in the HTML
const videoDataMatch = galleryHtml.match(/const videoData = (\[.*?\]);/s);
if (!videoDataMatch) {
    console.error('Could not find videoData in gallery-archive.html');
    process.exit(1);
}

// Extract and parse the video data
const videoDataStr = videoDataMatch[1];
let videoData;
try {
    videoData = JSON.parse(videoDataStr);
} catch (e) {
    // If JSON.parse fails, try to fix common issues
    const fixedStr = videoDataStr
        .replace(/([\w]+):/g, '"$1":')  // Add quotes around keys
        .replace(/'/g, '"')  // Replace single quotes with double quotes
        .replace(/,\s*\]/g, ']')  // Remove trailing commas
        .replace(/,\s*\}/g, '}');  // Remove trailing commas in objects
    
    try {
        videoData = JSON.parse(fixedStr);
    } catch (e2) {
        console.error('Could not parse video data:', e2);
        process.exit(1);
    }
}

// Track changes
let updatedCount = 0;
let notInMaster = [];

// Update video data with master embed codes
const updatedVideoData = videoData.map(video => {
    const masterVideo = masterVideos[video.id];
    
    if (masterVideo) {
        // Check if embed code matches
        if (video.embedCode !== masterVideo.embed_code) {
            console.log(`Updating embed code for: ${video.title} (${video.id})`);
            updatedCount++;
            return {
                ...video,
                embedCode: masterVideo.embed_code
            };
        }
        return video;
    } else {
        // Video not in master list
        notInMaster.push({
            id: video.id,
            title: video.title
        });
        return video;
    }
});

// Generate the updated video data string
const updatedVideoDataStr = JSON.stringify(updatedVideoData, null, 4)
    .replace(/"([^"]+)":/g, '$1:')  // Remove quotes around keys
    .replace(/\\"/g, '"')  // Unescape quotes
    .replace(/"\+/g, '"')  // Fix any remaining quote issues
    .replace(/},\n/g, '},
    ');  // Fix indentation

// Update the HTML with the corrected video data
const updatedHtml = galleryHtml.replace(
    /const videoData = \[.*?\];/s,
    `const videoData = ${updatedVideoDataStr};`
);

// Write the updated HTML back to the file
fs.writeFileSync(galleryArchivePath, updatedHtml, 'utf-8');

// Update the master JSON with any new videos from the gallery
let masterUpdated = false;
videoData.forEach(video => {
    if (!masterVideos[video.id]) {
        console.log(`Adding new video to master: ${video.title} (${video.id})`);
        masterData.videos.push({
            id: video.id,
            title: video.title,
            embed_code: video.embedCode,
            tags: Array.isArray(video.tags) ? video.tags : [],
            added_date: new Date().toISOString().split('T')[0],
            verified: false
        });
        masterUpdated = true;
    }
});

// If master was updated, save it
if (masterUpdated) {
    masterData.last_updated = new Date().toISOString();
    fs.writeFileSync(masterJsonPath, JSON.stringify(masterData, null, 2) + '\n', 'utf-8');
}

// Print summary
console.log('\n=== Embed Code Verification Complete ===');
console.log(`• Updated ${updatedCount} embed codes`);
console.log(`• ${notInMaster.length} videos not found in master list:`);
notInMaster.forEach(video => {
    console.log(`  - ${video.title} (${video.id})`);
});

if (masterUpdated) {
    console.log('\nMaster JSON has been updated with new videos.');
    console.log('Please verify the new videos and set verified: true in video-embeds.json');
}
