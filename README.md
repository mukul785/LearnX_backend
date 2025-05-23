# LMS Backend

This is the backend service for the Learning Management System (LMS). It is built using Node.js, Express, and MongoDB.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (running locally or a connection string for a cloud instance)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

## Getting Started

Follow these steps to set up and run the backend locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the `backend` directory and add the following variables:

```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

Replace `<your-mongodb-connection-string>` and `<your-jwt-secret>` with appropriate values.

### 4. Start the Development Server

To start the server in development mode with live reload, use:

```bash
npm run dev
```

This uses `nodemon` to automatically restart the server on file changes.

### 5. Start the Production Server

To start the server in production mode, use:

```bash
npm start
```

### 6. API Endpoints

The backend exposes the following API endpoints:

- **Authentication**: `/api/auth`
- **Courses**: `/api/courses`

Refer to the respective route files for detailed API documentation.

## Running with Docker

To run the backend in a Docker container:

1. Build the Docker image:

   ```bash
   docker build -t lms-backend .
   ```

2. Run the container:

   ```bash
   docker run -p 5000:5000 --env-file .env lms-backend
   ```

## Project Structure

```
backend/
├── config/         # Database configuration
├── routes/         # API route handlers
├── models/         # Mongoose models
├── controllers/    # Business logic for routes
├── middleware/     # Custom middleware
├── server.js       # Entry point of the application
├── Dockerfile      # Docker configuration
├── package.json    # Project metadata and dependencies
└── readme.md       # Project documentation
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## Troubleshooting

- **MongoDB Connection Issues**: Ensure your `MONGO_URI` is correct and MongoDB is running.
- **Port Conflicts**: Check if port `5000` is already in use and update the `PORT` variable in `.env` if needed.

## License

This project is licensed under the ISC License.

