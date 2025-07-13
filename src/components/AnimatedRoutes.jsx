import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Facilities from '../pages/Facilities';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';

import {AnimatePresence} from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>
  )
}
