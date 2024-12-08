# 🚀 Checklist for the Express Project Initial Setup

- [ ] Git setup
- [ ] Node version manager setup
- [ ] Node.js project setup
- [ ] TypeScript setup
- [ ] Prettier setup
- [ ] ESLint setup
- [ ] Git hooks setup
- [ ] Logger setup
- [ ] Tests setup

---

# Project Setup Guide - Table of Contents

## Version Control and Git

- [Git and Version Control Guide](#git-and-version-control-guide)
  - [Advantages of Git](#advantages-of-git)
  - [Branch Naming Conventions](#branch-naming-conventions)
  - [.gitignore File](#the-gitignore-file)
  - [Basic Git Commands](#basic-git-commands)

## Node Version Management

- [NVM (Node Version Manager) Guide](#nvm-node-version-manager-guide)
  - [What is NVM?](#what-is-nvm)
  - [Installation](#installation)
  - [Post-Installation Setup](#post-installation-setup)
  - [Basic NVM Commands](#basic-nvm-commands)

## TypeScript Setup

- [TypeScript Setup Guide for Node.js Projects](#typescript-setup-guide-for-nodejs-projects)
  - [Prerequisites](#prerequisites)
  - [Step-by-Step TypeScript Project Setup](#step-by-step-typescript-project-setup)
  - [Common Dependencies](#common-dependencies)
  - [Best Practices](#best-practices)

## Code Formatting

- [Prettier: Code Formatting Simplified](#prettier-code-formatting-simplified)
  - [What is Prettier?](#what-is-prettier)
  - [Installation](#package-managers-installation)
  - [Configuration Files](#configuration-files)
  - [Running Prettier](#running-prettier)

## Linting

- [TypeScript ESLint: Comprehensive Guide](#typescript-eslint-comprehensive-guide)
  - [Introduction to TypeScript ESLint](#introduction-to-typescript-eslint)
  - [Installation and Setup](#installation-and-setup)
  - [ESLint Commands](#eslint-commands)
  - [Best Practices and Recommended Rules](#best-practices-and-recommended-rules)

## Git Hooks and Code Quality

- [Husky and Lint-Staged: Code Quality Automation](#husky-and-lint-staged-code-quality-automation)
  - [What are Husky and Lint-Staged?](#what-are-husky-and-lint-staged)
  - [How Husky and Lint-Staged Work Together](#how-husky-and-lint-staged-work-together)
  - [Installation](#installation-1)
  - [Basic Configuration](#basic-configuration)

## Logging

- [Logger Configuration](#logger-configuration)
  - [Logger Setup](#logger-setup)
  - [Example Usage](#example-usage)
  - [Detailed Configuration](#config)

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [NVM GitHub Repository](https://github.com/nvm-sh/nvm)
- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [ESLint Rules Reference](https://eslint.org/docs/rules/)

# Git and Version Control Guide

## Advantages of Git

Git is a powerful version control system that offers numerous benefits for
software development:

### Version Control

Git allows developers to track and manage changes in their codebase over time.
You can:

- Revert to previous versions of your code
- Understand how and when specific changes were made
- Maintain a complete history of your project's evolution

### Safety and Experimentation

One of Git's most powerful features is the ability to create branches:

- Developers can create separate branches for new features or experiments
- Test and develop without risking the stability of the main codebase
- Safely explore new ideas without fear of breaking existing code

### Code Documentation

Commit messages serve as a critical documentation tool:

- Provide clear, descriptive explanations of code changes
- Create a narrative of the project's development
- Help team members understand the context and reasoning behind modifications

### Collaboration

Git enables seamless collaborative development:

- Multiple developers can work on different branches simultaneously
- Merge changes from various contributors into the main branch
- Support parallel development and distributed work environments

### Conflict Resolution

Git provides robust mechanisms for handling conflicts:

- Identifies and highlights code conflicts during merges
- Allows developers to manually resolve differences
- Provides tools to compare and integrate divergent code changes

### Code Review

Git facilitates thorough code review processes:

- Enable pull requests for detailed code examination
- Allow team members to provide feedback on proposed changes
- Maintain code quality through collaborative review

### Accountability

Version control ensures transparency and accountability:

- Track who made specific changes
- Understand when and why modifications were implemented
- Maintain a clear audit trail of project development

### Backup and Redundancy

Git serves as a comprehensive backup solution:

- Distributed version control means multiple copies of the project exist
- Each clone contains the complete project history
- Provides protection against data loss

## Branch Naming Conventions

### Best Practices for Branch Names

Consistent branch naming helps improve project organization and collaboration:

#### Types of Branches

1. **Feature Branches**

   - Prefix: `feature/`
   - Example: `feature/user-authentication`
   - Used for developing new features

2. **Bugfix Branches**

   - Prefix: `bugfix/` or `fix/`
   - Example: `bugfix/login-page-error`
   - For fixing specific bugs or issues

3. **Hotfix Branches**

   - Prefix: `hotfix/`
   - Example: `hotfix/security-vulnerability`
   - For critical fixes that need immediate attention

4. **Release Branches**

   - Prefix: `release/`
   - Example: `release/v1.2.0`
   - Preparing for a new production release

5. **Refactor Branches**
   - Prefix: `refactor/`
   - Example: `refactor/database-connection`
   - For code improvements without changing functionality

### Branch Naming Guidelines

- Use lowercase letters
- Replace spaces with hyphens
- Be descriptive but concise
- Include relevant issue or ticket numbers if applicable
- Avoid generic names like "patch" or "update"

#### Example Workflow

```bash
# Creating a new feature branch
git checkout -b feature/user-registration

# Creating a bugfix branch
git checkout -b bugfix/email-validation

# Switching between branches
git checkout main
git checkout feature/user-registration
```

## The `.gitignore` File

### Purpose

A `.gitignore` file is crucial for managing which files Git tracks:

- Excludes unnecessary files from version control
- Prevents cluttering the repository with temporary or system-specific files
- Protects sensitive information from being accidentally committed

### What to Exclude

Typical files to ignore include:

- Compiled binaries
- Temporary files
- IDE-specific configuration files
- Environment-specific settings
- Sensitive credentials

### Creating a `.gitignore` File

To generate a `.gitignore` file:

1. Open your code editor
2. Use the Command Palette:
   - macOS: `Shift + CMD + P`
   - Windows/Linux: `Shift + CTRL + P`
3. Select "Generate .gitignore File"
4. Choose the appropriate template for your project

## Basic Git Commands

### Git Command Cheat Sheet

#### 1. git add: Stages Changes to be Committed

| Command          | Example              | Description                                  |
| ---------------- | -------------------- | -------------------------------------------- |
| `git add <file>` | `git add index.html` | Stages the file `index.html`.                |
| `git add .`      | `git add .`          | Stages all changes in the current directory. |
| `git add -p`     | `git add -p`         | Interactively stage parts of a file.         |

#### 2. git commit: Saves Staged Changes to the Repository

| Command                   | Example                                              | Description                                                |
| ------------------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| `git commit -m "message"` | `git commit -m "Add login feature"`                  | Saves staged changes with the message "Add login feature". |
| `git commit --amend`      | `git commit --amend -m "Fix typo in commit message"` | Edits the last commit, including its message.              |

#### 3. git diff: Displays Changes Between Various Git States

| Command                | Example                | Description                                                         |
| ---------------------- | ---------------------- | ------------------------------------------------------------------- |
| `git diff`             | `git diff`             | Shows unstaged changes in the working directory.                    |
| `git diff --staged`    | `git diff --staged`    | Shows staged changes compared to the last commit.                   |
| `git diff HEAD~1 HEAD` | `git diff HEAD~1 HEAD` | Compares changes between the previous commit and the latest commit. |

#### 4. git stash: Temporarily Saves Changes in the Working Directory

| Command                    | Example                          | Description                                        |
| -------------------------- | -------------------------------- | -------------------------------------------------- |
| `git stash`                | `git stash`                      | Stashes all unstaged and staged changes.           |
| `git stash save "message"` | `git stash save "WIP on navbar"` | Saves changes with the message "WIP on navbar".    |
| `git stash list`           | `git stash list`                 | Lists all saved stashes.                           |
| `git stash apply`          | `git stash apply`                | Applies the most recent stash without removing it. |
| `git stash pop`            | `git stash pop`                  | Applies and removes the most recent stash.         |
| `git stash drop`           | `git stash drop stash@{0}`       | Deletes a specific stash.                          |

#### 5. git restore: Manages Changes in the Working Directory or Staging Area

| Command                                | Example                                  | Description                                            |
| -------------------------------------- | ---------------------------------------- | ------------------------------------------------------ |
| `git restore <file>`                   | `git restore index.html`                 | Discards unstaged changes in `index.html`.             |
| `git restore --staged <file>`          | `git restore --staged index.html`        | Unstages `index.html` but keeps changes.               |
| `git restore --source=<commit> <file>` | `git restore --source=abc123 index.html` | Restores `index.html` to its state in commit `abc123`. |
| `git restore .`                        | `git restore .`                          | Discards all unstaged changes.                         |

#### 6. git reset: Moves Commits, Unstages Files, or Discards Changes

| Command                    | Example                    | Description                                                                           |
| -------------------------- | -------------------------- | ------------------------------------------------------------------------------------- |
| `git reset --soft HEAD~1`  | `git reset --soft HEAD~1`  | Removes the last commit but keeps changes staged.                                     |
| `git reset --mixed HEAD~1` | `git reset --mixed HEAD~1` | Removes the last commit and unstages changes.                                         |
| `git reset --hard HEAD~1`  | `git reset --hard HEAD~1`  | Removes the last commit and discards changes.                                         |
| `git reset <file>`         | `git reset index.html`     | Unstages `index.html` but keeps changes.                                              |
| `git reset --hard`         | `git reset --hard`         | Resets the working directory and staging area to the last commit, discarding changes. |

#### 7. git merge and git merge --abort: Combines Branches and Manages Merge Conflicts

| Command              | Example                             | Description                                                   |
| -------------------- | ----------------------------------- | ------------------------------------------------------------- |
| `git merge <branch>` | `git merge feature-branch`          | Merges `feature-branch` into the current branch.              |
| `git merge --abort`  | `git merge --abort`                 | Cancels a merge and restores the pre-merge state.             |
| `git merge --squash` | `git merge --squash feature-branch` | Prepares a merge as a single commit (manual commit required). |

### Initializing a Repository

```bash
# Start tracking changes in a project
git init
```

### Staging Changes

```bash
# Stage all changes in the current directory
git add .
```

### Committing Changes

```bash
# Save current project state with a descriptive message
git commit -m "Your descriptive message here"
```

### Branch Management

```bash
# Create and switch to a new branch
git checkout -b feature/new-feature

# List all branches
git branch -a

# Rename default branch to 'main'
git branch -M main
```

### Remote Repository Connection

```bash
# Connect local project to remote repository
git remote add origin [repository-url]

# Upload changes to remote repository
git push -u origin feature/new-feature
```

## Additional Notes

### Hidden Files and Folders

- Files and folders starting with a dot (.) are hidden by default
- Use `ls -a` to list all files, including hidden ones

## Best Practices

- Write clear, concise commit messages
- Commit frequently
- Use descriptive branch names
- Create separate branches for different types of work
- Review code before merging
- Keep branches short-lived
- Regularly pull changes from the main branch
- Clean up merged and obsolete branches

## Recommended Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Learning Resources](https://docs.github.com/en/get-started/learning-about-git)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

# NVM (Node Version Manager) Guide

## What is NVM?

NVM (Node Version Manager) is a powerful tool that allows developers to:

- Install multiple versions of Node.js
- Switch between Node.js versions seamlessly
- Manage different Node.js environments for various projects
- Avoid system-wide Node.js installation conflicts

## Installation

### macOS/Linux Installation

```bash
# Install using curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install using wget
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Windows Installation

1. Use NVM for Windows from GitHub
2. Download installer from official repository
3. Follow installation instructions

## Post-Installation Setup

### Verify Installation

```bash
# Check NVM version
nvm --version

# Verify installation
command -v nvm
```

### Shell Configuration

- For bash: Edit `~/.bashrc` or `~/.bash_profile`
- For zsh: Edit `~/.zshrc`
- Restart terminal or run `source ~/.bashrc`

## Basic NVM Commands

### Version Management

```bash
# List installed Node.js versions
nvm list
nvm ls

# List remote Node.js versions
nvm ls-remote

# Install specific Node.js version
nvm install 18.16.0

# Install latest LTS version
nvm install --lts

# Use a specific version
nvm use 18.16.0

# Set default Node.js version
nvm alias default 18.16.0
```

### Advanced Version Management

```bash
# Install and use specific version
nvm install 20.0.0 --default

# Uninstall a Node.js version
nvm uninstall 16.14.0

# Run specific version without changing default
nvm run 18.16.0 --version
```

## `.nvmrc` File

### Purpose

- Specify project-specific Node.js version
- Ensure consistent environments across development teams

### Creating `.nvmrc`

```bash
# Create .nvmrc in project root
echo "18.16.0" > .nvmrc

# Automatically use version in .nvmrc
nvm use
```

### Example `.nvmrc` Workflow

```bash
# Project setup
git clone project-repo
cd project-directory

# Automatically use correct Node.js version
nvm use
npm install
```

## Performance and Troubleshooting

### Performance Tips

- Use LTS (Long Term Support) versions
- Regularly update NVM
- Clear npm cache periodically

### Common Troubleshooting

```bash
# Verify NVM installation
nvm diagnostics

# Reinstall NVM if issues persist
# (Follow initial installation steps)

# Check shell configuration
echo $NVM_DIR
```

## Best Practices

### Version Management

- Use LTS versions for production
- Test with multiple Node.js versions
- Update dependencies regularly
- Use `.nvmrc` for project consistency

### Security

```bash
# Check npm package vulnerabilities
npm audit

# Update npm
npm install -g npm@latest
```

## Integration with Development Workflow

### Continuous Integration

- Include `.nvmrc` in repository
- Configure CI to use specified Node.js version
- Use `nvm install` in CI scripts

### Project-Specific Configurations

```json
{
  "engines": {
    "node": ">=18.16.0"
  },
  "scripts": {
    "preinstall": "node --version"
  }
}
```

## Advanced NVM Features

### Persistent Aliases

```bash
# Create persistent version alias
nvm alias awesome-project 18.16.0

# Use aliased version
nvm use awesome-project
```

### Automatic Version Switching

- Use `avn` (Automatic Version Switching) for seamless transitions
- Install via `npm install -g avn avn-nvm`

## Recommended Resources

- [NVM GitHub Repository](https://github.com/nvm-sh/nvm)
- [Node.js Official Website](https://nodejs.org/)
- [npm Documentation](https://docs.npmjs.com/)

## Limitations and Considerations

- Not recommended for production deployments
- Slight performance overhead
- Requires additional shell configuration
- Windows support is community-maintained

## Contribution and Support

- Report issues on GitHub
- Contribute to open-source development
- Join community discussions

# TypeScript Setup Guide for Node.js Projects

## Prerequisites

- Node.js installed
- NVM (recommended for version management)

## Step-by-Step TypeScript Project Setup

### 1. Initialize Project

```bash
# Create project directory
mkdir my-typescript-project
cd my-typescript-project

# Initialize npm project
npm init -y
```

### 2. Install TypeScript and Related Packages

```bash
# Install TypeScript as a dev dependency
npm install -D typescript

# Install Node.js type definitions
npm install -D @types/node

# Install ts-node for direct TypeScript execution
npm install -D ts-node

# Install TypeScript-specific execution runtime
npm install -D tsx
```

### 3. Create TypeScript Configuration

```bash
# Generate tsconfig.json
npx tsc --init
```

### 4. Recommended `tsconfig.json` Configuration

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### 5. Project Structure

```
my-typescript-project/
│
├── src/
│   └── index.ts
├── dist/
├── package.json
└── tsconfig.json
```

### 6. Update `package.json` Scripts

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "tsx watch src/index.ts",
    "lint": "eslint . --ext .ts"
  }
}
```

### 7. Optional: ESLint for TypeScript

```bash
# Install ESLint and TypeScript plugins
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 8. Create ESLint Configuration

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"]
}
```

### 9. Sample TypeScript Code

```typescript
// src/index.ts
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet('TypeScript Developer');
```

### 10. Development Workflow

```bash
# Development with hot reloading
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

## Common Dependencies

```bash
# Additional useful packages
npm install dotenv
npm install -D @types/dotenv
```

## Debugging

- Use `tsx` for development debugging
- Configure VS Code for TypeScript debugging

## Best Practices

- Use strict type checking
- Leverage TypeScript's type system
- Keep dependencies updated
- Use environment-specific configurations

## Recommended Tools

- Visual Studio Code
- Prettier for code formatting
- ESLint for linting

## Troubleshooting

- Ensure Node.js and npm are up-to-date
- Check TypeScript and type definition versions
- Verify `tsconfig.json` settings

## Resources

- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [Node.js TypeScript Guide](https://nodejs.org/api/esm.html#typescript)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

````

## Advanced Configuration

### Babel Integration
```bash
# Optional: Babel for advanced transpilation
npm install -D @babel/core @babel/preset-env @babel/preset-typescript
````

### Docker Support

```dockerfile
# Sample Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

I've created a comprehensive README that covers:

1. Complete TypeScript project setup
2. Step-by-step configuration
3. Recommended project structure
4. Development and production scripts
5. Best practices
6. Troubleshooting tips

# Prettier: Code Formatting Simplified

## What is Prettier?

Prettier is an opinionated code formatter designed to provide a consistent code
style across your entire project. It supports multiple programming languages and
integrates seamlessly with most code editors and development workflows.

### Key Features

- Supports multiple languages (JavaScript, TypeScript, CSS, HTML, JSON,
  Markdown, etc.)
- Minimal configuration required
- Automatic code formatting
- Consistent code style across team projects
- Reduces code review comments about formatting
- Works with most popular code editors

### Why Use Prettier?

- Eliminates debates about code formatting
- Saves time by automatically formatting code
- Improves code readability
- Reduces cognitive load during development
- Ensures consistent code style across projects and teams

## Package Managers Installation

### npm

```bash
# Install Prettier as a dev dependency
npm install --save-dev --save-exact prettier
```

### yarn

```bash
# Install Prettier as a dev dependency
yarn add --dev --exact prettier
```

### pnpm

```bash
# Install Prettier as a dev dependency
pnpm add -D --save-exact prettier
```

### bun

```bash
# Install Prettier as a dev dependency
bun add -d --exact prettier
```

## Configuration Files

### `.prettierrc` Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "auto",
  "overrides": [
    {
      "files": ["*.json", "*.jsonc"],
      "options": {
        "singleQuote": false
      }
    },
    {
      "files": ["*.md", "*.markdown"],
      "options": {
        "printWidth": 80,
        "proseWrap": "always"
      }
    }
  ]
}
```

### Configuration Options Explained

- `semi`: Add semicolons at the end of statements
- `trailingComma`: Add trailing commas where valid
- `singleQuote`: Use single quotes instead of double quotes
- `printWidth`: Maximum line length
- `tabWidth`: Number of spaces per indentation level
- `useTabs`: Use spaces for indentation
- `bracketSpacing`: Add spacing in object literals
- `arrowParens`: Always include parens in arrow function
- `endOfLine`: Consistent line endings across different operating systems

### `.prettierignore` File

```gitignore
# Dependency directories
node_modules/

# Build output directories
dist/
build/
out/

# Coverage reports
coverage/

# Environment files
.env
.env.local
.env.development
.env.production

# Backup and temporary files
*.bak
*.tmp
*.swp

# Specific file types to ignore
*.min.js
*.min.css

# Specific files or directories
package-lock.json
yarn.lock
pnpm-lock.yaml

# Framework and platform specific
.next/
.nuxt/
.svelte-kit/
.vercel/
.netlify/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# IDE and editor directories
.idea/
.vscode/
*.sublime-project
*.sublime-workspace
```

## Running Prettier

### Format All Files

```bash
# Use npx to run Prettier
npx prettier . --write
```

### Format Specific Directories

```bash
# Format specific directory
npx prettier app/ --write

# Format specific file
npx prettier app/components/Button.js --write

# Format using glob pattern
npx prettier "app/**/*.test.js" --write
```

### Check Formatting (CI/CD)

```bash
# Check formatting without modifying files
npx prettier . --check
```

## Best Practices

- Commit configuration files to version control
- Run Prettier before committing code
- Use consistent Prettier version across team
- Integrate with pre-commit hooks
- Configure your code editor to format on save

## Recommended Resources

- [Prettier Official Documentation](https://prettier.io/docs/en/)
- [Prettier Playground](https://prettier.io/playground/)
- [Configuration Options](https://prettier.io/docs/en/configuration.html)

```

I've updated the README to include:
1. A comprehensive introduction to Prettier
2. Detailed `.prettierrc` configuration with explanations
3. Extensive `.prettierignore` file with common exclusions
4. Existing installation and usage instructions

The guide now provides a more holistic view of Prettier, its benefits, and how to configure it effectively.

Would you like me to elaborate on any specific section or provide more details?


```

# TypeScript ESLint: Comprehensive Guide

## 📘 Introduction to TypeScript ESLint

### What is TypeScript ESLint?

TypeScript ESLint is a powerful linting tool that provides static code analysis
for TypeScript projects. It helps developers:

- Identify potential errors and code quality issues
- Enforce consistent coding styles
- Catch common programming mistakes
- Improve overall code maintainability

### Why Use ESLint with TypeScript?

- **Error Prevention**: Catch potential bugs before runtime
- **Code Consistency**: Maintain uniform code standards across team projects
- **Best Practices**: Enforce industry-standard coding guidelines
- **Improved Readability**: Ensure clean, predictable code structure

## 🛠 Installation and Setup

### Basic Installation

```bash
npm install --save-dev eslint @eslint/js typescript typescript-eslint
```

### Configuration File (`eslint.config.mjs`)

```javascript
// @ts-check
// @ts-check
// @ts-check
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'no-console': 'warn',
    },
    ignores: ['node_modules', 'dist'],
  },
];
```

## 🖥️ ESLint Commands

### Basic Linting Commands

```bash
# Check files for linting errors
npx eslint .

# Check specific files or directories
npx eslint src/ tests/

# Check specific file types
npx eslint "**/*.{ts,tsx}"
```

### Fixing Linting Issues

```bash
# Automatically fix simple issues
npx eslint . --fix

# Fix specific files
npx eslint src/ --fix

# Dry run (shows what would be fixed)
npx eslint . --fix-dry-run

# Detailed output during fixing
npx eslint . --fix --debug
```

### Advanced Linting Options

```bash
# Format output as a specific type
npx eslint . --format json
npx eslint . --format stylish

# Ignore specific files
npx eslint . --ignore-path .gitignore

# Output warnings along with errors
npx eslint . --max-warnings 10
```

### Integration with Package Scripts

```json
{
  "scripts": {
    "lint:check": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## 🏆 Best Practices and Recommended Rules

### Type Safety Rules

```javascript
{
  rules: {
    '@typescript-eslint/no-explicit-any': 'error', // Avoid 'any' type
    '@typescript-eslint/strict-boolean-expressions': 'error', // Strict boolean checks
    '@typescript-eslint/no-unnecessary-type-assertion': 'error'
  }
}
```

### Code Quality Rules

```javascript
{
  rules: {
    'complexity': ['warn', 10], // Limit cyclomatic complexity
    'max-lines-per-function': ['warn', 50], // Function length limit
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error'
  }
}
```

## 🚀 Advanced Configuration

### Integrating with Different Environments

```javascript
// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: ['node_modules', 'dist'],
    rules: {
      'no-console': 'error',
    },
  }
);
```

## 💡 Common Pitfalls to Avoid

1. Don't use `any` type unnecessarily
2. Avoid over-complicated type definitions
3. Be consistent with error handling
4. Limit function complexity
5. Use strict null checks

## 🛡️ Error Handling and Logging

```javascript
{
  rules: {
    '@typescript-eslint/no-throw-literal': 'error', // Ensure proper error throwing
    '@typescript-eslint/no-unnecessary-condition': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
}
```

## 📦 Recommended Plugins

- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-import`
- `eslint-plugin-unused-imports`

## 🤝 Team Collaboration

- Commit ESLint configuration to version control
- Use pre-commit hooks for automatic linting
- Regularly update ESLint and TypeScript dependencies

## 🔧 Troubleshooting

- Ensure consistent TypeScript version
- Check for conflicting ESLint configurations
- Validate `tsconfig.json` settings
- Use `--debug` flag for detailed error information

## 📚 Resources

- [Official TypeScript ESLint Documentation](https://typescript-eslint.io/)
- [ESLint Rules Reference](https://eslint.org/docs/rules/)

# Husky and Lint-Staged: Code Quality Automation

## 🔍 What are Husky and Lint-Staged?

### Husky: Git Hooks Made Easy

**Husky** is a powerful tool that simplifies the creation and management of Git
hooks. Git hooks are scripts that run automatically at specific points in the
Git workflow, such as before committing, pushing, or merging code.

#### Key Features of Husky:

- Easily configure Git hooks without manual script creation
- Automate code quality checks
- Enforce team coding standards
- Prevent low-quality code from being committed

### Lint-Staged: Targeted Linting for Staged Files

**Lint-Staged** is a tool that runs linters and formatters on files that are
staged in Git. Instead of checking entire project files, it focuses only on the
files that have been modified and staged for commit.

#### Key Features of Lint-Staged:

- Run linters only on changed (staged) files
- Improve performance by checking only modified code
- Automatically fix formatting and style issues
- Integrate seamlessly with various linters (ESLint, Prettier, etc.)

## 🤝 How Husky and Lint-Staged Work Together

When combined, Husky and lint-staged create a powerful workflow:

1. A developer stages files for commit
2. Husky triggers the pre-commit hook
3. Lint-staged runs specified linters and formatters on staged files
4. If any issues are found, the commit is prevented
5. Developers must fix issues before successfully committing

## 📌 Practical Example

```bash
# Typical workflow
git add .             # Stage changes
git commit -m "Update" # Triggers Husky and lint-staged
```

## 🛠 Why Use Husky and Lint-Staged?

### Benefits

- **Consistent Code Quality**: Enforce coding standards automatically
- **Early Error Detection**: Catch issues before code is committed
- **Time-Saving**: Automatic formatting and linting
- **Team Collaboration**: Ensure uniform code style across the team

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Git

## 📦 Installation

```bash
# Install Husky and lint-staged
npm install --save-dev husky lint-staged

# Initialize Husky
npx husky init
```

## 🔧 Basic Configuration

### Package.json Setup

```json
{
  "scripts": {
    "prepare": "husky",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["npm run format:fix", "npm run lint:fix"]
  }
}
```

### Husky Pre-Commit Hook

Create `.husky/pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

## 🚀 Detailed Usage Guide (Continues in previous README content...)

```

Would you like me to continue with the rest of the content from the previous README, or would you prefer a more focused introduction?

The updated version now provides a clear, comprehensive explanation of what Husky and lint-staged are, how they work, and why they're valuable for developers and teams. I've added context about their purpose, benefits, and a practical example of their workflow.
```

# Logger Configuration

This project uses [Winston](https://github.com/winstonjs/winston) for logging.
Winston is a versatile and powerful library for handling logging in Node.js
applications.

## Logger Setup

The logger is configured in `logger.ts` with the following features:

### Levels

- Logging levels prioritize messages in the following order: `error` > `warn` >
  `info` > `http` > `verbose` > `debug` > `silly`.
- The default level is set to `info`, which includes `info`, `warn`, and
  `error`.

### Default Metadata

- Each log entry includes metadata with the `serviceName: "auth-service"` to
  help identify the source service.

### Formats

- Logs include a timestamp (`winston.format.timestamp`) and are formatted in
  JSON (`winston.format.json`) for machine-readable output.

### Transports

1. **File-based Transports**:
   - `logs/combined.log`: Stores all logs with `info` level and above.
   - `logs/error.log`: Specifically stores error-level logs.
2. **Console Transport**:
   - Displays logs in the console during runtime.
3. **Silent Mode**:
   - Logging is disabled when `NODE_ENV` is set to `test`.

### Example Usage

```javascript
import logger from './logger';

logger.info('This is an informational message');
logger.error('This is an error message');
```

## Config

```javascript
import winston from 'winston';
import { Config } from '.';

// Create a Winston logger instance
const logger = winston.createLogger({
  // Set the default log level; logs at this level and above will be captured
  level: 'info',

  // Define default metadata to be included with all log entries
  defaultMeta: {
    serviceName: 'auth-service', // Identify the service generating the log
  },

  // Define the format of log entries
  format: winston.format.combine(
    winston.format.timestamp(), // Add a timestamp to each log
    winston.format.json() // Format logs as JSON for structured logging
  ),

  // Define the transports (destinations) for log entries
  transports: [
    // File transport for combined logs (info and above)
    new winston.transports.File({
      dirname: 'logs', // Directory for the log file
      filename: 'combined.log', // Name of the log file
      level: 'info', // Log entries with level "info" and above will be captured
      silent: Config.NODE_ENV === 'test', // Disable logging in test environment
    }),

    // File transport specifically for error logs
    new winston.transports.File({
      dirname: 'logs', // Directory for the log file
      filename: 'error.log', // Name of the error log file
      level: 'error', // Only log entries with "error" level will be captured
      silent: Config.NODE_ENV === 'test', // Disable logging in test environment
    }),

    // Console transport for displaying logs in the terminal
    new winston.transports.Console({
      level: 'info', // Log entries with level "info" and above will be displayed
      silent: Config.NODE_ENV === 'test', // Disable logging in test environment
    }),
  ],
});

// Export the logger instance for use throughout the application
export default logger;
```

# ts-jest: TypeScript Testing with Jest

## Introduction

ts-jest is a TypeScript preprocessor for Jest that allows you to use Jest to
test projects written in TypeScript. It provides full TypeScript support,
enabling seamless testing of TypeScript projects with minimal configuration.

## Installation

You can install ts-jest using your preferred package manager:

### npm

```bash
npm install --save-dev jest @types/jest ts-jest typescript
```

### Yarn

```bash
yarn add --dev jest @types/jest ts-jest typescript
```

### pnpm

```bash
pnpm install --save-dev jest @types/jest ts-jest typescript
```

## Project Initialization

### 1. Create a New Project

```bash
# Create project directory
mkdir my-typescript-project
cd my-typescript-project

# Initialize npm project
npm init -y
```

### 2. Install Dependencies

```bash
# Install TypeScript, Jest, and ts-jest
npm install --save-dev typescript jest ts-jest @types/jest @jest/globals

# Install TypeScript globally (optional)
npm install -g typescript
```

### 3. Initialize TypeScript Configuration

```bash
# Create tsconfig.json
npx tsc --init
```

### 4. Initialize Jest Configuration

```bash
# Generate Jest config
npx ts-jest config:init
```

## Configuration

Create a `jest.config.js` or `jest.config.ts` file in your project root:

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Additional configuration options
};

export default config;
```

## Configuring package.json

Add test scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Specific Test Files

```bash
npm test -- path/to/specific/test.ts
```

### Watch Mode (Rerun on Changes)

```bash
npm run test:watch
```

### Generate Coverage Report

```bash
npm run test:coverage
```

## Basic Example

### sum.ts

```typescript
export function sum(a: number, b: number): number {
  return a + b;
}
```

### sum.test.ts

```typescript
import { describe, expect, test } from '@jest/globals';
import { sum } from './sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

## Jest Matchers Reference

### Object Matchers

```typescript
test('object matching', () => {
  const user = {
    name: 'John',
    age: 30,
    address: { city: 'New York' },
  };

  // Check if object has specific property
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('address.city', 'New York');

  // Check nested property value
  expect(user).toHaveProperty(['address', 'city'], 'New York');
});
```

### Array Matchers

```typescript
test('array matchers', () => {
  const fruits = ['apple', 'banana', 'orange'];

  // Check array length
  expect(fruits).toHaveLength(3);

  // Array contains specific item
  expect(fruits).toContain('banana');

  // Array does not contain item
  expect(fruits).not.toContain('grape');
});
```

## Advanced Usage

### Data-Driven Testing

Use `describe.each` or `test.each` for parameterized tests:

```typescript
describe.each([
  [1, 2, 3],
  [4, 5, 9],
])('sum(%i, %i)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});
```

### Mock Functions

Jest provides powerful mocking capabilities for testing:

```typescript
const mockFn = jest.fn();
mockFn.mockReturnValue(42);
```

### Additional Matchers Examples

#### Number and Comparison Matchers

```typescript
test('number matchers', () => {
  const value = 42;

  // Numeric comparisons
  expect(value).toBeGreaterThan(40);
  expect(value).toBeLessThan(50);
  expect(value).toBeGreaterThanOrEqual(42);
  expect(value).toBeLessThanOrEqual(42);
});
```

#### String Matchers

```typescript
test('string matchers', () => {
  const str = 'Hello, TypeScript!';

  // String matching
  expect(str).toMatch(/TypeScript/);
  expect(str).toContain('Hello');
  expect(str).not.toContain('JavaScript');
});
```

## Additional Tips

### Global Types

Instead of importing from `@jest/globals`, you can install `@types/jest`:

```bash
npm install --save-dev @types/jest
```

### Important Notes

- Try to match versions of Jest and `@types/jest` as closely as possible
- The `@types/jest` is a third-party library maintained at DefinitelyTyped
- Latest Jest features might not be immediately covered in type definitions

## Best Practices

- Keep tests small and focused
- Use descriptive test names
- Test both positive and negative scenarios
- Utilize setup and teardown methods
- Aim for high test coverage

## Common Jest Testing Terms

- `describe`: Group related tests
- `it`/`test`: Individual test case
- `expect`: Make assertions
- `toBe()`: Exact equality
- `toEqual()`: Deep equality
- `not`: Negation of matchers
- `toBeNull()`: Check for null
- `toBeTruthy()`/`toBeFalsy()`: Boolean checks

# ts-jest: TypeScript Testing with Jest

(... previous content remains the same ...)

## API Testing with Supertest

### Installation

Install Supertest and Express (if you're testing an Express app):

```bash
npm install --save-dev supertest @types/supertest express @types/express
```

### Basic API Test Example

#### app.ts

```typescript
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/api/users', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ]);
});

app.post('/api/users', (req: Request, res: Response) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  res.status(201).json(newUser);
});

export default app;
```

#### app.test.ts

```typescript
import request from 'supertest';
import app from './app';

describe('User API', () => {
  // Test GET endpoint
  test('GET /api/users returns list of users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty('name', 'John Doe');
  });

  // Test POST endpoint
  test('POST /api/users creates a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Alice Johnson' })
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body).toHaveProperty('name', 'Alice Johnson');
    expect(response.body).toHaveProperty('id');
  });

  // Test error handling
  test('POST /api/users with invalid data returns error', async () => {
    await request(app)
      .post('/api/users')
      .send({}) // Empty body
      .expect(400);
  });
});
```

### Advanced Supertest Techniques

#### Handling Authentication

```typescript
test('Authenticated route', async () => {
  const token = 'your-auth-token';

  await request(app)
    .get('/api/protected-route')
    .set('Authorization', `Bearer ${token}`)
    .expect(200);
});
```

#### Checking Response Headers

```typescript
test('Response headers', async () => {
  await request(app)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect('Cache-Control', 'no-cache')
    .expect(200);
});
```

### Common Supertest Methods

- `.get()`: Send GET request
- `.post()`: Send POST request
- `.put()`: Send PUT request
- `.delete()`: Send DELETE request
- `.send()`: Send request body
- `.set()`: Set request headers
- `.expect()`: Assert response status, headers, or body

### Best Practices for API Testing

- Test both successful and error scenarios
- Validate response status codes
- Check response structure and content
- Test input validation
- Verify authentication and authorization
- Use meaningful test descriptions

### Configuration Tips

Ensure your `jest.config.ts` supports async testing:

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Increase timeout for slower API tests
  testTimeout: 10000,
};

export default config;
```

## References

- [Jest Official Documentation](https://jestjs.io/)
- [ts-jest GitHub Repository](https://github.com/kulshekhar/ts-jest)
- [TypeScript Official Site](https://www.typescriptlang.org/)
