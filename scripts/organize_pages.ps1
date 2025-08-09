# Script to organize pages directory
$pagesDir = "C:\Users\Pantheon\CascadeProjects\VideoAIEnterprise\archives\Auxiliary_Tools\RealmOfChaos_WebDev\pages"
$archiveDir = "$pagesDir\old"

# Create archive directory if it doesn't exist
if (-not (Test-Path $archiveDir)) {
    New-Item -ItemType Directory -Path $archiveDir | Out-Null
    Write-Host "Created archive directory: $archiveDir"
}

# Files to keep (don't archive these)
$keepFiles = @(
    "index.html",
    "gallery-archive.html",
    "about.html",
    "pledge.html"
)

# Move all non-essential files to archive
Get-ChildItem -Path $pagesDir -File | ForEach-Object {
    if ($keepFiles -notcontains $_.Name) {
        $target = Join-Path $archiveDir $_.Name
        Move-Item -Path $_.FullName -Destination $target -Force
        Write-Host "Archived: $($_.Name) -> old/$($_.Name)"
    }
}

# Update navigation links in all kept pages
$keptPages = Get-ChildItem -Path $pagesDir -File | Where-Object { $keepFiles -contains $_.Name }

foreach ($page in $keptPages) {
    $content = Get-Content -Path $page.FullName -Raw
    
    # Update navigation links
    $content = $content -replace 'href="(archive|gallery|archive_new|archive_old|index_backup).html"', 'href="#"'
    
    # Update gallery link to point to gallery-archive.html
    $content = $content -replace 'href="gallery.html"', 'href="gallery-archive.html"'
    
    # Save changes
    $content | Set-Content -Path $page.FullName -NoNewline
    Write-Host "Updated links in: $($page.Name)"
}

Write-Host "Page organization complete!" -ForegroundColor Green
Write-Host "Kept files: $($keepFiles -join ', ')"
Write-Host "Other files moved to: $archiveDir"
