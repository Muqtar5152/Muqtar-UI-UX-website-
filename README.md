# Portfolio Website

A modern portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Deployment

### Option 1: Automated Script (Recommended)

**For Windows Command Prompt:**
```cmd
deploy.bat
```

**For PowerShell:**
```powershell
.\deploy.ps1 -RepositoryUrl "https://github.com/YOUR_USERNAME/portfolio-website.git"
```

### Option 2: Manual Setup

1. **Create a GitHub Repository:**
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Name it `portfolio-website` (or your preferred name)
   - Make sure it's public (required for GitHub Pages)

2. **Push Your Code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The deployment workflow will run automatically

4. **Access Your Site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio-website/`
   - Deployment takes 2-3 minutes after each push to main branch

## Project Structure

```
src/
├── api/              # API client and services
├── components/       # React components
│   └── ui/          # Reusable UI components
├── hooks/           # React hooks
├── lib/             # Context, utilities, and config
├── pages/           # Page components
└── utils/           # Utility functions
```

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **React Router** - Routing
- **TanStack Query** - Data fetching
- **Tailwind CSS** - Styling
- **ESLint** - Code linting
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## License

MIT
