# HR Management Backend API

A scalable, modular, and production-ready backend for an **HR Management System**.

Built using **Node.js, Express.js, TypeScript, Knex.js, and PostgreSQL**, this API powers features like:

- HR authentication
- Employee management
- Attendance tracking
- Monthly attendance reports
- Secure cookie-based authentication
- Employee photo uploads
- Code quality enforcement with ESLint & Prettier

## Features

### Authentication & Authorization

- Secure JWT authentication
- Password hashing using bcrypt
- Cookie-based session handling
- Protected routes using middleware

### Employee Management

- Create, update, delete employees
- Upload employee profile photos
- Soft delete support
- Pagination & name-based search
- Filtered employee listings

### Attendance Management

- Daily attendance recording
- Upsert logic (one record per day)
- Date range filtering
- Employee-wise attendance history

### Monthly Attendance Reports

- Generate monthly summaries
- Late arrival detection (after 09:45 AM)
- Optional employee filtering
- Aggregated attendance statistics

### Code Quality & Standards

- ESLint for static code analysis
- Prettier for consistent formatting
- Modular service-based architecture
- Type-safe controllers and services

## Tech Stack

| Category      | Technology    |
| ------------- | ------------- |
| Runtime       | Node.js       |
| Language      | TypeScript    |
| Framework     | Express.js    |
| Database      | PostgreSQL    |
| Query Builder | Knex.js       |
| Validation    | Joi           |
| Auth          | JWT + Cookies |
| Upload        | Multer        |
| Linting       | ESLint        |
| Formatting    | Prettier      |

## API Endpoints

### Authentication

| Endpoint      | Method | Description |
| ------------- | ------ | ----------- |
| `/auth/login` | POST   | Login       |

---

### Employees

| Endpoint         | Method | Description     |
| ---------------- | ------ | --------------- |
| `/employees`     | GET    | List employees  |
| `/employees/:id` | GET    | Get employee    |
| `/employees`     | POST   | Create employee |
| `/employees/:id` | PUT    | Update employee |
| `/employees/:id` | DELETE | Soft delete     |

---

### Attendance

| Endpoint          | Method | Description     |
| ----------------- | ------ | --------------- |
| `/attendance`     | GET    | List attendance |
| `/attendance/:id` | GET    | Get attendance  |
| `/attendance`     | POST   | Create / Update |
| `/attendance/:id` | PUT    | Update          |
| `/attendance/:id` | DELETE | Delete          |

---

### Reports

| Endpoint              | Method | Description               |
| --------------------- | ------ | ------------------------- |
| `/reports/attendance` | GET    | Monthly attendance report |

Query Example:
`/reports/attendance?month=2025-08&employee_id=5`

## Setup Instructions

### Prerequisites

Before running the project, make sure you have:

- **Node.js v18+**
- **PostgreSQL Database**
- **npm**
- **Knex CLI (optional)**

```bash
npm install -g knex
```

### 1️⃣ Clone & Install

```bash
git clone https://github.com/mdmasharafilhossain/M360ICT_Server
cd M360ICT_Server
npm install
```

### 2️⃣ Setup Environment Variables:

Create .env file using .env.example:

```bash
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=your_password
DB_NAME=hr_db

JWT_SECRET=your_secret

UPLOAD_PATH=uploads
COOKIE_NAME=hr_token
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=11
Admin_Email=admin@gmail.com
Admin_Password=admin123
```

### 3️⃣ Create Database

Login to PostgreSQL and create database:

```bash
CREATE DATABASE hr_db;
```

4️⃣ Run Database Migrations & Seeds

```bash
npm run migrate:latest
npm run seed
```

5️⃣ Start Development Server

```bash
npm run dev
```

## Code Quality

### Format Code

```bash
npm run format
```

### Check Linting

```bash
npm run lint
```

### Auto-Fix Lint Issues

```bash
npm run lint:fix
```

## Database Schema

Database schema is implemented using Knex migrations located in:

```bash
src/app/database/migrations/
```
