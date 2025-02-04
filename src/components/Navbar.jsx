import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSpring, animated } from 'react-spring';

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // Hover effect for links
  const linkHover = useSpring({
    from: { color: '#93c5fd' },
    to: { color: '#3b82f6' },
    reset: true,
    reverse: !isAuthenticated,
    config: { tension: 250, friction: 20 },
  });

  // Fade-in effect for profile and logout button
  const profileProps = useSpring({
    opacity: isAuthenticated ? 1 : 0,
    transform: isAuthenticated ? 'translateY(0)' : 'translateY(-20px)',
  });

  // Login/Logout button hover animation
  const buttonProps = useSpring({
    opacity: isAuthenticated ? 0 : 1,
    transform: isAuthenticated ? 'translateY(-20px)' : 'translateY(0)',
  });

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-300 p-4 rounded-b-lg shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links with animation */}
        <div className="space-x-6 flex items-center">
          <animated.div style={linkHover}>
            <Link to="/" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
              Home
            </Link>
          </animated.div>
          <animated.div style={linkHover}>
            <Link to="/counter" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
              Counter
            </Link>
          </animated.div>
          <animated.div style={linkHover}>
            <Link to="/form" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
              User Data Form
            </Link>
          </animated.div>
          <animated.div style={linkHover}>
            <Link to="/editor" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
              Rich Text Editor
            </Link>
          </animated.div>
        </div>

        {/* User Info and Authentication */}
        <div className="flex items-center space-x-4">
          {/* Profile section when authenticated */}
          {isAuthenticated && user ? (
            <animated.div style={profileProps} className="flex items-center space-x-3">
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
            </animated.div>
          ) : (
            // Login button if not authenticated
            <animated.button
              style={buttonProps}
              onClick={() => loginWithRedirect()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </animated.button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
