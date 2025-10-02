import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Facilities from '../pages/Facilities';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export default function AnimatedRoutes() {
    const location = useLocation();
    
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);
    
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        } />
        <Route path="/about-us" element={
          <PageWrapper>
            <About />
          </PageWrapper>
        } />
        <Route path="/facilities" element={
          <PageWrapper>
            <Facilities />
          </PageWrapper>
        } />
        <Route path="/reviews" element={
          <PageWrapper>
            <Reviews />
          </PageWrapper>
        } />
        <Route path="/contact" element={
          <PageWrapper>
            <Contact />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  )
}
