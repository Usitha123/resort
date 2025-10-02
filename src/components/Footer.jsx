import React from "react";
import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer 
      className="bg-gradient-to-br from-black to-[#1a1a1a] text-white py-10 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* QUICK LINKS */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <motion.li 
              whileHover={{ x: 5 }}
              className="transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <Link to="/aboutus">About Us</Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <Link to="/facilities">Facilities</Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <Link to="/reviews">Reviews</Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <Link to="/contact">Contact</Link>
            </motion.li> 
          </ul>
        </motion.div>


        {/* FOLLOW US */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">FOLLOW US</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <motion.li
              whileHover={{ x: 5 }}
              className="transition-colors duration-300"
            >
              <a
                href="https://www.facebook.com/kingslodgehabarana?mibextid=wwXIfr&rdid=GSdaqsOhtJW2GgIJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EuoGjaV9m%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-8 h-8 bg-[#1a1a1a] border border-gray-700 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-colors duration-300"
                >
                  <FaFacebook className="text-sm" />
                </motion.div>
                Facebook
              </a>
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              className="transition-colors duration-300"
            >
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-8 h-8 bg-[#1a1a1a] border border-gray-700 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-colors duration-300"
                >
                  <FaInstagram className="text-sm" />
                </motion.div>
                Instagram
              </a>
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              className="transition-colors duration-300"
            >
              <a
                href="https://www.tripadvisor.com/VacationRentalReview-g665220-d17436272-Kings_Lodge_Habarana-Habarana_North_Central_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-8 h-8 bg-[#1a1a1a] border border-gray-700 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-colors duration-300"
                >
                  <FaTripadvisor className="text-sm" />
                </motion.div>
                TripAdvisor
              </a>
            </motion.li>
          </ul>
        </motion.div>

        {/* ADDRESS */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">ADDRESS</h3>
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-start gap-3 text-sm text-gray-300 transition-colors duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-8 h-8 bg-[#1a1a1a] border border-gray-700 rounded-full flex items-center justify-center mt-1 hover:border-[#D4AF37] transition-colors duration-300"
            >
              <FaMapMarkerAlt className="text-sm" />
            </motion.div>
            <div>
              <p className="leading-relaxed">
                Kings Lodge Habarana,<br />
                Sewanagama, <br />
                Habarana.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CONTACT US */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">CONTACT US</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-8 h-8 bg-[#1a1a1a] border border-gray-700 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-colors duration-300"
              >
                <FaPhoneAlt className="text-sm" />
              </motion.div>
              +94 77 364 7648
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-8 h-8 bg-[#1a1a1a] border border-gray-700 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-colors duration-300"
              >
                <FaEnvelope className="text-sm" />
              </motion.div>
              Kingslodgehabarana@gmail.com
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-8 h-8 bg-[#1a1a1a] border border-gray-700 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-colors duration-300"
              >
                <FaWhatsapp className="text-sm" />
              </motion.div>
              +94 77 364 7648
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-400 border-t border-gray-700 pt-6"
      >
        <p>Copyright © 2025 Kings Lodge Habarana. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
