@echo off
rem v3 (dark glass) at root + /v1 /v2 mirrors
cd /d "%~dp0"
node publish.mjs v3
echo.
echo Done. Open GitHub Desktop and press "Push origin" to publish.
pause
