# Organize RealmOfChaos_WebDev files into new directory structure

# Set the root directory
$rootDir = Get-Location

# Create necessary directories if they don't exist
$directories = @(
    "assets\css",
    "assets\js",
    "assets\images",
    "assets\fonts",
    "assets\videos",
    "assets\thumbnails",
    "pages",
    "scripts\lib"
)

foreach ($dir in $directories) {
    $fullPath = Join-Path $rootDir $dir
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        Write-Host "Created directory: $dir"
    }
}

# Move files to appropriate directories
$fileMappings = @{
    # Move HTML files (except index.html) to pages directory
    "*.html" = "pages"
    
    # Move CSS files to assets/css
    "*.css" = "assets\css"
    
    # Move JavaScript files to assets/js
    "*.js" = "assets\js"
    
    # Move image files to assets/images
    "*.jpg" = "assets\images"
    "*.jpeg" = "assets\images"
    "*.png" = "assets\images"
    "*.gif" = "assets\images"
    "*.svg" = "assets\images"
    
    # Move font files to assets/fonts
    "*.ttf" = "assets\fonts"
    "*.otf" = "assets\fonts"
    "*.woff" = "assets\fonts"
    "*.woff2" = "assets\fonts"
    
    # Move video files to assets/videos
    "*.mp4" = "assets\videos"
    "*.webm" = "assets\videos"
    "*.mov" = "assets\videos"
}

# Process each file pattern
foreach ($pattern in $fileMappings.Keys) {
    $targetDir = $fileMappings[$pattern]
    $files = Get-ChildItem -Path $rootDir -Filter $pattern -File
    
    foreach ($file in $files) {
        # Skip files that are already in the correct location
        if ($file.DirectoryName -like "*$targetDir*") {
            continue
        }
        
        # Skip index.html as it should stay in the root
        if ($file.Name -eq "index.html") {
            continue
        }
        
        $destination = Join-Path $rootDir $targetDir $file.Name
        
        # Handle duplicate filenames
        $counter = 1
        while (Test-Path $destination) {
            $name = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
            $ext = [System.IO.Path]::GetExtension($file.Name)
            $newName = "${name}_${counter}${ext}"
            $destination = Join-Path $rootDir $targetDir $newName
            $counter++
        }
        
        Move-Item -Path $file.FullName -Destination $destination -Force
        Write-Host "Moved $($file.Name) to $targetDir"
    }
}

# Create a backup of the current structure
$backupDir = "$rootDir\backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
New-Item -ItemType Directory -Path $backupDir | Out-Null

# Copy all files to backup
Get-ChildItem -Path $rootDir -Exclude "backup_*" | 
    Where-Object { $_.PSIsContainer -eq $false } | 
    ForEach-Object {
        Copy-Item -Path $_.FullName -Destination $backupDir -Force
    }

Write-Host "Backup created at: $backupDir"
Write-Host "File organization complete!"
