[![CI](https://github.com/mmiller2001/Post-Me-React-App/actions/workflows/ci.yml/badge.svg)](https://github.com/mmiller2001/Post-Me-React-App/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/REPLACE_WITH_SITE_ID/deploy-status)](https://app.netlify.com/sites/REPLACE_WITH_SITE_NAME/deploys)

# React Authentication App

A modern React application with a complete authentication flow featuring login/logout functionality and protected routes.

## Features

- 🔐 **Authentication Flow**: Complete login/logout system
- 🛡️ **Protected Routes**: Secure pages that require authentication
- 💾 **Persistent Sessions**: Login state persists across browser sessions
- 🎨 **Modern UI**: Beautiful, responsive design with gradient backgrounds
- ⚡ **React Router**: Client-side routing for seamless navigation
- 📱 **Mobile Responsive**: Works great on all device sizes

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Usage

### Login
- Navigate to the login page (default route)
- Enter any username and password (this is a demo app)
- Click "Sign In" to authenticate

### Home Page
- After successful login, you'll be redirected to the home page
- View your login information and explore the feature cards
- Click "Logout" to end your session

## Project Structure

```
src/
├── components/
│   ├── LoginForm.js          # Login form component
│   ├── LoginForm.css         # Login form styles
│   ├── HomePage.js           # Protected home page
│   ├── HomePage.css          # Home page styles
│   ├── LoadingSpinner.js     # Loading component
│   └── LoadingSpinner.css    # Loading styles
├── contexts/
│   └── AuthContext.js        # Authentication context and logic
├── App.js                    # Main app component with routing
├── index.js                  # React app entry point
└── index.css                 # Global styles
```

## Authentication Logic

The app uses React Context for state management and localStorage for session persistence:

- **Login**: Accepts any non-empty username/password combination
- **Session Persistence**: Login state is saved to localStorage
- **Auto-redirect**: Authenticated users are redirected to home, unauthenticated users to login
- **Protected Routes**: Home page requires authentication

## Technologies Used

- **React 18**: Modern React with hooks
- **React Router v6**: Client-side routing
- **React Context**: State management
- **CSS3**: Modern styling with gradients and animations
- **localStorage**: Session persistence

## Customization

To integrate with a real authentication system:

1. Update the `login` function in `AuthContext.js` to call your API
2. Add proper error handling and validation
3. Implement token-based authentication
4. Add password reset and registration features

## Available Scripts

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm eject`: Eject from Create React App

## Demo Credentials

Since this is a demo app, you can use any username and password combination to log in. The app will accept any non-empty values.
