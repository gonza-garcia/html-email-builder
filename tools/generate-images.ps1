# Generates all demo images for the app (headers, icons, banners, logos, previews).
# Pure System.Drawing — no external assets, nothing to license. Deterministic.
# Usage: powershell -ExecutionPolicy Bypass -File tools\generate-images.ps1

Add-Type -AssemblyName System.Drawing

$root = Join-Path $PSScriptRoot "..\public\images"
foreach ($d in @("headers", "icons", "banners", "logos", "previews", "others")) {
    $p = Join-Path $root $d
    if (!(Test-Path $p)) { New-Item -ItemType Directory -Path $p | Out-Null }
}

function C([int]$r, [int]$g, [int]$b) {
    return [System.Drawing.Color]::FromArgb(255, $r, $g, $b)
}

$themes = @{
    security   = @((C 127 29 29),  (C 220 38 38),  (C 254 226 226))
    vpn        = @((C 15 118 110), (C 20 184 166), (C 204 251 241))
    teams      = @((C 109 40 217), (C 139 92 246), (C 237 233 254))
    servicenow = @((C 29 78 216),  (C 59 130 246), (C 219 234 254))
    quality    = @((C 22 101 52),  (C 34 197 94),  (C 220 252 231))
    update     = @((C 30 64 175),  (C 96 165 250), (C 219 234 254))
    generic    = @((C 67 56 202),  (C 129 140 248),(C 224 231 255))
}
$themeNames = @("security", "vpn", "teams", "servicenow", "quality", "update", "generic")

function New-Canvas([int]$w, [int]$h) {
    $bmp = [System.Drawing.Bitmap]::new($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
    return @($bmp, $g)
}

function Save-Png($bmp, $g, [string]$path) {
    $g.Dispose()
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

function Draw-Gradient($g, [int]$w, [int]$h, $c1, $c2, [float]$angle) {
    $rect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
    $brush = [System.Drawing.Drawing2D.LinearGradientBrush]::new($rect, $c1, $c2, $angle)
    $g.FillRectangle($brush, $rect)
    $brush.Dispose()
}

function Draw-Circle($g, [float]$cx, [float]$cy, [float]$d, $color) {
    $b = [System.Drawing.SolidBrush]::new($color)
    $g.FillEllipse($b, $cx - $d / 2, $cy - $d / 2, $d, $d)
    $b.Dispose()
}

function Draw-RoundRect($g, [float]$x, [float]$y, [float]$w, [float]$h, [float]$r, $color) {
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $d = $r * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    $b = [System.Drawing.SolidBrush]::new($color)
    $g.FillPath($b, $path)
    $b.Dispose()
    $path.Dispose()
}

function Draw-Text($g, [string]$text, [float]$x, [float]$y, [float]$size, $color, [string]$style) {
    $fs = [System.Drawing.FontStyle]::Regular
    if ($style -eq "bold") { $fs = [System.Drawing.FontStyle]::Bold }
    $font = [System.Drawing.Font]::new("Segoe UI", $size, $fs)
    $b = [System.Drawing.SolidBrush]::new($color)
    $g.DrawString($text, $font, $b, $x, $y)
    $b.Dispose()
    $font.Dispose()
}

function Draw-LabelCentered($g, [string]$text, [float]$y, [float]$size, $color, [int]$w) {
    $fs = [System.Drawing.FontStyle]::Bold
    $font = [System.Drawing.Font]::new("Segoe UI", $size, $fs)
    $b = [System.Drawing.SolidBrush]::new($color)
    $fmt = [System.Drawing.StringFormat]::new()
    $fmt.Alignment = [System.Drawing.StringAlignment]::Center
    $rect = [System.Drawing.RectangleF]::new(0, $y, $w, $size * 2)
    $g.DrawString($text, $font, $b, $rect, $fmt)
    $b.Dispose()
    $font.Dispose()
    $fmt.Dispose()
}

function Draw-PlayGlyph($g, [float]$cx, [float]$cy, [float]$s, $color) {
    $b = [System.Drawing.SolidBrush]::new($color)
    $pts = @(
        [System.Drawing.PointF]::new($cx - $s * 0.35, $cy - $s * 0.5),
        [System.Drawing.PointF]::new($cx + $s * 0.5, $cy),
        [System.Drawing.PointF]::new($cx - $s * 0.35, $cy + $s * 0.5)
    )
    $g.FillPolygon($b, $pts)
    $b.Dispose()
}

# ---------------------------------------------------------------- headers
function New-Header([string]$themeName, [int]$variant, [string]$label) {
    $t = $themes[$themeName]
    $w = 600; $h = 200
    $a = New-Canvas $w $h
    $bmp = $a[0]; $g = $a[1]
    Draw-Gradient $g $w $h $t[0] $t[1] 30
    switch ($variant % 3) {
        0 {
            Draw-Circle $g 520 -20 220 $t[2]
            Draw-Circle $g 70 210 180 $t[2]
            Draw-Circle $g 300 120 60 $t[2]
        }
        1 {
            Draw-RoundRect $g -40 -40 260 260 60 $t[2]
            Draw-RoundRect $g 420 60 260 260 60 $t[2]
            Draw-RoundRect $g 250 -30 120 120 30 $t[2]
        }
        2 {
            Draw-Circle $g 500 100 320 $t[2]
            Draw-Circle $g 120 40 120 $t[2]
            Draw-RoundRect $g 200 150 380 100 40 $t[2]
        }
    }
    $scrim = [System.Drawing.Color]::FromArgb(60, 0, 0, 0)
    $sb = [System.Drawing.SolidBrush]::new($scrim)
    $g.FillRectangle($sb, 0, 0, $w, $h)
    $sb.Dispose()
    Draw-LabelCentered $g $label ($h / 2 - 22) 26 (C 255 255 255) $w
    $p = Join-Path $root ("headers\header-{0}-{1}.png" -f $themeName, $variant)
    Save-Png $bmp $g $p
}

$headerLabels = @{
    security = "Security Update"; vpn = "Secure Connectivity"; teams = "Team Collaboration"
    servicenow = "Service Portal"; quality = "Quality Matters"; update = "System Update"
    generic = "Company News"
}
foreach ($tname in $themeNames) {
    for ($v = 0; $v -lt 2; $v++) {
        New-Header $tname $v $headerLabels[$tname]
    }
}

# ---------------------------------------------------------------- icons
function New-Icon([string]$name, [string]$themeName, [string]$glyph) {
    $t = $themes[$themeName]
    $s = 160
    $a = New-Canvas $s $s
    $bmp = $a[0]; $g = $a[1]
    Draw-RoundRect $g 8 8 ($s - 16) ($s - 16) 36 $t[1]
    $white = C 255 255 255
    $cx = $s / 2; $cy = $s / 2
    $pen = [System.Drawing.Pen]::new($white, 7)
    $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $b = [System.Drawing.SolidBrush]::new($white)

    switch ($glyph) {
        "lock" {
            Draw-RoundRect $g ($cx - 26) ($cy - 4) 52 42 8 $white
            $g.DrawArc($pen, $cx - 18, $cy - 34, 36, 40, 180, 180)
        }
        "shield" {
            $pts = @(
                [System.Drawing.PointF]::new($cx, $cy - 38),
                [System.Drawing.PointF]::new($cx + 32, $cy - 22),
                [System.Drawing.PointF]::new($cx + 32, $cy + 8),
                [System.Drawing.PointF]::new($cx, $cy + 38),
                [System.Drawing.PointF]::new($cx - 32, $cy + 8),
                [System.Drawing.PointF]::new($cx - 32, $cy - 22)
            )
            $g.FillPolygon($b, $pts)
        }
        "clock" {
            $g.DrawEllipse($pen, $cx - 32, $cy - 32, 64, 64)
            $g.DrawLine($pen, $cx, $cy, $cx, $cy - 20)
            $g.DrawLine($pen, $cx, $cy, $cx + 16, $cy + 6)
        }
        "calendar" {
            Draw-RoundRect $g ($cx - 32) ($cy - 30) 64 62 8 $white
            $acc = [System.Drawing.SolidBrush]::new($t[0])
            $g.FillRectangle($acc, $cx - 32, $cy - 30, 64, 14)
            $acc.Dispose()
            $g.DrawLine($pen, $cx - 18, $cy - 38, $cx - 18, $cy - 22)
            $g.DrawLine($pen, $cx + 18, $cy - 38, $cx + 18, $cy - 22)
        }
        "download" {
            $g.DrawLine($pen, $cx, $cy - 34, $cx, $cy + 10)
            $pts = @(
                [System.Drawing.PointF]::new($cx - 18, $cy + 2),
                [System.Drawing.PointF]::new($cx + 18, $cy + 2),
                [System.Drawing.PointF]::new($cx, $cy + 26)
            )
            $g.FillPolygon($b, $pts)
            $g.DrawLine($pen, $cx - 28, $cy + 34, $cx + 28, $cy + 34)
        }
        "monitor" {
            Draw-RoundRect $g ($cx - 36) ($cy - 32) 72 50 6 $white
            $g.DrawLine($pen, $cx - 16, $cy + 30, $cx + 16, $cy + 30)
            $g.DrawLine($pen, $cx, $cy + 18, $cx, $cy + 30)
        }
        "phone" {
            Draw-RoundRect $g ($cx - 20) ($cy - 34) 40 68 10 $white
            $g.DrawLine($pen, $cx - 6, $cy + 24, $cx + 6, $cy + 24)
        }
        "video" {
            Draw-RoundRect $g ($cx - 36) ($cy - 24) 52 48 8 $white
            $pts = @(
                [System.Drawing.PointF]::new($cx + 18, $cy - 12),
                [System.Drawing.PointF]::new($cx + 38, $cy - 24),
                [System.Drawing.PointF]::new($cx + 38, $cy + 24),
                [System.Drawing.PointF]::new($cx + 18, $cy + 12)
            )
            $g.FillPolygon($b, $pts)
        }
        "chat" {
            Draw-RoundRect $g ($cx - 34) ($cy - 30) 68 46 12 $white
            $pts = @(
                [System.Drawing.PointF]::new($cx - 12, $cy + 12),
                [System.Drawing.PointF]::new($cx - 12, $cy + 34),
                [System.Drawing.PointF]::new($cx + 10, $cy + 14)
            )
            $g.FillPolygon($b, $pts)
        }
        "warning" {
            $pts = @(
                [System.Drawing.PointF]::new($cx, $cy - 38),
                [System.Drawing.PointF]::new($cx + 38, $cy + 30),
                [System.Drawing.PointF]::new($cx - 38, $cy + 30)
            )
            $g.FillPolygon($b, $pts)
            $acc = [System.Drawing.SolidBrush]::new($t[0])
            $g.FillRectangle($acc, $cx - 4, $cy - 14, 8, 24)
            $g.FillEllipse($acc, $cx - 5, $cy + 16, 10, 10)
            $acc.Dispose()
        }
        "user" {
            $g.FillEllipse($b, $cx - 16, $cy - 34, 32, 32)
            $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
            $path.AddArc($cx - 32, $cy - 2, 64, 64, 180, 180)
            $path.CloseFigure()
            $g.FillPath($b, $path)
            $path.Dispose()
        }
        "gear" {
            $g.FillEllipse($b, $cx - 30, $cy - 30, 60, 60)
            $acc = [System.Drawing.SolidBrush]::new($t[1])
            $g.FillEllipse($acc, $cx - 12, $cy - 12, 24, 24)
            $acc.Dispose()
            for ($i = 0; $i -lt 8; $i++) {
                $ang = $i * [Math]::PI / 4
                $x1 = $cx + [Math]::Cos($ang) * 26
                $y1 = $cy + [Math]::Sin($ang) * 26
                $x2 = $cx + [Math]::Cos($ang) * 38
                $y2 = $cy + [Math]::Sin($ang) * 38
                $g.DrawLine($pen, $x1, $y1, $x2, $y2)
            }
        }
        "mail" {
            Draw-RoundRect $g ($cx - 36) ($cy - 24) 72 48 6 $white
            $g.DrawLine($pen, $cx - 36, $cy - 22, $cx, $cy + 4)
            $g.DrawLine($pen, $cx + 36, $cy - 22, $cx, $cy + 4)
        }
        "cloud" {
            $g.FillEllipse($b, $cx - 34, $cy - 8, 36, 36)
            $g.FillEllipse($b, $cx - 6, $cy - 22, 42, 42)
            $g.FillEllipse($b, $cx + 10, $cy - 4, 30, 30)
            Draw-RoundRect $g ($cx - 30) ($cy + 12) 56 16 8 $white
        }
        "key" {
            $g.FillEllipse($b, $cx - 30, $cy - 16, 32, 32)
            $acc = [System.Drawing.SolidBrush]::new($t[1])
            $g.FillEllipse($acc, $cx - 21, $cy - 7, 14, 14)
            $acc.Dispose()
            Draw-RoundRect $g ($cx - 6) ($cy - 5) 44 12 5 $white
            $g.DrawLine($pen, $cx + 16, $cy + 6, $cx + 16, $cy + 20)
            $g.DrawLine($pen, $cx + 30, $cy + 6, $cx + 30, $cy + 20)
        }
        "chart" {
            Draw-RoundRect $g ($cx - 34) ($cy + 2) 16 28 4 $white
            Draw-RoundRect $g ($cx - 8) ($cy - 20) 16 50 4 $white
            Draw-RoundRect $g ($cx + 18) ($cy - 6) 16 36 4 $white
        }
        "check" {
            $g.DrawEllipse($pen, $cx - 32, $cy - 32, 64, 64)
            $g.DrawLine($pen, $cx - 16, $cy, $cx - 4, $cy + 14)
            $g.DrawLine($pen, $cx - 4, $cy + 14, $cx + 18, $cy - 14)
        }
        "globe" {
            $g.DrawEllipse($pen, $cx - 32, $cy - 32, 64, 64)
            $g.DrawEllipse($pen, $cx - 14, $cy - 32, 28, 64)
            $g.DrawLine($pen, $cx - 32, $cy, $cx + 32, $cy)
        }
        "search" {
            $g.DrawEllipse($pen, $cx - 26, $cy - 26, 40, 40)
            $g.DrawLine($pen, $cx + 8, $cy + 8, $cx + 28, $cy + 28)
        }
        "folder" {
            Draw-RoundRect $g ($cx - 34) ($cy - 16) 68 44 6 $white
            Draw-RoundRect $g ($cx - 34) ($cy - 30) 30 18 5 $white
        }
        "info" {
            $g.FillEllipse($b, $cx - 32, $cy - 32, 64, 64)
            $acc = [System.Drawing.SolidBrush]::new($t[1])
            $g.FillEllipse($acc, $cx - 5, $cy - 24, 10, 10)
            $g.FillRectangle($acc, $cx - 5, $cy - 10, 10, 30)
            $acc.Dispose()
        }
        "star" {
            $pts = @()
            for ($i = 0; $i -lt 10; $i++) {
                $ang = -[Math]::PI / 2 + $i * [Math]::PI / 5
                $rad = 34
                if ($i % 2 -eq 1) { $rad = 15 }
                $pts += [System.Drawing.PointF]::new($cx + [Math]::Cos($ang) * $rad, $cy + [Math]::Sin($ang) * $rad)
            }
            $g.FillPolygon($b, $pts)
        }
    }
    $pen.Dispose()
    $b.Dispose()
    $p = Join-Path $root ("icons\icon-{0}.png" -f $name)
    Save-Png $bmp $g $p
}

$iconDefs = @(
    @("lock", "security", "lock"), @("shield", "security", "shield"),
    @("warning", "security", "warning"), @("key", "security", "key"),
    @("globe", "vpn", "globe"), @("cloud", "vpn", "cloud"),
    @("monitor", "update", "monitor"), @("download", "update", "download"),
    @("phone", "teams", "phone"), @("video", "teams", "video"),
    @("chat", "teams", "chat"), @("user", "teams", "user"),
    @("gear", "servicenow", "gear"), @("mail", "servicenow", "mail"),
    @("folder", "servicenow", "folder"), @("search", "servicenow", "search"),
    @("chart", "quality", "chart"), @("check", "quality", "check"),
    @("star", "quality", "star"), @("calendar", "generic", "calendar"),
    @("clock", "generic", "clock"), @("info", "generic", "info")
)
foreach ($def in $iconDefs) {
    New-Icon $def[0] $def[1] $def[2]
}

# ---------------------------------------------------------------- banners
function New-Banner([string]$themeName, [int]$variant, [string]$title, [string]$cta) {
    $t = $themes[$themeName]
    $w = 600; $h = 260
    $a = New-Canvas $w $h
    $bmp = $a[0]; $g = $a[1]
    Draw-Gradient $g $w $h $t[0] $t[1] 45
    Draw-Circle $g 540 20 180 $t[2]
    Draw-Circle $g 40 250 140 $t[2]
    Draw-LabelCentered $g $title 70 24 (C 255 255 255) $w
    Draw-RoundRect $g ($w / 2 - 90) 150 180 52 26 (C 255 255 255)
    Draw-LabelCentered $g $cta 163 15 $t[0] $w
    $p = Join-Path $root ("banners\banner-{0}-{1}.png" -f $themeName, $variant)
    Save-Png $bmp $g $p
}

$bannerDefs = @(
    @("security", "Stay Safe Online", "Learn More"),
    @("vpn", "Work From Anywhere", "Connect Now"),
    @("teams", "Better Together", "Join Us"),
    @("servicenow", "New Service Portal", "Open Portal"),
    @("quality", "Your Opinion Counts", "Take Survey"),
    @("update", "Ready To Update", "Get Started")
)
$i = 0
foreach ($def in $bannerDefs) {
    New-Banner $def[0] $i $def[1] $def[2]
    $i++
}

# ---------------------------------------------------------------- logos
function New-Logo([string]$name, $textColor, $markColor, $bgColor, [bool]$withBg) {
    $w = 360; $h = 100
    $a = New-Canvas $w $h
    $bmp = $a[0]; $g = $a[1]
    if ($withBg) {
        Draw-RoundRect $g 0 0 $w $h 12 $bgColor
    }
    $mx = 34; $my = 26
    Draw-RoundRect $g $mx $my 48 48 10 $markColor
    $white = C 255 255 255
    Draw-RoundRect $g ($mx + 11) ($my + 16) 26 19 3 $white
    $pen = [System.Drawing.Pen]::new($white, 3)
    $g.DrawLine($pen, $mx + 11, $my + 17, $mx + 24, $my + 27)
    $g.DrawLine($pen, $mx + 37, $my + 17, $mx + 24, $my + 27)
    $pen.Dispose()
    Draw-Text $g "Mail Builder" ($mx + 64) ($my + 6) 26 $textColor "bold"
    Draw-Text $g "HTML Email Composer" ($mx + 66) ($my + 42) 12 $textColor "regular"
    $p = Join-Path $root ("logos\{0}.png" -f $name)
    Save-Png $bmp $g $p
}

New-Logo "logo-mailbuilder" (C 30 41 59) (C 67 56 202) (C 255 255 255) $false
New-Logo "logo-mailbuilder-white" (C 255 255 255) (C 255 255 255) (C 255 255 255) $false
New-Logo "logo-mailbuilder-dark" (C 255 255 255) (C 129 140 248) (C 15 23 42) $true

# ---------------------------------------------------------------- previews
function New-Preview([int]$id, [string]$title, [string]$themeName) {
    $t = $themes[$themeName]
    $w = 300; $h = 200
    $a = New-Canvas $w $h
    $bmp = $a[0]; $g = $a[1]
    $bg = C 248 250 252
    $bgb = [System.Drawing.SolidBrush]::new($bg)
    $g.FillRectangle($bgb, 0, 0, $w, $h)
    $bgb.Dispose()
    Draw-RoundRect $g 12 12 ($w - 24) ($h - 24) 8 (C 255 255 255)
    Draw-Gradient $g ($w - 24) 56 $t[0] $t[1] 20
    $hdrFix = [System.Drawing.Rectangle]::new(12, 12, $w - 24, 56)
    $t2 = $themes[$themeName]
    $g.SetClip($hdrFix)
    Draw-Gradient $g ($w - 24) 56 $t2[0] $t2[1] 20
    $g.ResetClip()
    $titleShort = $title
    if ($titleShort.Length -gt 26) { $titleShort = $titleShort.Substring(0, 24) + "..." }
    Draw-Text $g $titleShort 22 26 11 (C 255 255 255) "bold"
    $line = C 203 213 225
    Draw-RoundRect $g 26 88 ($w - 80) 8 4 $line
    Draw-RoundRect $g 26 104 ($w - 110) 8 4 $line
    Draw-RoundRect $g 26 120 ($w - 70) 8 4 $line
    Draw-RoundRect $g 26 150 110 30 15 $t[1]
    Draw-Text $g "Read More" 46 157 10 (C 255 255 255) "bold"
    $p = Join-Path $root ("previews\prebuilt-{0}.png" -f $id)
    Save-Png $bmp $g $p
}

$previews = @(
    @(1, "01. Acceso Condicional", "security"), @(3, "03. MFA Largo", "security"),
    @(4, "04. Canales Soporte Australia", "servicenow"), @(9, "09. Uso Responsable VPN", "vpn"),
    @(19, "19. Webinar Blue Jeans", "teams"), @(24, "24. ServiceNow Nuevos Paises", "servicenow"),
    @(30, "30. Encuesta ServiceNow", "quality"), @(31, "31. Acceso Condicional", "security"),
    @(32, "32. Numero Teams", "teams"), @(33, "33. Pildoras PMO", "generic"),
    @(34, "34. Comunicacion Telefonica", "teams"), @(35, "35. Encuesta 01", "quality"),
    @(36, "36. Windows 10 Update", "update"), @(38, "38. Invitacion Documentum", "servicenow"),
    @(39, "39. Actualizacion Contrasena", "security"), @(40, "40. Webinar Anuncio", "teams"),
    @(41, "41. Phishing Outlook", "security"), @(47, "47. Notificacion Teams", "teams"),
    @(48, "48. Ciclo Calidad", "quality"), @(49, "49. Liberar Espacio En Disco", "update"),
    @(52, "52. Migracion Skype Teams", "teams"), @(53, "53. Lanzamiento ServiceNow Chile", "servicenow"),
    @(54, "54. Recordatorio Encuesta ServiceNow", "quality"), @(56, "56. Lanzamiento ServiceNow", "servicenow"),
    @(57, "57. Welcome Email Creacion Teams", "teams"), @(58, "58. Email Convocatoria", "generic"),
    @(60, "60. Webinar Colaboradores", "teams"), @(63, "63. Plantillas Email Formacion 2", "generic"),
    @(64, "64. Plantillas Email FAQ", "generic"), @(66, "66. Plantilla Anuncio", "generic"),
    @(69, "69. Info Eficiencia", "quality"), @(70, "70. Anuncio Quiz", "quality"),
    @(74, "74. Encuesta TIC", "quality"), @(75, "75. Video Autonomia", "generic"),
    @(76, "76. Infografia Autonomia", "generic"), @(81, "81. Difusion Webinar", "teams"),
    @(82, "82. Webinar Quiz", "quality"), @(84, "84. Campana Teams", "teams"),
    @(85, "85. Newsletter Espanol", "generic"), @(87, "87. Regularizacion de Puesto", "generic"),
    @(88, "88. Office 365", "update"), @(89, "89. SAP GUI Update", "update"),
    @(90, "90. MFA Tesoreria", "security")
)
foreach ($pv in $previews) {
    New-Preview $pv[0] $pv[1] $pv[2]
}

# ---------------------------------------------------------------- others
function New-Other([int]$idx, [string]$themeName, [string]$label) {
    $t = $themes[$themeName]
    $w = 600; $h = 300
    $a = New-Canvas $w $h
    $bmp = $a[0]; $g = $a[1]
    Draw-Gradient $g $w $h $t[0] $t[1] 60
    Draw-Circle $g 80 260 200 $t[2]
    Draw-Circle $g 520 60 160 $t[2]
    Draw-LabelCentered $g $label 130 22 (C 255 255 255) $w
    $p = Join-Path $root ("others\other-{0}.png" -f $idx)
    Save-Png $bmp $g $p
}

$otherDefs = @(
    @("generic", "Company Announcement"), @("quality", "Performance Report"),
    @("teams", "Video Message"), @("generic", "Award Winner"),
    @("update", "Preview"), @("security", "Info Card")
)
$j = 1
foreach ($def in $otherDefs) {
    New-Other $j $def[0] $def[1]
    $j++
}

Write-Host "Done. Images written to $root"
Get-ChildItem -Recurse $root -Filter *.png | Measure-Object | ForEach-Object { Write-Host "$($_.Count) PNG files" }
