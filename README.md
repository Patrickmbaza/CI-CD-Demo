🚀 CI/CD Pipeline Demo with GitHub Actions & GitHub Pages

A comprehensive demonstration of Continuous Integration and Continuous Deployment (CI/CD) using GitHub Actions with automated deployment to GitHub Pages. This project showcases modern DevOps practices with a professional dark-themed deployment dashboard.
🌐 Live Demo

📋 Table of Contents

    ✨ Features

    🚀 Quick Start

    🏗️ Project Structure

    ⚙️ CI/CD Pipeline

    🧪 Testing Strategy

    🎨 UI Features

    🔧 Local Development

    📊 Pipeline Stages

    🤝 Contributing

    📄 License

✨ Features
🔄 Automated CI/CD Pipeline

    ✅ Continuous Integration: Automatic testing on every push/PR

    🚀 Continuous Deployment: Auto-deploy to GitHub Pages on main branch

    🧪 Quality Gates: Linting + Testing before deployment

    🔄 Rollback Ready: Concurrency control prevents deployment conflicts

🧪 Testing & Quality

    Unit Testing: 4 comprehensive math function tests

    Code Quality: ESLint integration for consistent code style

    Test Coverage: Detailed coverage reports with Jest

    Validation: Prevents deployment of broken code

🎨 Modern UI Dashboard

    🌓 Dark/Light Theme: Automatic theme switching

    📱 Fully Responsive: Mobile-first design

    🎯 Interactive Elements: Hover effects and animations

    📊 Pipeline Visualization: Real-time deployment status

    ⚡ Live Updates: Automatic timestamp updates

🔧 Developer Experience

    🐛 Built-in Debugging: File verification and structure checks

    📦 Artifact Management: Build once, deploy anywhere

    🔐 Security: Least-privilege permissions model

    📈 Monitoring: Detailed GitHub Actions logs

🚀 Quick Start
Prerequisites

    Node.js 18.x or higher

    npm 8.x or higher

    Git

Setup in 5 Minutes
bash

# 1. Clone the repository
git clone https://github.com/Patrickmbaza/CI-CD-Demo.git
cd CI-CD-Demo

# 2. Install dependencies
npm ci

# 3. Run tests
npm test

# 4. Build locally
npm run build

# 5. Open the built site
open dist/index.html  # Mac
# or
start dist/index.html  # Windows
# or
xdg-open dist/index.html  # Linux

🏗️ Project Structure
text

CI-CD-Demo/
├── .github/workflows/          # GitHub Actions pipelines
│   ├── pipeline.yml              # Main CI/CD workflow
│   
├── src/                        # Source code
│   ├── index.html             # Dark theme dashboard
│   ├── index.css              # Modern CSS with themes
│   ├── index.js               # Interactive JavaScript
│   ├── app.js                 # Core math functions
│   └── App.test.js            # Unit tests
├── dist/                       # Production build (auto-generated)
├── package.json               # Project configuration
├── .eslintrc.json             # Code quality rules
└── README.md                  # This file

⚙️ CI/CD Pipeline
Pipeline Visualization
text

┌─────────────────────────────────────────────────────┐
│                     Code Push                        │
│                 to `main` branch                     │
└───────────────┬─────────────────────────────────────┘
                ▼
┌─────────────────────────────────────────────────────┐
│              GitHub Actions Trigger                  │
│        (via .github/workflows/deploy.yml)           │
└───────────────┬─────────────────────────────────────┘
                ▼
        ┌─────────────────┐
        │   CI Stage      │
        ├─────────────────┤
        │ • Checkout Code │
        │ • Setup Node    │
        │ • Install Deps  │
        │ • Lint Code     │
        │ • Run Tests     │
        │ • Build App     │
        └─────────┬───────┘
                ▼
        ┌─────────────────┐
        │   CD Stage      │
        │  (if CI passes) │
        ├─────────────────┤
        │ • Download Build│
        │ • Setup Pages   │
        │ • Upload Artifact│
        │ • Deploy Live   │
        └─────────┬───────┘
                ▼
    ┌─────────────────────────┐
    │   Live Website!         │
    │  https://patrickmbaza   │
    │  .github.io/CI-CD-Demo/ │
    └─────────────────────────┘

Workflow Configuration
yaml

# Key pipeline features:
name: CI/CD Pipeline
on: [push, pull_request]        # Triggers on all changes
concurrency:                    # Prevents deployment conflicts
  group: "pages"
  cancel-in-progress: true
permissions:                    # Security: least privilege
  contents: read
  pages: write
  id-token: write
jobs:
  ci:                           # Continuous Integration
    runs-on: ubuntu-latest
    steps: [checkout, setup-node, test, build]
  deploy:                       # Continuous Deployment
    needs: ci                   # Depends on CI success
    if: github.ref == 'refs/heads/main'  # Only from main branch

🧪 Testing Strategy
Test Suite
javascript

// Example test from App.test.js
describe('Math Functions', () => {
    test('adds 2 + 3 to equal 5', () => {
        expect(add(2, 3)).toBe(5);
    });
    // ... 3 more comprehensive tests
});

Test Coverage

    100% Test Coverage on core functions

    4 Unit Tests covering:

        Basic arithmetic operations

        Error handling (division by zero)

        Function exports

    Coverage Reports generated automatically

Quality Gates

    ESLint Validation: Enforces code style

    Unit Tests Must Pass: All 4 tests required

    Build Must Succeed: Production-ready output

    Files Must Exist: Deployment artifact validation

🎨 UI Features
Dark Theme Dashboard

    Automatic Theme Detection: Uses system preferences

    Manual Toggle: Switch between dark/light modes

    Persistent Settings: Remembers user preference

    Smooth Transitions: CSS animations for theme switching

Interactive Elements

    Pipeline Visualization: Animated deployment stages

    Real-time Updates: Live timestamps and status

    Hover Effects: Interactive cards and buttons

    Responsive Grid: Adapts to all screen sizes

Deployment Information

    Live Status: Current deployment state

    Test Results: Visual test outcome display

    Tech Stack: Technology badges

    Timestamps: Last deployment time

🔧 Local Development
Available Scripts
bash

# Install dependencies (clean install)
npm ci

# Run linter
npm run lint

# Run tests with coverage
npm test

# Build for production
npm run build

# Preview built site
npm run preview

Development Workflow

    Make changes to files in src/ directory

    Run tests to ensure nothing breaks: npm test

    Check code quality: npm run lint

    Build locally: npm run build

    Preview: Open dist/index.html in browser

    Commit changes: Git commits trigger the pipeline

Debugging Tips
bash

# Debug file structure (like CI does)
npm run build
ls -la dist/

# Check test coverage details
open coverage/lcov-report/index.html

# Run tests with verbose output
npm test -- --verbose

📊 Pipeline Stages
Stage 1: Code Checkout & Setup
yaml

- name: Checkout code
  uses: actions/checkout@v4
- name: Setup Node.js
  uses: actions/setup-node@v4

Purpose: Creates clean environment with correct Node.js version
Stage 2: Dependency Installation
yaml

- name: Install dependencies
  run: npm ci

Why npm ci?: Clean, reproducible install using package-lock.json
Stage 3: Quality Assurance
yaml

- name: Lint JavaScript code
  run: npm run lint
- name: Run unit tests
  run: npm test -- --verbose

Quality Gates: Code must pass linting AND all tests
Stage 4: Build Process
yaml

- name: Build application
  run: npm run build
- name: Verify build output
  run: ls -la dist/

Output: Production-ready files in dist/ directory
Stage 5: Artifact Management
yaml

- name: Upload build artifacts
  uses: actions/upload-artifact@v4

Purpose: Shares build output between CI and CD jobs
Stage 6: Deployment (Main Branch Only)
yaml

- name: Deploy to GitHub Pages
  uses: actions/deploy-pages@v4

Conditions: Only runs on main branch after CI passes
🤝 Contributing

Contributions are welcome! Here's how to contribute:

    Fork the repository

    Create a feature branch: git checkout -b feature/amazing-feature

    Make your changes

    Run tests: npm test

    Ensure linting passes: npm run lint

    Commit changes: git commit -m 'Add amazing feature'

    Push to branch: git push origin feature/amazing-feature

    Open a Pull Request

Pull Request Requirements

    ✅ All tests must pass

    ✅ Code must pass ESLint

    ✅ Update documentation if needed

    ✅ Add tests for new features