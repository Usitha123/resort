import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Leopard Corridor Yala" className="h-10" />
        <span className="text-xl font-cursive tracking-wide">Kings Lodge Habarana</span>
      </div>

    
      {/* Right Nav */}
      <ul className="hidden md:flex items-center space-x-5 text-sm">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li>FACILITIES</li>
        <li>REVIEWS</li>
        <li>CONTACT</li>
        <li>
          <button className="bg-yellow-700 hover:bg-yellow-800 px-4 py-2 rounded text-white font-semibold">
            CHECK AVAILABILITY
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
