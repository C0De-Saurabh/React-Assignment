import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/UserSlice';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

const App = () => {
  return (
    <Auth0Provider
     domain={process.env.REACT_APP_AUTH0_DOMAIN}
     clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <Router>
          <div className="font-sans">
            <Navbar />
            <div className="pt-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/counter"
                  element={
                    <PrivateRoute>
                      <Counter />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/form"
                  element={
                    <PrivateRoute>
                      <UserDataForm />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/editor"
                  element={
                    <PrivateRoute>
                      <RichTextEditor />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    </Auth0Provider>
  );
};

export default App;
