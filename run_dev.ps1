# SCRIPT KHỞI CHẠY HỆ THỐNG (LOCAL DEV)
# DỰ ÁN: TRỢ LÝ PHÁP LUẬT & TTHC CÔNG AN XÃ ĐỨC HỢP, TỈNH HƯNG YÊN

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "KHỞI ĐỘNG HỆ THỐNG TRỢ LÝ PHÁP LUẬT & TTHC (DEV MODE)" -ForegroundColor Yellow
Write-Host "Đơn vị: CÔNG AN XÃ ĐỨC HỢP, TỈNH HƯNG YÊN" -ForegroundColor Green
Write-Host "Trụ sở: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan

# 0. Giải phóng cổng 3000 và 8000 nếu đang bị chiếm
Write-Host "`n[0/2] Kiểm tra và giải phóng cổng mạng (Port 3000, 8000)..." -ForegroundColor Yellow
$Ports = @(3000, 8000)
foreach ($Port in $Ports) {
    $Connections = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
    if ($Connections) {
        $pids = $Connections | Select-Object -ExpandProperty OwningProcess -Unique
        foreach ($p in $pids) {
            if ($p -gt 0) {
                Write-Host "  -> Đang giải phóng Port $Port (tắt tiến trình cũ PID: $p)..." -ForegroundColor DarkYellow
                Stop-Process -Id $p -Force -ErrorAction SilentlyContinue
            }
        }
    }
}
Start-Sleep -Milliseconds 800

# 1. Khởi động Backend FastAPI
Write-Host "[1/2] Đang khởi động Backend FastAPI (Port 8000)..." -ForegroundColor Yellow
$BackendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    $env:PYTHONPATH = "backend"
    $env:PYTHONIOENCODING = "utf-8"
    .\backend\venv\Scripts\python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
}

# 2. Khởi động Frontend Next.js
Write-Host "[2/2] Đang khởi động Frontend Next.js (Port 3000)..." -ForegroundColor Yellow
Write-Host "Hệ thống sẽ sẵn sàng tại: http://localhost:3000" -ForegroundColor Green
Set-Location frontend
npm run dev
