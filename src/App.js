import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/Aside';
import Register from './pages/Register';
import * as Sentry from '@sentry/react';

function App() {
  // React.useEffect(() => {
  //   // Trigger a test error to verify Sentry setup
  //   Sentry.captureException(new Error("Test Sentry bububububu setup"));
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Sidebar} />
        <Route path='/register' Component={Register} />
      </Routes>
    </Router>
  );
}

export default App;
