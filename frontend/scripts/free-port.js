const { execSync } = require('child_process');

const PORT = 3000;

try {
  if (process.platform === 'win32') {
    const output = execSync(`netstat -ano | findstr :${PORT}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    const lines = output.split(/\r?\n/);
    const pids = new Set();

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed.includes('LISTENING')) {
        const parts = trimmed.split(/\s+/);
        const pid = parts[parts.length - 1];
        if (pid && /^\d+$/.test(pid) && pid !== '0' && Number(pid) !== process.pid) {
          pids.add(pid);
        }
      }
    }

    for (const pid of pids) {
      try {
        console.log(`[FreePort] Đang giải phóng cổng ${PORT} (Tắt tiến trình cũ PID: ${pid})...`);
        execSync(`taskkill /F /T /PID ${pid}`, { stdio: 'ignore' });
      } catch (e) {
        // Ignore if already exited
      }
    }
  } else {
    try {
      execSync(`fuser -k ${PORT}/tcp`, { stdio: 'ignore' });
    } catch (e) {}
  }
} catch (e) {
  // Port 3000 is already free
}
