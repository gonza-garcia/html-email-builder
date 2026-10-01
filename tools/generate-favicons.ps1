# Regenerates favicons/app icons from the Mail Builder mark (own artwork).
# Usage: powershell -ExecutionPolicy Bypass -File tools\generate-favicons.ps1

Add-Type -AssemblyName System.Drawing

$public = Join-Path $PSScriptRoot "..\public"

function C([int]$r, [int]$g, [int]$b) { return [System.Drawing.Color]::FromArgb(255, $r, $g, $b) }

function New-MarkIcon([int]$size, [string]$path) {
    $bmp = [System.Drawing.Bitmap]::new($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $rect = [System.Drawing.Rectangle]::new(0, 0, $size, $size)
    $br = [System.Drawing.Drawing2D.LinearGradientBrush]::new($rect, (C 67 56 202), (C 129 140 248), 45)
    $g.FillRectangle($br, $rect)
    $br.Dispose()

    $pad = $size * 0.24
    $ew = $size - $pad * 2
    $eh = $ew * 0.68
    $ey = ($size - $eh) / 2
    $r = [Math]::Max(1, $size * 0.07)
    $path2 = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $d = $r * 2
    $path2.AddArc($pad, $ey, $d, $d, 180, 90)
    $path2.AddArc($pad + $ew - $d, $ey, $d, $d, 270, 90)
    $path2.AddArc($pad + $ew - $d, $ey + $eh - $d, $d, $d, 0, 90)
    $path2.AddArc($pad, $ey + $eh - $d, $d, $d, 90, 90)
    $path2.CloseFigure()
    $wb = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
    $g.FillPath($wb, $path2)

    $pen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(255, 67, 56, 202), [Math]::Max(1, $size * 0.055))
    $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $g.DrawLine($pen, $pad + $ew * 0.12, $ey + $eh * 0.22, $pad + $ew / 2, $ey + $eh * 0.62)
    $g.DrawLine($pen, $pad + $ew * 0.88, $ey + $eh * 0.22, $pad + $ew / 2, $ey + $eh * 0.62)

    $g.Dispose()
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

New-MarkIcon 16  (Join-Path $public "favicon-16x16.png")
New-MarkIcon 32  (Join-Path $public "favicon-32x32.png")
New-MarkIcon 180 (Join-Path $public "apple-touch-icon.png")
New-MarkIcon 192 (Join-Path $public "android-chrome-192x192.png")
New-MarkIcon 512 (Join-Path $public "android-chrome-512x512.png")
New-MarkIcon 150 (Join-Path $public "mstile-150x150.png")

# favicon.ico: 16+32 PNG-compressed icons in one container
Add-Type -AssemblyName System.Drawing
$png16 = [System.IO.File]::ReadAllBytes((Join-Path $public "favicon-16x16.png"))
$png32 = [System.IO.File]::ReadAllBytes((Join-Path $public "favicon-32x32.png"))
$ms = New-Object System.IO.MemoryStream
$bw = New-Object System.IO.BinaryWriter($ms)
$bw.Write([uint16]0)      # reserved
$bw.Write([uint16]1)      # type: icon
$bw.Write([uint16]2)      # count
foreach ($entry in @(@(16, $png16), @(32, $png32))) {
    $bytes = $entry[1]
    $bw.Write([byte]($entry[0] -band 0xFF))  # width (0 means 256)
    $bw.Write([byte]($entry[0] -band 0xFF))  # height
    $bw.Write([byte]0)                        # palette
    $bw.Write([byte]0)                        # reserved
    $bw.Write([uint16]1)                      # planes
    $bw.Write([uint16]32)                     # bpp
    $bw.Write([uint32]$bytes.Length)
    $bw.Write([uint32]0)                      # offset placeholder
}
$offset = 6 + 2 * 16
$lengths = @($png16.Length, $png32.Length)
for ($i = 0; $i -lt 2; $i++) {
    $bw.Flush()
    $ms.Position = 6 + $i * 16 + 12
    $bw.Write([uint32]$offset)
    $offset += $lengths[$i]
}
$ms.Position = $ms.Length
$bw.Write($png16)
$bw.Write($png32)
$bw.Flush()
[System.IO.File]::WriteAllBytes((Join-Path $public "favicon.ico"), $ms.ToArray())
$bw.Dispose()
$ms.Dispose()

# safari-pinned-tab.svg: own single-color envelope mark
$svg = @'
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#000000" d="M96 144c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V144zm48 30 128 96 128-96v-14L256 256 144 160v14z"/>
</svg>
'@
Set-Content -Path (Join-Path $public "safari-pinned-tab.svg") -Value $svg -Encoding UTF8

Write-Host "Favicons regenerated."
