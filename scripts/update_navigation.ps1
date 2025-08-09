# Update navigation and links in all HTML files for consistency

$rootDir = Get-Location
$htmlFiles = @(
    "index.html",
    "pages/about.html",
    "pages/archive.html",
    "pages/gallery.html",
    "pages/pledge.html"
)

# Define the new navigation menu HTML
$newNav = @'
            <nav class="nav-menu" id="navMenu">
                <a href="../index.html" class="nav-link">Home</a>
                <a href="gallery.html" class="nav-link">Gallery</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="pledge.html" class="nav-link">Membership</a>
                <a href="archive.html" class="cta-button">Member Login</a>
            </nav>
'@

# For index.html, the paths are different
$indexNav = @'
            <nav class="nav-menu" id="navMenu">
                <a href="index.html" class="nav-link active">Home</a>
                <a href="pages/gallery.html" class="nav-link">Gallery</a>
                <a href="pages/about.html" class="nav-link">About</a>
                <a href="pages/pledge.html" class="nav-link">Membership</a>
                <a href="pages/archive.html" class="cta-button">Member Login</a>
            </nav>
'@

foreach ($file in $htmlFiles) {
    $filePath = Join-Path $rootDir $file
    
    if (Test-Path $filePath) {
        $content = Get-Content -Path $filePath -Raw
        
        # Check if the file is index.html
        if ($file -eq "index.html") {
            $updatedContent = $content -replace '(?s)<nav[^>]*>.*?</nav>', $indexNav
        } else {
            $updatedContent = $content -replace '(?s)<nav[^>]*>.*?</nav>', $newNav
        }
        
        # Update the active class based on current page
        if ($file -match "gallery.html$") {
            $updatedContent = $updatedContent -replace '<a href="(.*?)gallery.html"', '<a href="$1gallery.html" class="nav-link active"'
        } elseif ($file -match "about.html$") {
            $updatedContent = $updatedContent -replace '<a href="(.*?)about.html"', '<a href="$1about.html" class="nav-link active"'
        } elseif ($file -match "pledge.html$") {
            $updatedContent = $updatedContent -replace '<a href="(.*?)pledge.html"', '<a href="$1pledge.html" class="nav-link active"'
        } elseif ($file -match "archive.html$") {
            $updatedContent = $updatedContent -replace '<a href="(.*?)archive.html"', '<a href="$1archive.html" class="cta-button active"'
        }
        
        # Update CSS and JS paths
        $updatedContent = $updatedContent -replace 'href="styles/', 'href="../assets/css/'
        $updatedContent = $updatedContent -replace 'src="js/', 'src="../assets/js/'
        $updatedContent = $updatedContent -replace 'href="assets/css/', 'href="../assets/css/'
        $updatedContent = $updatedContent -replace 'src="assets/js/', 'src="../assets/js/'
        
        # Save the updated content
        $updatedContent | Set-Content -Path $filePath -NoNewline
        Write-Host "Updated navigation in $file"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Navigation update complete!"
