import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-yellow-400 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400'
      : 'hover:text-yellow-300 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full';

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full text-white px-6 py-4 flex justify-between items-center z-50 overflow-x-hidden transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      >
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2 overflow-hidden"
        >
          <motion.img 
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            src="/logo.jpg" 
            alt="Kings Lodge Logo" 
            className="h-10 w-auto max-w-[120px] rounded-full shadow-lg" 
          />
          <span className="text-xl font-cursive tracking-wide whitespace-nowrap">
            <NavLink to="/" className="hover:text-yellow-300 transition-colors duration-300">
              Kings Lodge Habarana
            </NavLink>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex items-center space-x-8 text-sm font-medium"
        >
          {['HOME', 'ABOUT US', 'FACILITIES', 'REVIEWS', 'CONTACT'].map((item, index) => {
            const path = item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                <NavLink to={path} className={navLinkClass}>
                  {item}
                </NavLink>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="text-3xl md:hidden cursor-pointer hover:text-yellow-300 transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-black/95 backdrop-blur-md text-white px-6 py-6 fixed top-[72px] w-full overflow-x-hidden z-40 shadow-2xl border-t border-yellow-400/20"
          >
            <ul className="flex flex-col gap-6 text-sm font-medium">
              {['HOME', 'ABOUT US', 'FACILITIES', 'REVIEWS', 'CONTACT'].map((item, index) => {
                const path = item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <NavLink 
                      to={path} 
                      className={navLinkClass} 
                      onClick={toggleMenu}
                    >
                      {item}
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;