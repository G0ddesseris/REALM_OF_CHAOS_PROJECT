# Script to fix all broken links and asset paths
$rootDir = "C:\Users\Pantheon\CascadeProjects\VideoAIEnterprise\archives\Auxiliary_Tools\RealmOfChaos_WebDev"
$pagesDir = Join-Path $rootDir "pages"
$assetsDir = Join-Path $rootDir "assets"

# Files to process
$htmlFiles = @(
    (Join-Path $pagesDir "index.html"),
    (Join-Path $pagesDir "gallery-archive.html"),
    (Join-Path $pagesDir "about.html"),
    (Join-Path $pagesDir "pledge.html")
)

# Common replacements for all files
$commonReplacements = @{
    # Fix CSS paths
    'href="(?!https?://|/)([^"]*\.css)"' = 'href="../assets/css/$1"';
    
    # Fix JS paths
    'src="(?!https?://|/)([^"]*\.js)"' = 'src="../assets/js/$1"';
    
    # Fix image paths
    'src=["'](?!https?://|/)([^"']*\.(?:png|jpg|jpeg|gif|svg))["']' = 'src="../assets/images/$1"';
    
    # Fix navigation links
    'href="(?!https?://|/|\.\./)([^"]*\.html)"' = 'href="$1"';
    'href="(?!https?://|/)([^"]*\.html)"' = 'href="$1"';
}

# Page-specific replacements
$pageSpecific = @{
    # Home page specific fixes
    (Join-Path $pagesDir "index.html") = @{
        # Fix navigation links
        'href="gallery-archive.html"' = 'href="./gallery-archive.html"'
        'href="about.html"' = 'href="./about.html"'
        'href="pledge.html"' = 'href="./pledge.html"'
    }
    
    # Gallery page specific fixes
    "$pagesDir\gallery-archive.html" = @{
        'href="index.html"' = 'href="./index.html"'
        'href="about.html"' = 'href="./about.html"'
        'href="pledge.html"' = 'href="./pledge.html"'
    }
    
    # About page specific fixes
    "$pagesDir\about.html" = @{
        'href="index.html"' = 'href="./index.html"'
        'href="gallery-archive.html"' = 'href="./gallery-archive.html"'
        'href="pledge.html"' = 'href="./pledge.html"'
    }
    
    # Pledge page specific fixes
    "$pagesDir\pledge.html" = @{
        'href="index.html"' = 'href="./index.html"'
        'href="gallery-archive.html"' = 'href="./gallery-archive.html"'
        'href="about.html"' = 'href="./about.html"'
    }
}

# Process each HTML file
foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw
        $originalContent = $content
        
        Write-Host "Processing: $file" -ForegroundColor Cyan
        
        # Apply common replacements
        foreach ($replacement in $commonReplacements.GetEnumerator()) {
            $content = $content -replace $replacement.Key, $replacement.Value
        }
        
        # Apply page-specific replacements
        if ($pageSpecific.ContainsKey($file)) {
            foreach ($replacement in $pageSpecific[$file].GetEnumerator()) {
                $content = $content -replace $replacement.Key, $replacement.Value
            }
        }
        
        # Save changes if content was modified
        if ($content -ne $originalContent) {
            $content | Set-Content -Path $file -NoNewline
            Write-Host "  ✓ Updated: $file" -ForegroundColor Green
        } else {
            Write-Host "  ✓ No changes needed" -ForegroundColor Gray
        }
    } else {
        Write-Host "  ! File not found: $file" -ForegroundColor Red
    }
}

# Copy necessary files to the correct locations
$filesToCopy = @{
    # Copy CSS files
    "$rootDir\styles\main.css" = "$assetsDir\css\main.css"
    "$rootDir\styles\pledge.css" = "$assetsDir\css\pledge.css"
    
    # Copy JS files
    "$rootDir\js\countdown.js" = "$assetsDir\js\countdown.js"
    "$rootDir\scripts\app.js" = "$assetsDir\js\app.js"
}

foreach ($file in $filesToCopy.GetEnumerator()) {
    $source = $file.Key
    $destination = $file.Value
    
    if (Test-Path $source) {
        $destDir = [System.IO.Path]::GetDirectoryName($destination)
        
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        
        Copy-Item -Path $source -Destination $destination -Force
        Write-Host "Copied: $source -> $destination" -ForegroundColor Green
    } else {
        Write-Host "Source file not found: $source" -ForegroundColor Red
    }
}

Write-Host "`nLink and asset path fixes complete!" -ForegroundColor Green
Write-Host "Please refresh your browser to see the changes." -ForegroundColor Cyan
