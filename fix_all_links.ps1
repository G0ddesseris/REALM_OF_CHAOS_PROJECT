# Script to fix all broken links and asset paths
$rootDir = "C:\Users\Pantheon\CascadeProjects\VideoAIEnterprise\archives\Auxiliary_Tools\RealmOfChaos_WebDev"
$pagesDir = "$rootDir\pages"
$assetsDir = "$rootDir\assets"

# Create necessary directories if they don't exist
$directories = @(
    "$assetsDir\css",
    "$assetsDir\js",
    "$assetsDir\images",
    "$assetsDir\fonts"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
        Write-Host "Created directory: $dir"
    }
}

# Move CSS files to assets/css
$cssFiles = Get-ChildItem -Path $rootDir -Recurse -Filter "*.css" -File
foreach ($file in $cssFiles) {
    $dest = Join-Path "$assetsDir\css" $file.Name
    Move-Item -Path $file.FullName -Destination $dest -Force
    Write-Host "Moved CSS: $($file.Name) -> $dest"
}

# Move JS files to assets/js
$jsFiles = Get-ChildItem -Path $rootDir -Recurse -Filter "*.js" -File | Where-Object { $_.DirectoryName -notlike "*assets*" }
foreach ($file in $jsFiles) {
    $dest = Join-Path "$assetsDir\js" $file.Name
    Move-Item -Path $file.FullName -Destination $dest -Force
    Write-Host "Moved JS: $($file.Name) -> $dest"
}

# Process each HTML file
$htmlFiles = Get-ChildItem -Path $pagesDir -Filter "*.html" -File

foreach ($file in $htmlFiles) {
    Write-Host "Processing: $($file.FullName)" -ForegroundColor Cyan
    $content = Get-Content -Path $file.FullName -Raw
    $originalContent = $content
    
    # Fix CSS links
    $content = $content -replace '(?<=(href=[\'"])).*?([^/\'"])*\.css', '../assets/css/$&'
    
    # Fix JS links
    $content = $content -replace '(?<=(src=[\'"])).*?([^/\'"])*\.js', '../assets/js/$&'
    
    # Fix image links
    $content = $content -replace '(?<=(src=[\'"])).*?([^/\'"])*\.(png|jpg|jpeg|gif|svg|webp)', '../assets/images/$&'
    
    # Fix font links
    $content = $content -replace '(?<=(href=[\'"])).*?([^/\'"])*\.(ttf|woff|woff2|eot)', '../assets/fonts/$&'
    
    # Fix navigation links
    $content = $content -replace 'href=[\'"](?!https?://|#|tel:|mailto:)([^\'"]+\.html)', 'href="$1"'
    
    # Fix relative paths for pages
    $content = $content -replace 'href="([^/][^:"\']*\.html)"', 'href="$1"'
    
    # Save changes if modified
    if ($content -ne $originalContent) {
        $content | Set-Content -Path $file.FullName -NoNewline
        Write-Host "  ✓ Updated: $($file.Name)" -ForegroundColor Green
    } else {
        Write-Host "  ✓ No changes needed: $($file.Name)" -ForegroundColor Gray
    }
}

# Fix the main index.html path
$indexPath = Join-Path $pagesDir "index.html"
if (Test-Path $indexPath) {
    $content = Get-Content -Path $indexPath -Raw
    $content = $content -replace 'href="([^"\']*\.html)"', 'href="pages/$1"'
    $content | Set-Content -Path $indexPath -NoNewline
    Write-Host "Fixed main index.html paths" -ForegroundColor Green
}

Write-Host "\nAll links and assets have been fixed!" -ForegroundColor Green
Write-Host "Please refresh your browser to see the changes." -ForegroundColor Cyan
