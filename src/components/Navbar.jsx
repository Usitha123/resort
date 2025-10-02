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

  const navLinkClass = ({ isActive }, itemName) => {
    if (isActive) {
      return 'text-[#D4AF37] font-bold relative px-3 py-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/20 transition-all duration-500 ease-out transform scale-105';
    }
    
    return 'hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-300 relative px-3 py-2 rounded-lg border border-transparent hover:shadow-md hover:shadow-[#D4AF37]/10 hover:scale-105 transform';
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 w-full text-white px-6 py-4 flex justify-between items-center z-50 overflow-x-hidden transition-all duration-500 ease-out ${scrolled ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-[#D4AF37]/10' : 'bg-black/85 backdrop-blur-sm'}`}
      >
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-2 overflow-hidden"
        >
          <motion.img 
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            src="/logo.jpg" 
            alt="Kings Lodge Logo" 
            className="h-10 w-auto max-w-[120px] rounded-full shadow-lg" 
          />
          <span className="text-xl font-display tracking-wide whitespace-nowrap">
            <NavLink to="/" className="hover:text-[#D4AF37] transition-colors duration-300">
              Kings Lodge Habarana
            </NavLink>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden md:flex items-center space-x-8 text-sm font-medium"
        >
          {['HOME', 'ABOUT US', 'FACILITIES', 'REVIEWS', 'CONTACT'].map((item, index) => {
            const path = item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <NavLink to={path} className={(props) => navLinkClass(props, item)}>
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
          className="text-3xl md:hidden cursor-pointer hover:text-[#D4AF37] transition-colors duration-300"
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
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-[#1a1a1a]/98 backdrop-blur-lg text-white px-6 py-6 fixed top-[72px] w-full overflow-x-hidden z-40 shadow-2xl border-t border-[#D4AF37]/30"
          >
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {['HOME', 'ABOUT US', 'FACILITIES', 'REVIEWS', 'CONTACT'].map((item, index) => {
                const path = item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <NavLink 
                      to={path} 
                      className={(props) => navLinkClass(props, item)} 
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