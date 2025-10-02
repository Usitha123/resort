import React, { useState } from "react";
import { motion } from "framer-motion";

const BASE_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5925.852620374355!2d80.75966992485743!3d8.05388586520853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc9f62fffffff9%3A0x6e27753e03301850!2sKings%20Lodge%20Habarana!5e0!3m2!1sen!2slk!4v1751086115921!5m2!1sen!2slk";

const SATELLITE_URL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7149.9486001341265!2d80.759525!3d8.052913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc9f62fffffff9%3A0x6e27753e03301850!2sKings%20Lodge%20Habarana!5e1!3m2!1sen!2slk!4v1759376856539!5m2!1sen!2slk";

const TABS = [
  { id: "map", label: "Map View", icon: "🗺️" },
  { id: "satellite", label: "Satellite", icon: "🛰️" },
];

const mapUrls = {
  map: BASE_URL,
  satellite: SATELLITE_URL,
};

const MapView = ({ showLocationInfo = true, showDirections = true, height = "500px" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("map");

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Map Container */}
      <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
        {/* Tabs */}
        <div className="absolute top-4 right-4 z-20 flex bg-black/80 backdrop-blur-sm rounded-lg p-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded-md text-xs font-medium flex items-center space-x-1 transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#D4AF37] text-black"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-300">Loading map...</p>
            </div>
          </div>
        )}

        {/* Map iframe */}
        <iframe
          title="Kings Lodge Habarana Location"
          src={mapUrls[activeTab]}
          width="100%"
          height={height}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={`w-full transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Directions Button */}
        {showDirections && (
          <div className="absolute bottom-4 right-4 z-10">
            <motion.a
              href="https://www.google.com/maps/dir//Kings+Lodge+Habarana/@8.0538859,80.7596699,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3afc9f62fffffff9:0x6e27753e03301850"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#B8941F] flex items-center space-x-2 shadow-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <span>Get Directions</span>
            </motion.a>
          </div>
        )}

        {/* Open in Maps Button */}
        <div className="absolute bottom-4 left-4 z-10">
          <motion.button
            className="bg-black/80 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Kings+Lodge+Habarana/@8.0538859,80.7596699,15z",
                "_blank"
              )
            }
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Location Info Section */}
      {showLocationInfo && (
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* Distance */}
          <InfoCard
            delay={0.2}
            title="Distance from Airport"
            text="Bandaranaike International Airport: ~3.5 hours drive"
            subtext="Via A9 Highway through Anuradhapura"
            iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />

          {/* Attractions */}
          <InfoCard
            delay={0.4}
            title="Nearby Attractions"
            text="Sigiriya Rock Fortress, Anuradhapura, Polonnaruwa"
            subtext="All within 30-60 minutes drive"
            iconPath="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />

          {/* Climate */}
          <InfoCard
            delay={0.6}
            title="Climate"
            text="Tropical climate, best visited during dry season (Dec-Mar)"
            subtext="Average temperature: 28-32°C"
            iconPath="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </div>
      )}
    </motion.div>
  );
};

/* Info Card Component */
const InfoCard = ({ delay, title, text, subtext, iconPath }) => (
  <motion.div
    className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
  >
    <div className="flex items-center space-x-3 mb-3">
      <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <h4 className="text-white font-semibold">{title}</h4>
    </div>
    <p className="text-gray-300 text-sm">{text}</p>
    <p className="text-gray-400 text-xs mt-2">{subtext}</p>
  </motion.div>
);

export default MapView;
