# PowerShell script to verify and update video embed codes

# Paths
$masterJsonPath = "$PSScriptRoot\video-embeds.json"
$galleryArchivePath = "$PSScriptRoot\pages\gallery-archive.html"

# Read the master JSON file
$masterJson = Get-Content -Path $masterJsonPath -Raw | ConvertFrom-Json
$masterVideos = @{}
$masterJson.videos | ForEach-Object { $masterVideos[$_.id] = $_ }

# Read the gallery archive HTML
$galleryHtml = Get-Content -Path $galleryArchivePath -Raw

# Find the video data array in the HTML
$videoDataMatch = [regex]::Match($galleryHtml, 'const videoData = (\[.*?\]);', [System.Text.RegularExpressions.RegexOptions]::Singleline)
if (-not $videoDataMatch.Success) {
    Write-Error "Could not find videoData in gallery-archive.html"
    exit 1
}

# Extract the video data array
$videoDataStr = $videoDataMatch.Groups[1].Value

# Convert the JavaScript array to PowerShell objects
$videoData = @()
$videoMatches = [regex]::Matches($videoDataStr, '\{\s*id:\s*\''([^\'']+)\''[^\}]+\}');

foreach ($match in $videoMatches) {
    $videoObj = @{
        id = $null
        title = $null
        embedCode = $null
        tags = @()
    }
    
    # Extract video ID
    $idMatch = [regex]::Match($match.Value, "id:\s*'([^']+)'")
    if ($idMatch.Success) { $videoObj.id = $idMatch.Groups[1].Value }
    
    # Extract title
    $titleMatch = [regex]::Match($match.Value, "title:\s*'([^']+)")
    if ($titleMatch.Success) { $videoObj.title = $titleMatch.Groups[1].Value }
    
    # Extract embed code
    $embedMatch = [regex]::Match($match.Value, "embedCode:\s*'([^']+)")
    if ($embedMatch.Success) { $videoObj.embedCode = $embedMatch.Groups[1].Value }
    
    # Extract tags
    $tagsMatch = [regex]::Match($match.Value, "tags:\s*\[([^\]]+)\]")
    if ($tagsMatch.Success) {
        $tagsStr = $tagsMatch.Groups[1].Value
        $videoObj.tags = $tagsStr -split "'" | Where-Object { $_ -ne ',' -and $_ -ne ' ' -and $_ -ne '' }
    }
    
    $videoData += $videoObj
}

# Track changes
$updatedCount = 0
$notInMaster = @()
$updatedVideos = @()

# Update video data with master embed codes
foreach ($video in $videoData) {
    $videoObj = @{
        id = $video.id
        title = $video.title
        embedCode = $video.embedCode
        tags = $video.tags
    }
    
    if ($masterVideos.ContainsKey($video.id)) {
        $masterVideo = $masterVideos[$video.id]
        
        # Check if embed code matches
        if ($video.embedCode -ne $masterVideo.embed_code) {
            Write-Host "Updating embed code for: $($video.title) ($($video.id))"
            $videoObj.embedCode = $masterVideo.embed_code
            $updatedCount++
        }
    } else {
        # Video not in master list
        $notInMaster += @{
            id = $video.id
            title = $video.title
        }
    }
    
    $updatedVideos += $videoObj
}

# Convert back to JavaScript object format
$jsObjectStrings = @()
foreach ($video in $updatedVideos) {
    $tags = $video.tags -join "', '"
    $jsObject = @"
            {
                id: '$($video.id)',
                title: '$($video.title -replace "'", "\'" -replace "`n", " ")',
                embedCode: '$($video.embedCode -replace "'", "\'" -replace "`n", "")',
                tags: ['$tags']
            }
"@
    $jsObjectStrings += $jsObject.Trim()
}

$updatedVideoDataJs = "[
    " + ($jsObjectStrings -join ",`n    ") + "
        ]"

# Update the HTML with the corrected video data
$updatedHtml = $galleryHtml -replace 'const videoData = \[.*?\];', "const videoData = $updatedVideoDataJs;"

# Write the updated HTML back to the file
$updatedHtml | Set-Content -Path $galleryArchivePath -NoNewline

# Update the master JSON with any new videos from the gallery
$masterUpdated = $false
foreach ($video in $videoData) {
    if (-not $masterVideos.ContainsKey($video.id)) {
        Write-Host "Adding new video to master: $($video.title) ($($video.id))"
        $newVideo = @{
            id = $video.id
            title = $video.title
            embed_code = $video.embedCode
            tags = if ($video.tags) { @($video.tags) } else { @() }
            added_date = Get-Date -Format "yyyy-MM-dd"
            verified = $false
        }
        $masterJson.videos += $newVideo
        $masterUpdated = $true
    }
}

# If master was updated, save it
if ($masterUpdated) {
    $masterJson.last_updated = Get-Date -Format "yyyy-MM-ddTHH:mm:sszzz"
    $masterJson | ConvertTo-Json -Depth 10 | Set-Content -Path $masterJsonPath -NoNewline
}

# Print summary
Write-Host "`n=== Embed Code Verification Complete ==="
Write-Host "• Updated $updatedCount embed codes"
Write-Host "• $($notInMaster.Count) videos not found in master list:"
foreach ($video in $notInMaster) {
    Write-Host "  - $($video.title) ($($video.id))"
}

if ($masterUpdated) {
    Write-Host "`nMaster JSON has been updated with new videos."
    Write-Host "Please verify the new videos and set verified: true in video-embeds.json"
}
