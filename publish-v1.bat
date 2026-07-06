@echo off
rem v1 (orange print) at root + /v2 /v3 mirrors
cd /d "%~dp0"
node publish.mjs v1
echo.
echo Done. Open GitHub Desktop and press "Push origin" to publish.
pause
