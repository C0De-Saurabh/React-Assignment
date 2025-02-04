// components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-300 p-4 rounded-b-lg shadow-md z-10">
      <div className="container mx-auto flex justify-center space-x-4">
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
    </nav>
  );
};

export default Navbar;
