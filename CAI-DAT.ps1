# Cài BỘ SKILL EDIT VIDEO HMT vào Claude Code trên máy này.
# Chạy bằng cách bấm đúp CAI-DAT.bat (không cần quyền Administrator).

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$dest = Join-Path $HOME ".claude\skills"
$skills = Get-ChildItem (Join-Path $here "skills") -Directory

function Buoc($t) { Write-Host ""; Write-Host "== $t" -ForegroundColor Yellow }
function Ok($t)   { Write-Host "   [OK] $t" -ForegroundColor Green }
function Thieu($t){ Write-Host "   [THIẾU] $t" -ForegroundColor Red }
function Hoi($t)  { $a = Read-Host "   $t (Y/N)"; return ($a -match '^[yYcC]') }

Write-Host "BỘ SKILL EDIT VIDEO HMT — CÀI ĐẶT ($($skills.Count) skill)" -ForegroundColor Cyan
Write-Host "Tác giả: Hồ Mạnh Thắng (kênh HMT)" -ForegroundColor DarkYellow

# 1. Python
Buoc "1/5  Kiểm tra Python 3.10+"
$pyOk = $false
if (Get-Command python -ErrorAction SilentlyContinue) {
    $v = (& python -c "import sys;print('%d.%d'%sys.version_info[:2])") 2>$null
    if ($v -and [version]$v -ge [version]"3.10") { Ok "Python $v"; $pyOk = $true }
}
if (-not $pyOk) {
    Thieu "Chưa có Python 3.10 trở lên"
    if (Hoi "Cài Python 3.12 bằng winget?") {
        winget install -e --id Python.Python.3.12 --accept-package-agreements --accept-source-agreements
        Write-Host "   Đã cài xong. ĐÓNG cửa sổ này rồi chạy lại CAI-DAT.bat." -ForegroundColor Cyan
    } else {
        Write-Host "   Tải tại https://www.python.org/downloads/ (nhớ tick 'Add python.exe to PATH')"
    }
    Read-Host "   Nhấn Enter để thoát"; exit 1
}

# 2. ffmpeg
Buoc "2/5  Kiểm tra ffmpeg"
if (Get-Command ffmpeg -ErrorAction SilentlyContinue) {
    Ok ((& ffmpeg -version | Select-Object -First 1) -replace ' Copyright.*', '')
} else {
    Thieu "Chưa có ffmpeg"
    if (Hoi "Cài ffmpeg (bản full, có libass) bằng winget?") {
        winget install -e --id Gyan.FFmpeg --accept-package-agreements --accept-source-agreements
        Write-Host "   Cài xong cần mở lại cửa sổ mới để nhận PATH." -ForegroundColor Cyan
    } else { Write-Host "   Tải tại https://www.gyan.dev/ffmpeg/builds/ (bản full) rồi thêm thư mục bin vào PATH." }
}

# 3. Chép skill
Buoc "3/5  Chép $($skills.Count) skill vào $dest"
New-Item -ItemType Directory -Force $dest | Out-Null
$stamp = Get-Date -Format "yyyyMMdd-HHmm"
foreach ($s in $skills) {
    $target = Join-Path $dest $s.Name
    if (Test-Path $target) {
        $bak = Join-Path $HOME ".claude\skills-backup\$stamp\$($s.Name)"
        New-Item -ItemType Directory -Force (Split-Path $bak) | Out-Null
        Move-Item $target $bak
        Write-Host "   (bản cũ của $($s.Name) đã cất vào .claude\skills-backup\$stamp)"
    }
    Copy-Item $s.FullName $target -Recurse
    Ok $s.Name
}

# 4. Thư viện Python
Buoc "4/5  Cài thư viện Python (mất vài phút)"
& python -m pip install --upgrade pip --quiet
& python -m pip install -r (Join-Path $here "requirements.txt")
if ($LASTEXITCODE -eq 0) { Ok "Đã cài thư viện" } else { Thieu "pip báo lỗi — chụp màn hình gửi người hỗ trợ" }

# 5. GPU + trình duyệt
Buoc "5/5  Tăng tốc GPU NVIDIA và trình duyệt"
if (Get-Command nvidia-smi -ErrorAction SilentlyContinue) {
    Ok "Có card NVIDIA"
    if (Hoi "Cài gói CUDA cho whisper (nghe giọng nhanh gấp ~3 lần, ~1 GB)?") {
        & python -m pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12>=9,<10"
    }
} else { Write-Host "   Không thấy card NVIDIA — skill vẫn chạy bằng CPU (chậm hơn)." }
$chrome = @("$env:ProgramFiles\Google\Chrome\Application\chrome.exe", "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ }
if ($chrome) { Ok "Có Chrome/Edge (cho skill animation)" } else { Thieu "Chưa có Chrome hoặc Edge — skill Animation cần một trong hai" }

Write-Host ""
Write-Host "XONG! Mở Claude Code và gõ / để thấy các skill chuyen-gia-...-HMT." -ForegroundColor Cyan
Write-Host "Xem hướng dẫn từng skill: mở file GIOI-THIEU.html trong thư mục này." -ForegroundColor Cyan
Read-Host "Nhấn Enter để đóng"
