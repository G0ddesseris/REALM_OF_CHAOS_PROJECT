# Simple script to fix navigation and asset links
$rootDir = "C:\Users\Pantheon\CascadeProjects\VideoAIEnterprise\archives\Auxiliary_Tools\RealmOfChaos_WebDev"
$pagesDir = Join-Path $rootDir "pages"

# Function to update file content
function Update-FileContent {
    param (
        [string]$filePath,
        [string]$find,
        [string]$replace
    )
    $content = Get-Content -Path $filePath -Raw
    $content = $content -replace $find, $replace
    $content | Set-Content -Path $filePath -NoNewline
}

# List of HTML files to process
$pages = @("index", "gallery-archive", "about", "pledge")

foreach ($page in $pages) {
    $filePath = Join-Path $pagesDir "$page.html"
    
    if (Test-Path $filePath) {
        Write-Host "Processing: $filePath" -ForegroundColor Cyan
        
        # Fix CSS links
        Update-FileContent -filePath $filePath -find 'href="([^"]*\.css)"' -replace 'href="../assets/css/$1"'
        
        # Fix JS links
        Update-FileContent -filePath $filePath -find 'src="([^"]*\.js)"' -replace 'src="../assets/js/$1"'
        
        # Fix image links
        Update-FileContent -filePath $filePath -find 'src="([^"]*\.(?:png|jpg|jpeg|gif|svg))"' -replace 'src="../assets/images/$1"'
        
        # Fix navigation links
        Update-FileContent -filePath $filePath -find 'href="([^"]*\.html)"' -replace 'href="$1"'
        
        Write-Host "  ✓ Updated: $page.html" -ForegroundColor Green
    } else {
        Write-Host "  ! File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "\nLink updates complete!" -ForegroundColor Green
Write-Host "Please refresh your browser to see the changes." -ForegroundColor Cyan
