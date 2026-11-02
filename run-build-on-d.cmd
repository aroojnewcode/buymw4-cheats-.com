@echo off
setlocal
set TEMP=D:\temp
set TMP=D:\temp
set NPM_CONFIG_CACHE=D:\npm-cache
cd /d D:\buymw4cheats-net
echo === npm install ===>> D:\temp\build-log.txt
call npm install --cache D:\npm-cache --prefer-offline >> D:\temp\build-log.txt 2>&1
echo npm install exit: %ERRORLEVEL%>> D:\temp\build-log.txt
if errorlevel 1 exit /b %ERRORLEVEL%
echo === npm run build ===>> D:\temp\build-log.txt
call npm run build >> D:\temp\build-log.txt 2>&1
echo npm run build exit: %ERRORLEVEL%>> D:\temp\build-log.txt
exit /b %ERRORLEVEL%
