import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-6 py-6 flex justify-between items-center z-50 shadow-md">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <img src="/logo.png" alt="Kings Lodge Logo" className="h-10" /> */}
        <span className="text-xl font-cursive tracking-wide">Kings Lodge Habarana</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-5 text-sm">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link to="/facilities">FACILITIES</Link></li>
        <li><Link to="/reviews">REVIEWS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        {/* 
        <li>
          <button className="bg-yellow-700 hover:bg-yellow-800 px-4 py-2 rounded text-white font-semibold">
            CHECK AVAILABILITY
          </button>
        </li> 
        */}
      </ul>

      {/* Mobile Menu Toggle Button */}
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
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link to="/facilities">FACILITIES</Link></li>
        <li><Link to="/reviews">REVIEWS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        {/* 
        <li>
          <button className="bg-yellow-700 hover:bg-yellow-800 px-4 py-2 rounded text-white font-semibold">
            CHECK AVAILABILITY
          </button>
        </li> 
        */}
      </ul>
        </div>
      )}
</>
  );
};

export default Navbar;
