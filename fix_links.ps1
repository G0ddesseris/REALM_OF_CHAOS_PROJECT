# Simple script to fix navigation and asset links
$rootDir = "C:\Users\Pantheon\CascadeProjects\VideoAIEnterprise\archives\Auxiliary_Tools\RealmOfChaos_WebDev"
$pagesDir = "$rootDir\pages"

# List of HTML files to process
$pages = @("index", "gallery-archive", "about", "pledge")

foreach ($page in $pages) {
    $filePath = "$pagesDir\$page.html"
    
    if (Test-Path $filePath) {
        Write-Host "Processing: $filePath"
        
        # Read the file
        $content = Get-Content -Path $filePath -Raw
        
        # Save original content for comparison
        $original = $content
        
        # Fix CSS links
        $content = $content -replace 'href="([^"]*\.css)"', 'href="../assets/css/$1"'
        
        # Fix JS links
        $content = $content -replace 'src="([^"]*\.js)"', 'src="../assets/js/$1"'
        
        # Fix image links
        $content = $content -replace 'src="([^"]*\.(?:png|jpg|jpeg|gif|svg))"', 'src="../assets/images/$1"'
        
        # Fix navigation links
        $content = $content -replace 'href="([^"]*\.html)"', 'href="$1"'
        
        # Save changes if modified
        if ($content -ne $original) {
            $content | Set-Content -Path $filePath -NoNewline
            Write-Host "  ✓ Updated: $page.html" -ForegroundColor Green
        } else {
            Write-Host "  ✓ No changes needed: $page.html" -ForegroundColor Gray
        }
        
    } else {
        Write-Host "  ! File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "\nLink updates complete!" -ForegroundColor Green
Write-Host "Please refresh your browser to see the changes." -ForegroundColor Cyan
