import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/UserSlice';
import { Auth0Provider } from '@auth0/auth0-react';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import { useTransition, animated } from 'react-spring'; // Import react-spring

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
        <Router>   {/*Remember :  Wrap the app in a Router component*/}
          <AppWithTransitions /> 
        </Router>
      </Provider>
    </Auth0Provider>
  );
};

const AppWithTransitions = () => {
  const location = useLocation();

  // Set up transitions for route changes
  const transitions = useTransition(location, {
    keys: location.pathname,
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="font-sans bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 min-h-screen">
      <Navbar />
      <div className="pt-20">
        {transitions((styles, item) => (
          <animated.div style={styles}>
            <Routes location={item}>
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
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default App;
