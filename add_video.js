// Simple script to add new videos to the archive
// Usage: node add_video.js --id VIDEO_ID --title "Video Title" [--new]

const fs = require('fs');
const path = require('path');
const { program } = require('commander');

// Parse command line arguments
program
  .requiredOption('--id <id>', 'ScreenPal video ID')
  .requiredOption('--title <title>', 'Video title')
  .option('--new', 'Mark as new release', false)
  .parse(process.argv);

const options = program.opts();

// Create the new video entry
const newVideo = {
  id: options.id,
  title: options.title,
  isNew: options.new,
  date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
  tags: [] // Add tags if needed
};

// Path to the video data file
const dataFilePath = path.join(__dirname, 'video-data.json');

// Load existing videos or create new array
let videos = [];
if (fs.existsSync(dataFilePath)) {
  videos = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
}

// Add new video to the beginning of the array
videos.unshift(newVideo);

// Save updated videos
fs.writeFileSync(dataFilePath, JSON.stringify(videos, null, 2));

console.log(`✅ Added video: ${options.title}`);
console.log(`Total videos: ${videos.length}`);
console.log('Next steps:');
console.log('1. Update the archive_new.html file with the new video data');
console.log('2. Test the changes locally');
console.log('3. Commit and push the changes');
