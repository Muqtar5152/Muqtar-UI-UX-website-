@echo off
echo Setting up GitHub Pages deployment...

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed. Please install Git from https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Initialize Git repository if not already done
if not exist .git (
    echo Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit - Portfolio website"
) else (
    echo Git repository already exists
)

REM Ask for GitHub repository URL
echo.
echo Please provide your GitHub repository URL:
echo Example: https://github.com/YOUR_USERNAME/portfolio-website.git
set /p repo_url="Repository URL: "

if "%repo_url%"=="" (
    echo ERROR: Repository URL is required
    pause
    exit /b 1
)

REM Add remote and push
echo Setting up remote repository...
git remote add origin "%repo_url%" 2>nul || git remote set-url origin "%repo_url%"
git branch -M main
git push -u origin main

echo.
echo SUCCESS: Code pushed to GitHub!
echo.
echo Next steps:
echo 1. Go to your GitHub repository
echo 2. Go to Settings ^> Pages
echo 3. Under "Source", select "GitHub Actions"
echo 4. Your site will be deployed automatically at: https://YOUR_USERNAME.github.io/portfolio-website/
echo.
pause