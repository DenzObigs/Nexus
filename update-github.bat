@echo off
echo Updating your GitHub repository...

:: Try to find Git in common installation paths
set GIT_FOUND=0
set GIT_PATH=

:: Check Program Files
if exist "C:\Program Files\Git\cmd\git.exe" (
    set GIT_PATH="C:\Program Files\Git\cmd\git.exe"
    set GIT_FOUND=1
    goto :GIT_LOCATED
)

:: Check Program Files (x86)
if exist "C:\Program Files (x86)\Git\cmd\git.exe" (
    set GIT_PATH="C:\Program Files (x86)\Git\cmd\git.exe"
    set GIT_FOUND=1
    goto :GIT_LOCATED
)

:: Check Local App Data
if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" (
    set GIT_PATH="%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
    set GIT_FOUND=1
    goto :GIT_LOCATED
)

:: Check if git is in PATH
where git >nul 2>nul
if %ERRORLEVEL% equ 0 (
    set GIT_PATH=git
    set GIT_FOUND=1
    goto :GIT_LOCATED
)

:GIT_NOT_FOUND
echo Git was not found on your system.
echo Please install Git from https://git-scm.com/download/win
exit /b 1

:GIT_LOCATED
echo Git found at: %GIT_PATH%

:: Configure git if needed (safe to run even if already configured)
%GIT_PATH% config --global user.email "your-email@example.com" 2>nul
%GIT_PATH% config --global user.name "Your Name" 2>nul

:: Check if .git directory exists
if not exist ".git" (
    echo Initializing new Git repository...
    %GIT_PATH% init
    echo Repository initialized.
)

:: Check if we have a remote origin
%GIT_PATH% remote -v | findstr origin >nul
if %ERRORLEVEL% neq 0 (
    echo Setting up remote origin...
    set /p REPO_URL="Enter your GitHub repository URL (e.g., https://github.com/DenzObigs/Nexus.git): "
    %GIT_PATH% remote add origin %REPO_URL%
) else (
    echo Remote origin already configured.
)

:: Add all files
echo Adding files to the repository...
%GIT_PATH% add .

:: Commit changes
echo Committing changes...
%GIT_PATH% commit -m "Update Nexus FinTech website with Nillion-inspired design"

:: Push to GitHub
echo Pushing to GitHub...
%GIT_PATH% push -u origin master

if %ERRORLEVEL% equ 0 (
    echo ========================================
    echo Success! Your changes have been pushed to GitHub.
    echo Vercel should automatically deploy your changes.
    echo Visit your Vercel dashboard to check deployment status:
    echo https://vercel.com/denzobigs-projects/nexus-txbr
    echo ========================================
) else (
    echo.
    echo Push failed. You may need to:
    echo 1. Use a Personal Access Token (PAT) for authentication
    echo 2. Visit https://github.com/settings/tokens to create a PAT
    echo 3. When prompted for password, use your PAT instead
)

pause 