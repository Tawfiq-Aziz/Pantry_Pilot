# PantryPilot

A modern kitchen and grocery management platform built with **Laravel**, **React (TypeScript)**, **Tailwind CSS**, and **PostgreSQL**.

---

## Tech Stack

- **Backend:** Laravel 12, PHP 8.2+, Eloquent ORM
- **Frontend:** React 18, TypeScript, Inertia.js, Vite
- **Styling:** Tailwind CSS, PostCSS
- **Database:** PostgreSQL (with `pdo_pgsql` driver)
- **Authentication:** Laravel Breeze (TypeScript + Inertia stack)

---

## Prerequisites

Ensure the following tools are installed on your machine:

| Tool | Version Requirement | Download Link |
| :--- | :--- | :--- |
| **PHP** | `>= 8.2` (with `pdo_pgsql`, `openssl`, `mbstring`, `curl`) | [php.net](https://www.php.net/downloads) or via [Laragon](https://laragon.org/) |
| **Composer** | `>= 2.0` | [getcomposer.org](https://getcomposer.org/download/) |
| **Node.js & npm** | Node `>= 18.0`, npm `>= 9.0` | [nodejs.org](https://nodejs.org/) |
| **PostgreSQL** | `>= 14` | [postgresql.org](https://www.postgresql.org/download/) |
| **Git** | Any modern version | [git-scm.com](https://git-scm.com/) |

> **Note for Windows/Laragon users:** Ensure `extension=pdo_pgsql` and `extension=pgsql` are uncommented in your active `php.ini`.

---

## Quickstart Guide

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Pantry_Pilot
```

### 2. Install Dependencies
```bash
# Install PHP dependencies
composer install

# Install JavaScript/TypeScript dependencies
npm install
```

### 3. Configure the Environment
```bash
# Create local environment configuration
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 4. Configure PostgreSQL
Create a database in PostgreSQL (e.g., using `psql`, pgAdmin, or your database GUI):
```sql
CREATE DATABASE pantry_pilot;
```

Update your `.env` database parameters:
```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=pantry_pilot
DB_USERNAME=postgres
DB_PASSWORD=your_postgres_password
```

### 5. Run Migrations
Run the initial database migrations to create the required tables:
```bash
php artisan migrate
```

### 6. Start the Application
Run both backend and frontend development servers:

**Terminal 1 (Backend):**
```bash
php artisan serve
```

**Terminal 2 (Frontend with Vite Hot-Reloading):**
```bash
npm run dev
```

Visit [`http://localhost:8000`](http://localhost:8000) in your browser.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with hot module replacement (HMR). |
| `npm run build` | Compiles and optimizes TypeScript and CSS assets for production. |
| `php artisan serve` | Starts the local PHP development server at `http://localhost:8000`. |
| `php artisan migrate` | Executes pending database migrations against PostgreSQL. |
| `php artisan test` | Runs the test suite via PHPUnit. |
