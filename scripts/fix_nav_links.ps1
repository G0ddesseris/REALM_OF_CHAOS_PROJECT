# Simple script to fix navigation links
$rootDir = "C:\Users\Pantheon\CascadeProjects\VideoAIEnterprise\archives\Auxiliary_Tools\RealmOfChaos_WebDev"
$pagesDir = Join-Path $rootDir "pages"

# List of HTML files to process
$pages = @("index", "gallery-archive", "about", "pledge")

# Process each HTML file
foreach ($page in $pages) {
    $filePath = Join-Path $pagesDir "$page.html"
    
    if (Test-Path $filePath) {
        Write-Host "Processing: $filePath" -ForegroundColor Cyan
        $content = Get-Content -Path $filePath -Raw
        $originalContent = $content
        
        # Update navigation links
        $content = $content -replace 'href=["\'](?!https?://|/|\.\./)([^"\']*\.html)["\']', 'href="$1"'
        
        # Update asset paths
        $content = $content -replace '(href|src)=["\'](?!https?://|/)([^"\']*\.(?:css|js|png|jpg|jpeg|gif|svg))["\']', '`$1="../assets/`$2"'
        
        # Save changes if modified
        if ($content -ne $originalContent) {
            $content | Set-Content -Path $filePath -NoNewline
            Write-Host "  ✓ Updated links in $page.html" -ForegroundColor Green
        } else {
            Write-Host "  ✓ No changes needed for $page.html" -ForegroundColor Gray
        }
    } else {
        Write-Host "  ! File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "\nNavigation and asset links have been updated!" -ForegroundColor Green
Write-Host "Please refresh your browser to see the changes." -ForegroundColor Cyan
