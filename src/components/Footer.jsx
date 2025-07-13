import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTripadvisor,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1d231c] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        {/* QUICK LINKS */}
    <div>
       <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300">
        <li className=" hover:text-white"><Link to="/">Home</Link></li>
        <li className=" hover:text-white"><Link to="/aboutus">About Us</Link></li>
        <li className=" hover:text-white"><Link to="/facilities">Facilities</Link></li>
        <li className=" hover:text-white"><Link to="/reviews">Reviews</Link></li>
        <li className=" hover:text-white"><Link to="/contact">Contact</Link></li> 
      </ul>
    </div>


        {/* FOLLOW US */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
  <li>
    <a
      href="https://www.facebook.com/kingslodgehabarana?mibextid=wwXIfr&rdid=GSdaqsOhtJW2GgIJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EuoGjaV9m%2F%3Fmibextid%3DwwXIfr#" // Replace with your actual link
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-white"
    >
      <FaFacebook className="text-lg" />
      Facebook
    </a>
  </li>
  <li>
    <a
      href="https://www.instagram.com/yourprofile" // Replace with your actual link
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-white"
    >
      <FaInstagram className="text-lg" />
      Instagram
    </a>
  </li>
  <li>
    <a
      href="https://www.tripadvisor.com/VacationRentalReview-g665220-d17436272-Kings_Lodge_Habarana-Habarana_North_Central_Province.html" // Replace with your actual link
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-white"
    >
      <FaTripadvisor className="text-lg" />
      TripAdvisor
    </a>
  </li>
</ul>

        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
          <div className="flex items-start gap-2 text-sm text-gray-300">
            <FaMapMarkerAlt className="mt-1" />
            <p>
              Kings Lodge Habarana,<br />
              Sewanagama, <br />
              Habarana.

              
            </p>
          </div>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              +94 77 364 7648
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              Kingslodgehabarana@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp />
              +94 77 364 7648
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-center items-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        <p>Copyright © 2025  All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
