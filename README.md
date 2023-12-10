# Blog-App
React and Node.js // CRUD application with user and blog connectivity, like, comment, delete, and add posts. Styled with Chakra. 
---

# Blog Platform

This project is a full-stack web application for a blogging platform. It allows users to create, update, and delete blog posts, as well as manage user authentication.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React
- **Database**: MongoDB (Mongoose for ORM)
- **Testing**: Jest (Unit and Integration Testing), Cypress (End-to-End Testing)
- **Styling**: Chakra UI (React component library)
- **Other Libraries**: Redux (State Management), JWT (Authentication), bcrypt (Password Hashing)

## Project Structure

### Backend

The backend is structured into different modules for better organization:

- `controllers`: Contains Express route handlers.
  - `blogs.js`: Handles blog-related routes (CRUD operations).
  - `login.js`: Manages user login.
  - `testing.js`: Provides a route for database reset during testing.
  - `users.js`: Manages user-related operations (CRUD).

- `models`: Defines Mongoose schemas and models.
  - `blog.js`: Schema for the blog.
  - `user.js`: Schema for the user.

- `utils`: Utility functions and middleware.
  - `config.js`: Configuration for the application.
  - `middleware.js`: Middleware functions for Express.
  - `logger.js`: Logging functionality.

- `tests`: Unit and Integration tests for the application.

### Frontend

The frontend is built with React and managed with Redux for state management:

- `src/components`: React components for UI.
- `src/reducers`: Redux reducers for managing application state.
- `src/services`: Services for API calls.
- `App.jsx`: Main application component.
- `main.jsx`: Entry point for the React application.

## Running the Application

1. **Backend**:
   - Set environment variables in `.env` file (e.g., database URI, JWT secret).
   - 
  # Start server in production mode
  npm start
  
  # Start server in development mode (with nodemon)
  npm run dev
  
  # Lint codebase
  npm run lint
  
  # Run backend tests with Jest
  npm test
  
  # Start server in test environment
  npm run start:test
  
  2. **Frontend**:
     - Run `npm install` in the frontend directory.
     
  # Start Vite dev server
  npm run dev
    
  # Build for production
  npm run build
  
  # Preview production build
  npm run preview
  
  # Lint frontend code
  npm run lint
  
  # Run frontend tests with Jest
  npm test
  
  # Open Cypress test runner
  npm run cypress:open
  
  # Run e2e tests headless with Cypress
  npm run test:e2e


## Testing

- Run `npm test` in the backend directory to execute backend tests.
- Run `npm test` in the frontend directory for frontend tests.
- End-to-end tests with Cypress can be run using `npm run test:e2e`.




