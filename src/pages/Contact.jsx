import React from "react";
import Navbar from "../components/Navbar";
import GoogleMapEmbed from "../components/GoogleMapEmbed";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeInOut" },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.6 },
  },
};

// Reusable contact info item
function ContactInfoItem({ icon, title, children }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-300">{children}</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <motion.div
      className="bg-black min-h-screen overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-black pt-16">
        <div className="text-center z-10 px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            Get in touch with us for reservations, inquiries, or to plan your
            perfect getaway
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <ContactInfoItem
                title="Address"
                icon={
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              >
                Kings Lodge Habarana
                <br />
                Habarana, Sri Lanka
              </ContactInfoItem>

              <ContactInfoItem
                title="Phone"
                icon={
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
              >
                +94 XX XXX XXXX
              </ContactInfoItem>

              <ContactInfoItem
                title="Email"
                icon={
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              >
                info@kingslodgehabarana.com
              </ContactInfoItem>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Located in the heart of Habarana, our resort offers easy access to
              Sri Lanka's cultural triangle and wildlife sanctuaries.
            </p>
          </motion.div>
          <GoogleMapEmbed showLocationInfo showDirections height="600px" />
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}

export default Contact;
