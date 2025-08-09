# File Organization Script for Realm of Chaos WebDev
# This script helps organize the project files into a cleaner structure

# Create necessary directories
$directories = @(
    "assets/css",
    "assets/fonts",
    "assets/gifs",
    "assets/images",
    "assets/js",
    "pages",
    "scripts",
    "styles",
    "archive/backup_20250808"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
        Write-Host "Created directory: $dir"
    }
}

# Move files to their new locations
$moves = @{
    # Move HTML files to pages directory
    "*.html" = "pages/"
    
    # Move asset files
    "assets/fonts/*" = "assets/fonts/"
    "assets/gifs/*" = "assets/gifs/"
    "assets/images/*" = "assets/images/"
    "assets/video/*" = "assets/videos/"
    
    # Move scripts
    "*.ps1" = "scripts/"
    "*.js" = "assets/js/"
    
    # Move styles
    "*.css" = "assets/css/"
    "*.scss" = "styles/"
    "*.sass" = "styles/"
    "*.less" = "styles/"
}

# Perform the moves
foreach ($move in $moves.GetEnumerator()) {
    $source = $move.Key
    $dest = $move.Value
    
    if (Test-Path $source) {
        Get-ChildItem -Path $source -File | ForEach-Object {
            $target = Join-Path $dest $_.Name
            if (-not (Test-Path $target)) {
                Move-Item -Path $_.FullName -Destination $target -Force
                Write-Host "Moved: $($_.Name) -> $dest"
            }
        }
    }
}

# Move backup files
if (Test-Path "backup_20250808_083601") {
    Move-Item -Path "backup_20250808_083601/*" -Destination "archive/backup_20250808/" -Force
    Remove-Item -Path "backup_20250808_083601" -Recurse -Force
    Write-Host "Moved backup files to archive/"
}

# Update file references in HTML files
$htmlFiles = Get-ChildItem -Path "pages" -Filter "*.html" -Recurse
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Update CSS references
    $content = $content -replace 'href="(?!https?://|/)([^"]*\.css)"', 'href="../assets/css/$1"'
    
    # Update JS references
    $content = $content -replace 'src="(?!https?://|/)([^"]*\.js)"', 'src="../assets/js/$1"'
    
    # Update image references
    $content = $content -replace 'src="(?!https?://|/)([^"]*\.(?:png|jpg|jpeg|gif|svg))"', 'src="../assets/images/$1"'
    
    # Save changes
    $content | Set-Content -Path $file.FullName -NoNewline
}

Write-Host "Reorganization complete!" -ForegroundColor Green
