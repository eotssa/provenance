# Blog-App

This project is a full-stack web application for a blogging platform. It enables users to create, update, and delete blog posts, and manage user authentication.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React
- **Database**: MongoDB (Mongoose ORM)
- **Testing**: Jest (Unit and Integration Testing), Cypress (End-to-End Testing)
- **Styling**: Chakra UI
- **State Management**: Redux
- **Authentication**: JWT
- **Security**: bcrypt for Password Hashing

## Project Structure

### Backend
Organized into modules for enhanced maintainability:
- `controllers`: Route handlers (CRUD for blogs, user login, testing, user management).
- `models`: Mongoose schemas (`blog.js`, `user.js`).
- `utils`: Configuration, middleware, and logging.
- `tests`: Unit and Integration tests.

### Frontend
Built with React, managed by Redux:
- `src/components`: UI components.
- `src/reducers`: Redux state management.
- `src/services`: API services.
- `App.jsx`: Main app component.
- `main.jsx`: React entry point.

## Running the Application

### Backend Setup
1. Set environment variables in `.env` (e.g., MongoDB URI, JWT secret).
2. Run these commands in the backend directory:
   ```bash
   npm start          # Start server in production mode
   npm run dev        # Start in development mode (nodemon)
   npm run lint       # Lint codebase
   npm test           # Run Jest tests
   npm run start:test # Start server in test environment
   ```

### Frontend Setup
1. Run `npm install` in the frontend directory.
2. Execute these commands:
   ```bash
   npm run dev          # Start Vite dev server
   npm run build        # Build for production
   npm run preview      # Preview production build
   npm run lint         # Lint frontend code
   npm test             # Run Jest frontend tests
   npm run cypress:open # Open Cypress test runner
   npm run test:e2e     # Run Cypress tests headless
   ```

## Testing
- Backend: Execute `npm test` in the backend directory.
- Frontend: Run `npm test` in the frontend directory.
- Cypress E2E: Use `npm run test:e2e` for end-to-end testing.

