# Talkton Backend

This is the backend service for Talkton, a Twitter-like application where users can post talks and like them in real-time. The backend is built with Node.js, Express, TypeScript, and Pusher.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Scalability Considerations](#scalability-considerations)

## Features

- Fetch list of talks
- Like talks
- Real-time updates with Pusher

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **TypeScript**: Typed superset of JavaScript
- **Pusher**: Real-time notifications
- **Cors**: Middleware for enabling CORS
- **Nodemon**: Utility that automatically restarts the server
- **TS-Node**: TypeScript execution engine for Node.js


## Getting Started

### Prerequisites

- Node.js (>= 18.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/obaidshah345/talkton-backend.git
    cd talkton-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up Pusher:
    - Create an account on [Pusher](https://pusher.com/).
    - Create a new app and get your `appId`, `key`, `secret`, and `cluster`.
    - Create a `.env` file in the root of the project and add your Pusher credentials:
        ```
        PUSHER_APP_ID=your_app_id
        PUSHER_KEY=your_key
        PUSHER_SECRET=your_secret
        PUSHER_CLUSTER=your_cluster
        ```

### Running the Server

1. Start the development server:
    ```sh
    npm run dev
    ```

2. The server will start on port 3000. You can change this by setting the `PORT` environment variable.

### API Endpoints

- **GET /api/timeline**: Fetch all talks
- **POST /api/timeline/:id/like**: Like a talk


## Scalability Considerations
### Database
- **Current Setup**: Using a JSON file for simplicity and ease of setup.
- **Production**: Switch to a scalable database solution like MongoDB, PostgreSQL, or Firebase Firestore to handle larger datasets and more complex queries.
### Real-Time Updates
- **Current Setup**: Pusher for real-time updates.
- **Production**: Pusher scales well, but in case the scope of this project is going to increase to millions of users in the future then consider using managed 
  services like AWS AppSync, Firebase Realtime Database, or custom WebSocket servers for more control.
### API Rate Limiting
- Implement rate limiting with middleware like express-rate-limit to prevent abuse and ensure fair usage.
### Load Balancing
- Use a load balancer (e.g., AWS ELB, NGINX) to distribute incoming traffic across multiple server instances.
### Caching
- Use caching strategies with Redis or in-memory caching for frequently accessed data to reduce load on the database.
### Dockerization
- Containerize the application using Docker to ensure consistency across different environments and simplify deployment.
### CI/CD
- Set up continuous integration and continuous deployment pipelines to automate testing, building, and deployment of the application.

