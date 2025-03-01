@echo off
echo ======================================
echo Nexus FinTech - GitHub Upload Script
echo ======================================
echo.

REM Possible Git installation paths
set GIT_PATH_1="C:\Program Files\Git\bin\git.exe"
set GIT_PATH_2="C:\Program Files (x86)\Git\bin\git.exe"
set GIT_PATH_3="%LOCALAPPDATA%\Programs\Git\bin\git.exe"
set GIT_PATH_4="%ProgramFiles%\Git\cmd\git.exe"

REM Check which path exists
set GIT_EXE=""
if exist %GIT_PATH_1% set GIT_EXE=%GIT_PATH_1%
if exist %GIT_PATH_2% set GIT_EXE=%GIT_PATH_2%
if exist %GIT_PATH_3% set GIT_EXE=%GIT_PATH_3%
if exist %GIT_PATH_4% set GIT_EXE=%GIT_PATH_4%

if %GIT_EXE%=="" (
    echo ERROR: Git executable not found.
    echo Please install Git from https://git-scm.com/download/win
    echo After installation, try running this script again.
    pause
    exit /b 1
)

echo Found Git at: %GIT_EXE%
echo.

echo Configuring Git...
%GIT_EXE% config --global user.name "DenzObigs"
%GIT_EXE% config --global user.email "your-email@example.com"

echo.
echo Initializing Git repository...
if not exist .git (
    %GIT_EXE% init
) else (
    echo Git repository already initialized.
)

echo.
echo Adding files to Git...
%GIT_EXE% add .

echo.
echo Committing files...
%GIT_EXE% commit -m "Initial commit of Nexus FinTech website"

echo.
echo Adding remote repository...
%GIT_EXE% remote add origin https://github.com/DenzObigs/Nexus.git

echo.
echo Pushing to GitHub...
echo You will be prompted for your GitHub credentials.
%GIT_EXE% push -u origin master

echo.
echo Process completed! Check your GitHub repository.
echo GitHub repository: https://github.com/DenzObigs/Nexus
echo Next step: Set up your Vercel deployment.
echo.

pause 