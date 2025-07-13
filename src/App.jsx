import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
      <Router>
      <AnimatedRoutes />
    </Router>
       
  );
}

export default App
