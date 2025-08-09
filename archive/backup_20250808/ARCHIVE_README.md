# Realm of Chaos - Archive Management

## Archive System Overview

The archive system has been completely redesigned for better performance and maintainability. The new system includes:

- `archive.html` - The main archive page (automatically loads from video-data.js)
- `archive_old.html` - Backup of the previous archive page
- `video-data.js` - Centralized video database
- `add_video.js` - Script to add new videos (optional)

## How to Add a New Video

### Option 1: Manual Method (Recommended)
1. Open `video-data.js` in a text editor
2. Add a new video object to the `videoData` array:
   ```javascript
   {
       id: 'SCREENPAL_ID',  // Replace with your video ID
       title: 'Video Title',
       isNew: true,         // Set to false for older videos
       date: '2025-07-28',  // Use YYYY-MM-DD format
       tags: ['tag1', 'tag2'] // Add relevant tags (e.g., 'sissy', 'femdom', 'training')
   },
   ```
3. Save the file and test the changes

### Option 2: Using the Script (Advanced)
1. Install required dependencies (if not already installed):
   ```bash
   npm install commander
   ```
2. Add a new video:
   ```bash
   node add_video.js --id "SCREENPAL_ID" --title "Video Title" --tags "sissy,femdom" --new
   ```

## Features

- **Advanced Filtering**: Filter by tags, new releases, or popularity
- **Responsive Design**: Works on all devices
- **High Performance**: Lazy loading for videos
- **Modern UI**: Smooth animations and transitions
- **Easy Maintenance**: Centralized video data management

## Best Practices

1. **Tags**: Use consistent tags for better filtering (e.g., 'sissy', 'femdom', 'training')
2. **New Releases**: Mark new videos with `isNew: true` for the first 30 days
3. **Popular Content**: Add 'popular' to the tags array for featured content
4. **Backup**: Always keep `archive_old.html` as a backup

## Troubleshooting

- If a video doesn't load, check the console for errors
- Ensure video IDs are correct and haven't changed
- Clear your browser cache if changes aren't visible

## Need Help?

Contact support if you need assistance with:
- Adding multiple videos at once
- Customizing the design
- Implementing additional features
