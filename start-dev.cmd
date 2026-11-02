@echo off
set TEMP=D:\temp
set TMP=D:\temp
set npm_config_cache=D:\npm-cache
cd /d D:\buymw4cheats-net
echo.
echo Dev server: http://127.0.0.1:4321/
echo Press Ctrl+C to stop.
echo.
npm run dev -- --host 127.0.0.1 --port 4321
