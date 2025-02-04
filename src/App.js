import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/UserSlice';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="font-sans">
          <Navbar />
          <div className="pt-20"> {/* Add padding to the top to prevent content from being hidden */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/form" element={<UserDataForm />} />
              <Route path="/editor" element={<RichTextEditor />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
