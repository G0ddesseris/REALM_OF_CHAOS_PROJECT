# Realm of Chaos - Project Log

## Project Structure
As of 2025-08-08, the project has been reorganized with the following structure:

```
/RealmOfChaos_WebDev
├── /assets/               # All static assets
│   ├── /css/              # Compiled CSS files
│   ├── /fonts/            # Web fonts used in the project
│   ├── /gifs/             # Animated GIFs
│   ├── /images/           # Static images and icons
│   └── /js/               # Compiled JavaScript files
├── /pages/                # HTML pages
│   ├── about.html         # About page
│   ├── archive.html       # Archive page (legacy)
│   └── gallery-archive.html # Main video gallery
├── /scripts/              # Build and utility scripts
│   └── organize_files.ps1 # File organization script
├── /styles/               # Source styles (SASS/LESS)
├── /archive/              # Archived/old files
│   └── /backup_20250808/  # Full backup from 2025-08-08
├── index.html             # Main entry point
├── README.md              # Project documentation
├── CHANGELOG.md           # Version history
└── PROJECT_LOG.md         # This file
```

## Important Notes for Future Maintenance

### Video Management
- The main video gallery is in `pages/gallery-archive.html`
- Videos are stored in the `videoData` array at the top of the file
- Each video should have: id, title, embedCode, and tags
- Pagination is set to 20 videos per page

### Styling
- Main styles are in `assets/css/styles.css`
- Color scheme uses CSS variables in `:root`
- Responsive design with mobile-first approach

### Scripts
- `scripts/organize_files.ps1` helps maintain the directory structure
- Run this after adding new files to keep things organized

## Common Tasks

### Adding a New Video
1. Add video to the `videoData` array in `gallery-archive.html`
2. Include: id, title, embedCode, and tags
3. Test the video loads correctly
4. Update CHANGELOG.md

### Updating Styles
1. Edit the appropriate CSS file
2. Test on multiple screen sizes
3. Document changes in CHANGELOG.md

### Maintenance
- Regularly run the organization script
- Keep backups of important files
- Update documentation when making changes

## Known Issues
- Some legacy pages may still reference old file paths
- Some assets may be duplicated across directories
- Some JavaScript could be optimized for better performance

## Future Improvements
- Implement a build system (Webpack, Gulp, etc.)
- Add automated testing
- Improve accessibility
- Add more documentation
