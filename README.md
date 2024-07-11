# Chat App

## Purpose

The purpose of this project is to create a robust, real-time chat application that allows users to communicate seamlessly. This application demonstrates key features of modern web development, including real-time communication, user authentication, and responsive design, using the PERN stack with TypeScript.

## Features

- **Real-time Messaging**: Instant messaging with real-time updates using Socket.io.
- **User Authentication and Authorization**: Secure user login and registration with JWT.
- **Global State Management**: Efficient state management across the application using Zustand.
- **Error Handling**: Comprehensive error handling on both the server and client sides to ensure reliability.
- **Responsive Design**: A user-friendly interface that adapts to various device sizes.

## Technologies Used

- **PostgreSQL**: Relational database for storing user data and chat messages.
- **Express.js**: Backend framework for building the server and handling API requests.
- **React**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the server-side logic.
- **TypeScript**: Superset of JavaScript providing static typing.
- **Socket.io**: Library for real-time web applications.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.
- **Zustand**: For state management.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. **Install server dependencies:**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**

   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add your PostgreSQL database credentials and JWT secret:

   ```env
   DATABASE_URL=your_postgresql_database_url
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   PORT=yourportnumber
   ```

5. **Run the application:**
   - **Server:**
     ```bash
     cd server
     npm run dev
     ```
   - **Client:**
     ```bash
     cd client
     npm start
     ```

## Usage

- **Register**: Create a new account to start using the chat app.
- **Login**: Access your account with your credentials.
- **Chat**: Start a conversation in real-time with other users.
- **Logout**: Securely log out of your account.
