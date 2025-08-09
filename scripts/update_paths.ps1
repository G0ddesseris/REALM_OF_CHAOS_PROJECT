# PowerShell script to update file paths in HTML files after reorganization

# Set the root directory
$rootDir = Get-Location

# Files to process
$htmlFiles = @(
    "index.html",
    "pages/about.html",
    "pages/archive.html",
    "pages/gallery.html",
    "pages/pledge.html"
)

# Path mappings (old path -> new path)
$pathMappings = @{
    # Update CSS paths
    'href="styles/' = 'href="assets/css/'
    # Update JavaScript paths
    'src="js/' = 'src="assets/js/'
    # Update image paths
    'src="assets/images/' = 'src="assets/images/'
    'src="images/' = 'src="assets/images/'
    # Update font paths
    'url(../assets/fonts/' = 'url(../assets/fonts/'
    'url(assets/fonts/' = 'url(../assets/fonts/'
    # Update video paths
    'src="assets/videos/' = 'src="assets/videos/'
    'src="videos/' = 'src="assets/videos/'
}

# Process each HTML file
foreach ($file in $htmlFiles) {
    $filePath = Join-Path $rootDir $file
    
    if (Test-Path $filePath) {
        $content = Get-Content -Path $filePath -Raw
        $originalContent = $content
        
        # Apply path mappings
        foreach ($mapping in $pathMappings.GetEnumerator()) {
            $content = $content -replace [regex]::Escape($mapping.Key), $mapping.Value
        }
        
        # Save changes if content was modified
        if ($content -ne $originalContent) {
            $content | Set-Content -Path $filePath -NoNewline
            Write-Host "Updated paths in $file"
        } else {
            Write-Host "No path updates needed for $file"
        }
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Path updates complete!"
