import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import { Provider } from 'react-redux';
import { store } from './redux/UserSlice';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <div className="p-5 font-sans">
        <nav className="mb-5 space-x-4">
          <Link 
            to="/counter" 
            className="text-blue-500 hover:underline"
          >
            Counter
          </Link>
          <Link 
            to="/form" 
            className="text-blue-500 hover:underline"
          >
            User Data Form
          </Link>
          <Link 
            to="/editor" 
            className="text-blue-500 hover:underline"
          >
            Rich Text Editor
          </Link>
        </nav>

        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<UserDataForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
        </Routes>
      </div>
    </Router>
    </Provider>

  );
};

export default App;
