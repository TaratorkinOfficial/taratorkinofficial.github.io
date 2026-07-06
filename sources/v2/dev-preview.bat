@echo off
rem Double-click to preview the site locally with live reload.
rem Save any file in src/ — the browser updates itself. Close this window to stop.
cd /d "%~dp0"
npm run dev -- --port 4322 --open
pause
