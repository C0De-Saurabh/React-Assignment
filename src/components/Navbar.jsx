import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-300 p-4 rounded-b-lg shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
            Home
          </Link>
          <Link to="/counter" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
            Counter
          </Link>
          <Link to="/form" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
            User Data Form
          </Link>
          <Link to="/editor" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
            Rich Text Editor
          </Link>
        </div>

        {/* User Info and Authentication */}
        <div className="flex items-center space-x-4">
          {isAuthenticated && user ? (
            <div className="flex items-center space-x-3">
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-gray-500"
              />
              <span className="text-sm">{user.name}</span>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
