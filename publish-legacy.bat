@echo off
rem OLD site at root + all three designs as mirrors (/v1 /v2 /v3)
cd /d "%~dp0"
node publish.mjs
echo.
echo Done. Open GitHub Desktop and press "Push origin" to publish.
pause
