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
%GIT_EXE% remote -v | findstr "origin" >nul
if %ERRORLEVEL% neq 0 (
    %GIT_EXE% remote add origin https://github.com/DenzObigs/Nexus.git
) else (
    echo Remote repository already exists.
)

echo.
echo ======================================
echo IMPORTANT - GITHUB AUTHENTICATION
echo ======================================
echo GitHub no longer accepts passwords for authentication.
echo You need to use a Personal Access Token instead.
echo.
echo To create a Personal Access Token:
echo 1. Go to GitHub.com and sign in
echo 2. Click on your profile picture (top right) -^> Settings
echo 3. Scroll down to "Developer settings" (bottom left)
echo 4. Click "Personal access tokens" -^> "Tokens (classic)"
echo 5. Click "Generate new token" -^> "Generate new token (classic)"
echo 6. Give it a name like "Nexus Website"
echo 7. Select at least the "repo" scope
echo 8. Click "Generate token"
echo 9. COPY the token immediately! GitHub won't show it again.
echo.
echo When prompted for a password below, paste your token instead.
echo.
pause
echo.

echo Pushing to GitHub...
echo When prompted for your password, use your PERSONAL ACCESS TOKEN, not your GitHub password.
%GIT_EXE% push -u origin master

echo.
echo If the push was successful:
echo Your code is now on GitHub! Visit: https://github.com/DenzObigs/Nexus
echo.
echo If you got an authentication error:
echo Please try again and make sure to use your personal access token correctly.
echo.

pause 