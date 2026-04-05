param(
    [Parameter(Mandatory=$true)]
    [string]$RepositoryUrl
)

Write-Host "Setting up GitHub Pages deployment..." -ForegroundColor Green

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed. Please install Git from https://git-scm.com/download/win" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Initialize Git repository if not already done
if (!(Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit - Portfolio website"
} else {
    Write-Host "Git repository already exists" -ForegroundColor Green
}

# Add remote and push
Write-Host "Setting up remote repository..." -ForegroundColor Yellow
try {
    git remote add origin $RepositoryUrl 2>$null
} catch {
    git remote set-url origin $RepositoryUrl
}
git branch -M main
git push -u origin main

Write-Host "" -ForegroundColor Green
Write-Host "SUCCESS: Code pushed to GitHub!" -ForegroundColor Green
Write-Host "" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to your GitHub repository" -ForegroundColor White
Write-Host "2. Go to Settings > Pages" -ForegroundColor White
Write-Host "3. Under 'Source', select 'GitHub Actions'" -ForegroundColor White
Write-Host "4. Your site will be deployed automatically" -ForegroundColor White
Write-Host ""
$repoName = $RepositoryUrl -replace '.*github\.com/[^/]+/', '' -replace '\.git$', ''
Write-Host "Your site URL will be: https://YOUR_USERNAME.github.io$repoName/" -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to exit"