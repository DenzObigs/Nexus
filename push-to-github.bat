@echo off
echo ======================================
echo Nexus FinTech - GitHub Upload Script
echo ======================================
echo.

echo Checking for Git installation...
where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Git is not installed or not in PATH. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo Git is installed!
echo.

echo Configuring Git...
git config --global user.name "DenzObigs"
git config --global user.email "your-email@example.com"

echo.
echo Initializing Git repository...
if not exist .git (
    git init
) else (
    echo Git repository already initialized.
)

echo.
echo Adding files to Git...
git add .

echo.
echo Committing files...
git commit -m "Initial commit of Nexus FinTech website"

echo.
echo Adding remote repository...
git remote -v | findstr "origin" >nul
if %ERRORLEVEL% neq 0 (
    git remote add origin https://github.com/DenzObigs/Nexus.git
) else (
    echo Remote repository already exists.
)

echo.
echo Pushing to GitHub...
echo You may be prompted for your GitHub credentials.
git push -u origin master

echo.
echo Process completed! Check your GitHub repository.
echo GitHub repository: https://github.com/DenzObigs/Nexus
echo Next step: Set up your Vercel deployment.
echo.

pause 