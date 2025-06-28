import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black fixed top-0 text-white px-6 py-6 flex justify-between z-50 items-center shadow-md w-full">
      {/* Logo */}
      <div className="flex items-center gap-2">
      { /* <img src="/logo.png" alt="Leopard Corridor Yala" className="h-10" /> */}
        <span className="text-xl font-cursive tracking-wide">Kings Lodge Habarana</span>
      </div>

    
      {/* Right Nav */}
      <ul className="hidden md:flex items-center space-x-5 text-sm">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link to="/facilities">FACILITIES</Link></li>
        <li><Link to="/reviews">REVIEWS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
       {/*<li>
          <button className="bg-yellow-700 hover:bg-yellow-800 px-4 py-2 rounded text-white font-semibold">
            CHECK AVAILABILITY
          </button>
        </li> */} 
      </ul>
    </nav>
  );
};

export default Navbar;
