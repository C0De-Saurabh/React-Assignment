import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const HomePage = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 dark:text-white p-5">
      <h1 className="text-4xl font-bold mb-5">Welcome to the App</h1>
      
      {!isAuthenticated ? (
        <>
          <p className="text-lg mb-5">Please log in to get started with the features:</p>
          <button
            onClick={() => loginWithRedirect()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
        </>
      ) : (
        <>
          <p className="text-lg mb-5">Hello, {user?.name}! Select a feature to get started:</p>
          <div className="space-x-4">
            <Link to="/counter" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Counter
            </Link>
            <Link to="/form" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              User Data Form
            </Link>
            <Link to="/editor" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Rich Text Editor
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
