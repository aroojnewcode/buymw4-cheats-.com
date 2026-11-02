@echo off
set TEMP=D:\temp
set TMP=D:\temp
set npm_config_cache=D:\npm-cache
cd /d D:\buymw4cheats-net
call npm run build
if errorlevel 1 exit /b 1
echo.
echo Preview: http://127.0.0.1:4322/
echo Press Ctrl+C to stop.
echo.
npm run preview -- --host 127.0.0.1 --port 4322
