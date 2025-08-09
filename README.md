# Realm of Chaos - Web Development Project

## Project Overview
This is the web interface for the Realm of Chaos project, featuring a video gallery with pagination, filtering, and search functionality.

## Directory Structure
```
/RealmOfChaos_WebDev
├── /assets               # All static assets
│   ├── /css              # Compiled CSS
│   ├── /fonts            # Web fonts
│   ├── /gifs             # Animated GIFs
│   ├── /images           # Static images
│   └── /js               # Compiled JavaScript
├── /pages                # HTML pages
├── /scripts              # Build/utility scripts
├── /styles               # Source styles (SASS/LESS)
├── /archive              # Archived/old files
├── index.html            # Main entry point
├── README.md             # This file
└── CHANGELOG.md          # Version history
```

## Key Files
- `index.html` - Main landing page
- `pages/gallery-archive.html` - Main video gallery with pagination
- `assets/js/main.js` - Core functionality
- `assets/css/styles.css` - Main stylesheet

## Setup
1. Clone the repository
2. Open `index.html` in a web browser
3. For development, use a local server (e.g., `python -m http.server`)

## Features
- Responsive video gallery
- Pagination (20 videos per page)
- Search and filter functionality
- Mobile-friendly design

## Maintenance
- Add new videos to the `videoData` array in gallery-archive.html
- Update the CHANGELOG.md with any changes
- Keep backup of important files in the /archive directory

## Notes for AI/Developers
- Always check the CHANGELOG.md for recent updates
- Follow the existing code style and structure
- Test changes on multiple devices before committing
- Keep the master video list in sync with the gallery

This is the official website for Realm of Chaos, featuring a public gallery and a members-only archive section.

## Project Structure

```
RealmOfChaos_WebDev/
├── assets/                  # Static assets
│   ├── css/                 # Compiled CSS files
│   ├── js/                  # JavaScript files
│   ├── images/              # Image assets
│   ├── fonts/               # Custom fonts
│   ├── videos/              # Video files
│   └── thumbnails/          # Video thumbnails
├── pages/                   # HTML pages (except index.html)
│   ├── about.html           # About page
│   ├── archive.html         # Members-only archive
│   ├── gallery.html         # Public gallery
│   └── pledge.html          # Membership pledge page
├── scripts/                 # Server-side scripts
│   └── lib/                 # Third-party libraries
├── styles/                  # Source CSS/Styles
│   ├── main.css             # Main stylesheet
│   └── pledge.css           # Pledge page specific styles
├── index.html               # Main entry point
└── README.md                # This file
```

## Features

- **Responsive Design**: Works on all device sizes
- **Modern UI/UX**: Clean, dark theme with smooth animations
- **Video Gallery**: Filterable grid layout with modal playback
- **Membership System**: Secure access to premium content
- **Performance Optimized**: Fast loading and smooth interactions

## Setup

1. Clone the repository
2. Open `index.html` in a web browser for local development
3. For production, deploy all files to a web server

## Development

### Adding New Content

1. **Videos**: Add video files to `assets/videos/`
2. **Thumbnails**: Add thumbnails to `assets/thumbnails/` (recommended size: 1280x720)
3. **Pages**: Add new HTML files to the `pages/` directory

### Styling

- Main styles are in `styles/main.css`
- Page-specific styles should be in their own CSS files in the `styles/` directory
- Use CSS variables defined in `:root` for consistent theming

### JavaScript

- Main JavaScript functionality is in `assets/js/`
- Third-party libraries should be placed in `scripts/lib/`

## Deployment

1. Run the build process (if applicable)
2. Upload all files to your web server
3. Ensure proper file permissions are set

## License

All content is copyright © 2025 Realm of Chaos. All rights reserved.
