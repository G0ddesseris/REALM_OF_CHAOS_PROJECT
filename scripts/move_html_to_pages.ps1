# Move HTML files (except index.html) to the pages directory
$rootDir = Get-Location
$pagesDir = Join-Path $rootDir "pages"

# Create pages directory if it doesn't exist
if (-not (Test-Path $pagesDir)) {
    New-Item -ItemType Directory -Path $pagesDir | Out-Null
    Write-Host "Created pages directory"
}

# Get all HTML files except index.html
$htmlFiles = Get-ChildItem -Path $rootDir -Filter "*.html" -File | 
    Where-Object { $_.Name -ne "index.html" -and $_.Name -ne "organize_files.ps1" -and $_.Name -ne "update_paths.ps1" }

foreach ($file in $htmlFiles) {
    $destination = Join-Path $pagesDir $file.Name
    
    # If file already exists in destination, add a timestamp
    if (Test-Path $destination) {
        $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
        $newName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name) + "_$timestamp" + [System.IO.Path]::GetExtension($file.Name)
        $destination = Join-Path $pagesDir $newName
    }
    
    Move-Item -Path $file.FullName -Destination $destination -Force
    Write-Host "Moved $($file.Name) to pages/$(Split-Path $destination -Leaf)" 
}

Write-Host "HTML files have been moved to the pages directory."
