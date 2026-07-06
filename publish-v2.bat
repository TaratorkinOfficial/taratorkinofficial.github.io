@echo off
rem v2 (blue riso) at root + /v1 /v3 mirrors
cd /d "%~dp0"
node publish.mjs v2
echo.
echo Done. Open GitHub Desktop and press "Push origin" to publish.
pause
