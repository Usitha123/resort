import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-yellow-400 underline underline-offset-4'
      : 'hover:text-yellow-300 transition-colors';

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white px-6 py-6 flex justify-between items-center z-50 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Kings Lodge Logo" className="h-10" />
          <span className="text-xl font-cursive tracking-wide">
            <NavLink to="/" className="hover:text-yellow-300">Kings Lodge Habarana</NavLink>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-5 text-sm">
          <li><NavLink to="/" className={navLinkClass}>HOME</NavLink></li>
          <li><NavLink to="/aboutus" className={navLinkClass}>ABOUT US</NavLink></li>
          <li><NavLink to="/facilities" className={navLinkClass}>FACILITIES</NavLink></li>
          <li><NavLink to="/reviews" className={navLinkClass}>REVIEWS</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden cursor-pointer"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 fixed top-20 w-full z-40 shadow-md transition-all duration-300">
          <ul className="flex flex-col gap-6 text-sm">
            <li><NavLink to="/" className={navLinkClass} onClick={toggleMenu}>HOME</NavLink></li>
            <li><NavLink to="/aboutus" className={navLinkClass} onClick={toggleMenu}>ABOUT US</NavLink></li>
            <li><NavLink to="/facilities" className={navLinkClass} onClick={toggleMenu}>FACILITIES</NavLink></li>
            <li><NavLink to="/reviews" className={navLinkClass} onClick={toggleMenu}>REVIEWS</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>CONTACT</NavLink></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
