# Mau Buat SPK Kriteria Jamur dengan Metode KNN

# Laravel Shadcn Admin Dashboard

A modern, responsive, and accessible admin dashboard built with Shadcn UI, Laravel, and Vite. This project combines the elegance of Shadcn's UI components with the robustness of Laravel's backend framework, providing a seamless development experience.

![alt text](public/images/shadcn-admin.png)

This project is inspired by [Shadcn-admin](https://github.com/satnaing/shadcn-admin) and adapted to work seamlessly with Laravel and Inertia.js.

## Features

- Light/dark mode
- Responsive
- Accessible
- With built-in Sidebar component
- Global Search Command
- 10+ pages
- Extra custom components

## Tech Stack

**UI:** [ShadcnUI](https://ui.shadcn.com) (TailwindCSS + RadixUI)

**Backend:** [Laravel](https://laravel.com/) 12.x

**Frontend Integration:** [InertiaJs](https://inertiajs.com/)

**Build Tool:** [Vite](https://vitejs.dev/)

**Type Checking:** [TypeScript](https://www.typescriptlang.org/)

**Linting/Formatting:** [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/)

**Icons:** [Tabler Icons](https://tabler.io/icons)

## Run Locally

1. Clone the project

```bash
  git clone git@github.com:binjuhor/shadcn-lar.git
```

2. Go to the project directory

```bash
  cd shadcn-lar
```

3. Install dependencies

- Install JavaScript dependencies:

```bash
  pnpm install
```

- Install PHP dependencies:

```bash
  composer install
```

- Data migration

```bash
  php artisan migrate
```

4. Start the dev
   Frotnedend and Backend server

- Start the Vite development server:

```bash
  pnpm run dev
```

- Start the Laravel development server:

```bash
  php artisan serve
```

5. Open your browser and visit http://localhost:8000 to view the dashboard.

## CI/CD Guide

This project includes automated CI/CD workflows using GitHub Actions. The workflows are located in the `.github/workflows/` directory and provide continuous integration and deployment capabilities.

### Available Workflows

#### 1. Tests Workflow (`test.yml`)

Automatically runs on every push to the `main` branch and performs:

- **PHP Setup:** Uses PHP 8.2 with required extensions
- **Environment Setup:** Copies `.env.example` to `.env` and generates application key
- **Dependencies:** Installs Composer dependencies
- **Frontend Build:** Installs Node.js dependencies and builds production assets
- **Database Setup:** Creates SQLite database for testing
- **Test Execution:** Runs PHPUnit/Pest tests (unit and feature tests)

#### 2. Deploy Workflow (`deploy.yml`)

Automatically deploys to production server on successful pushes to `main` branch:

- **Code Deployment:** Uses rsync to sync code to production server
- **Frontend Build:** Builds production assets before deployment
- **Dependencies:** Installs/updates Composer dependencies via Docker
- **Database Migration:** Runs Laravel migrations
- **Cache Management:** Clears and optimizes application cache
- **Docker Integration:** Restarts Docker containers for updated services

### Required Secrets

For the deployment workflow to work, configure these GitHub repository secrets:

- `PRIVATE_KEY` - SSH private key for server access
- `SSH_HOST` - Production server hostname/IP
- `SSH_USER` - SSH username for server access
- `WORK_DIR` - Application directory path on server
- `DOCKER_DIR` - Docker compose directory path on server

### Local Development Workflow

1. **Before Committing:**

   ```bash
   # Run tests locally
   php artisan test

   # Build frontend assets
   pnpm run build

   # Check code formatting
   pnpm run lint
   ```

2. **Push to Main:**
   - Tests workflow runs automatically
   - If tests pass and on `main` branch, deployment begins
   - Monitor workflow progress in GitHub Actions tab

### Workflow Customization

To modify the CI/CD behavior:

- **Test Configuration:** Edit `.github/workflows/test.yml`
- **Deployment Steps:** Edit `.github/workflows/deploy.yml`
- **Add Quality Checks:** Consider adding code style checks, static analysis, or security scans

## Roadmap

Here are some of the planned features for future updates:

- **User Permissions & Roles:** Manage user roles and permissions with a flexible and intuitive system.

- **Profile Manager:** Allow users to update their profiles, including personal information and security settings.

- **Post & Page Manager:** Create and manage dynamic posts and pages with a rich text editor.

- **Theme & Plugin Manager:** Easily install and manage themes and plugins to extend functionality.

- **File & Media Manager:** A powerful file and media manager for handling uploads and organizing assets.

## Author

This project was crafted with 🤍 by [@binjuhor](https://github.com/binjuhor)

## License

This project is open-source and licensed under the [MIT License](https://choosealicense.com/licenses/mit/). Feel free to use, modify, and distribute it as needed.
