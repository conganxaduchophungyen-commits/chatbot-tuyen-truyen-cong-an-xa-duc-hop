[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "KHỞI ĐỘNG HỆ THỐNG TRỢ LÝ PHÁP LUẬT & TTHC (DEV MODE)" -ForegroundColor Yellow
Write-Host "Đơn vị: CÔNG AN XÃ ĐỨC HỢP, TỈNH HƯNG YÊN" -ForegroundColor Green
Write-Host "Trụ sở: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan

Write-Host "`n[0/2] Kiểm tra và giải phóng cổng mạng (Port 3000, 8000)..." -ForegroundColor Yellow
foreach ($Port in @(3000, 8000)) {
    $lines = netstat -ano | Select-String ":$Port\s+.*LISTENING"
    foreach ($line in $lines) {
        $parts = ($line.ToString().Trim() -split '\s+')
        $procId = $parts[-1]
        if ($procId -match '^\d+$' -and [int]$procId -gt 0) {
            Write-Host "  -> Đang giải phóng Port $Port (PID: $procId)..." -ForegroundColor DarkYellow
            cmd /c "taskkill /F /T /PID $procId >nul 2>&1"
        }
    }
}
Start-Sleep -Seconds 1

Write-Host "[1/2] Đang khởi động Backend FastAPI (Port 8000)..." -ForegroundColor Yellow
$BackendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    $env:PYTHONPATH = "backend"
    $env:PYTHONIOENCODING = "utf-8"
    if (Test-Path ".\backend\venv\Scripts\python.exe") {
        .\backend\venv\Scripts\python.exe -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
    }
}

Write-Host "[2/2] Đang khởi động Frontend Next.js (Port 3000)..." -ForegroundColor Yellow
Write-Host "Hệ thống sẵn sàng tại: http://localhost:3000" -ForegroundColor Green
Set-Location frontend
npm run dev
