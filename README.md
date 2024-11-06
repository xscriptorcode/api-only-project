# API-Only Project

This project is an API-only setup built with Next.js and deployed on Vercel. It includes a subscription endpoint (`/api/newsletter`) that handles email subscriptions by receiving and validating email addresses. This project is designed for a standalone API deployment to work in tandem with a frontend hosted on a separate platform (e.g., Hostinger).

## Project Structure

The main components of the project include:

api-only-project/ 
├── app/ 
│ └── api/ 
│ └── newsletter/ 
│ └── route.ts 
├── prisma/ 
│ └── schema.prisma 
├── package.json 
├── next.config.js 
└── .env.example


- **`app/api/newsletter/route.ts`**: Handles the API endpoint for email subscriptions (`POST /api/newsletter`).
- **`prisma/schema.prisma`**: Defines the Prisma database schema.
- **`.env.example`**: Example environment file listing necessary environment variables.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your system.
- **Git** for version control.
- A **database** compatible with Prisma (e.g., MySQL, PostgreSQL).

### Installation

1. Clone the repository:

    ```bash
   git clone https://github.com/your-username/api-only-project.git
   cd api-only-project

2. Install dependencies:
    ```bash
    npm install


3. set up environment variables:
Create a .env file based on .env.example and add your DATABASE_URL and other required variables.

4. Run Prisma migrations and generate the Prisma client:

    ```bash
    npx prisma migrate deploy
    npx prisma generate

Start the development server:

**npm** run **dev**


Deployment
This API is designed to be deployed on Vercel. Follow these steps:

Push your code to GitHub.
Connect your GitHub repository to Vercel.
Set up environment variables in Vercel.
Deploy the project and obtain your public URL.
License
This project is licensed under the MIT License - see the LICENSE file for details.