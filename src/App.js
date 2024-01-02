import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Recommendations from './components/Recommendations';
import Preferences from './components/Preferences';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
  );
}

export default App;
