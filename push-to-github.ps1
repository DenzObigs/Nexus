# Script to push Nexus FinTech website to GitHub
# This script will initialize a Git repository and push to GitHub

Write-Host "Starting GitHub push process..." -ForegroundColor Green

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "Git is not installed or not in PATH. Please install Git first." -ForegroundColor Red
    Write-Host "Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Configure Git (if not already configured)
$userName = "DenzObigs"
$userEmail = "your-email@example.com" # Replace with your actual email

git config --global user.name $userName
git config --global user.email $userEmail

Write-Host "Git configured with user: $userName" -ForegroundColor Green

# Initialize Git repository (if not already initialized)
if (-not (Test-Path -Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "Git repository already initialized" -ForegroundColor Yellow
}

# Add all files to staging
Write-Host "Adding files to staging..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Initial commit of Nexus FinTech website"

# Add remote repository if not already added
$remoteExists = git remote -v | Select-String -Pattern "origin"
if (-not $remoteExists) {
    Write-Host "Adding remote repository..." -ForegroundColor Yellow
    git remote add origin https://github.com/DenzObigs/Nexus.git
} else {
    Write-Host "Remote repository already exists" -ForegroundColor Yellow
}

# Push to GitHub
Write-Host "Pushing to GitHub... (you may be prompted for credentials)" -ForegroundColor Green
git push -u origin master

Write-Host "Process completed! Check your GitHub repository." -ForegroundColor Green
Write-Host "GitHub repository: https://github.com/DenzObigs/Nexus" -ForegroundColor Cyan
Write-Host "Next step: Set up your Vercel deployment." -ForegroundColor Cyan

# Keep the window open
Write-Host "Press any key to continue..."
$null = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 