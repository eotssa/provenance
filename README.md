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
- `controllers`: Route handlers
- `models`: Mongoose schemas (`blog.js`, `user.js`).
- `utils`: Configuration, middleware, and logging.
- `tests`: Unit and Integration tests.

### Frontend
- `src/components`: UI
- `src/reducers`: Redux Toolkit
- `src/services`: API

## Running the Application

### Backend directory commands
Set environment variables in `.env`
   ```bash
   npm start          # Start server in production mode
   npm run dev        # Start in development mode (nodemon)
   npm run lint       # Lint codebase
   npm test           # Run Jest tests
   npm run start:test # Start server in test environment
   ```

### Frontend directory commands 
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

