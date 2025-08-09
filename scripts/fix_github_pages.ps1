# Script to move HTML files to root and update paths for GitHub Pages
$ErrorActionPreference = "Stop"

$rootDir = "C:\Users\Pantheon\CascadeProjects\VideoAIEnterprise\archives\Auxiliary_Tools\RealmOfChaos_WebDev"
$pagesDir = Join-Path $rootDir "pages"

# Files to move from pages to root
$filesToMove = @(
    "about.html",
    "gallery-archive.html",
    "index.html",
    "pledge.html"
)

try {
    # Move each file to root
    foreach ($file in $filesToMove) {
        $source = Join-Path $pagesDir $file
        $destination = Join-Path $rootDir $file
        
        Write-Host "Processing $file..."
        
        # Backup existing file if it exists
        if (Test-Path $destination) {
            $backupPath = "${destination}.backup"
            Write-Host "  - Backing up existing file to ${file}.backup"
            Move-Item -Path $destination -Destination $backupPath -Force -ErrorAction Stop
        }
        
        # Move the file
        if (Test-Path $source) {
            Write-Host "  - Moving $file to root directory"
            Move-Item -Path $source -Destination $rootDir -Force -ErrorAction Stop
        } else {
            Write-Warning "  - Source file not found: $source"
        }
    }

    # Function to update paths in files
    function Update-FilePaths {
        param (
            [string]$filePath
        )
        
        Write-Host "Updating paths in: $filePath"
        $content = Get-Content -Path $filePath -Raw -ErrorAction Stop
        
        # Update CSS and JS paths (remove ../ from paths)
        $content = $content -replace '"../assets/', '"assets/'
        $content = $content -replace "'../assets/", "'assets/"
        $content = $content -replace '"../js/', '"js/'
        
        # Update image paths in CSS files
        if ($filePath -match '\.css$') {
            $content = $content -replace 'url\(\s*["'']?\.\./', 'url(../'
        }
        
        # Save the updated content
        $content | Set-Content -Path $filePath -NoNewline -Encoding UTF8 -Force
        Write-Host "  - Updated paths in $filePath"
    }

    # Update paths in all HTML files
    Write-Host "`nUpdating HTML files..."
    Get-ChildItem -Path $rootDir -Filter "*.html" -File | ForEach-Object {
        try {
            Update-FilePaths -filePath $_.FullName
        } catch {
            Write-Error "Error updating $($_.FullName): $_"
        }
    }

    # Update paths in CSS files
    Write-Host "`nUpdating CSS files..."
    $cssDir = Join-Path $rootDir "assets\css"
    if (Test-Path $cssDir) {
        Get-ChildItem -Path $cssDir -Filter "*.css" -File | ForEach-Object {
            try {
                Update-FilePaths -filePath $_.FullName
            } catch {
                Write-Error "Error updating $($_.FullName): $_"
            }
        }
    } else {
        Write-Warning "CSS directory not found: $cssDir"
    }

    Write-Host "`nAll files have been moved and updated successfully!" -ForegroundColor Green
    
} catch {
    Write-Error "An error occurred: $_"
    exit 1
}
