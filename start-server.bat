@echo off
echo Starting local server for Nexus FinTech website...
echo Press Ctrl+C to stop the server

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo Using Python to start local server...
    python -m http.server 8000
) else (
    echo Python not found. Please install Python or use the PowerShell script instead.
    echo Starting PowerShell script...
    powershell -ExecutionPolicy Bypass -File start-local-server.ps1
)

pause 