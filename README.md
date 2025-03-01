<div style="display: flex; align-items: center; justify-content: center;">
  <h1 style="margin: 0;">NewsCurator Backend</h1>
</div>
<br>

NewsCurator is a personalized news platform that delivers trending articles filtered by user interests (e.g., tech, science, etc.). This repository contains the backend server powering NewsCurator, built with Node.js, Express, and TypeScript. It integrates with NewsAPI for fetching news, manages data with Prisma ORM on a MySQL database, and uses JWT for secure authentication.

---

<details>
  <summary>Table of Contents</summary>

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Frontend Repository](#frontend-repository)
- [License](#license)
  
</details>

---

## Overview

The NewsCurator backend handles all server-side operations, including:

- **User Management & Authentication:**  
  - Secure sign-up and sign-in using JWT tokens.
  
- **News Aggregation:**  
  - Fetches trending news articles from NewsAPI and supports pagination.
  
- **Filtering & Bookmarking:**  
  - Enables filtering by predefined tags or custom text and manages user bookmarks.
  
- **Profile & Session Management:**  
  - Allows users to view personal details and securely log out.

By leveraging Express with TypeScript and Prisma, the backend provides a robust, type-safe, and scalable environment for NewsCurator.

---

## Tech Stack

- **Node.js:** JavaScript runtime.
- **Express.js:** Web framework for building RESTful APIs.
- **TypeScript:** Provides type safety and improved code quality.
- **Prisma:** ORM for managing MySQL database interactions.
- **MySQL:** Relational database for persistent data storage.
- **JWT:** Authentication using JSON Web Tokens.
- **Axios:** Used for fetching data from NewsAPI.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download)
- [MySQL](https://www.mysql.com/downloads/)
- [NewsAPI Key](https://newsapi.org/account)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/jlokitha/NewsCurator-Backend.git
   cd NewsCurator-Backend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```
   
3. **Create MySQL Database:**

   ```bash
   npx prisma db push
   ```

4. **Generate Prisma Client:**

   ```bash
   npx prisma generate
   ```

---

### Environment Variables

Create a `.env` file in the project root and configure the following variables:

```env
# MySQL connection string
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"

# Base URL for API requests
BASE_URL="http://localhost:3000"

# JWT Secret Keys
SECRET_KEY="your_jwt_secret_key"
REFRESH_TOKEN="your_refresh_token_secret"

# News API Key
NEWS_API_KEY="your_news_api_key"
```

---

## Development

To start the development server with live reload, run:

```bash
  npm start
```

This command uses nodemon to monitor changes and restart the server automatically.

---

## API Documentation

Detailed API endpoint documentation is available via our Postman collection.  
Access it [here](https://documenter.getpostman.com/view/35384124/2sAYdhLAyB).

---

## Frontend Repository

For a complete view of the project, check out the NewsCurator Frontend repository on GitHub [here](https://github.com/jlokitha/NewsCurator-Frontend.git).

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <a href="https://github.com/jlokitha" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  </a>
  <a href="https://expressjs.com/" target="_blank">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  </a>
  <a href="https://www.prisma.io/" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-000000?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma">
  </a>
  <a href="https://www.mysql.com/" target="_blank">
    <img src="https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
</div>
<br>

<p align="center">
  &copy; 2025 Janindu Lokitha
</p>

---