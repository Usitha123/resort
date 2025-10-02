import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Clock, Star } from "lucide-react";

const experiences = [
  {
    title: "RITIGALA",
    image: "/images/experiences/ritigala.jpg",
    description: "Ancient Buddhist monastery ruins",
    duration: "Half Day",
    rating: 4.8,
    distance: "15 km",
  },
  {
    title: "KIRINDA BEACH",
    image: "/images/kirinda.jpg",
    description: "Pristine beach with golden sands",
    duration: "Full Day",
    rating: 4.9,
    distance: "45 km",
  },
  {
    title: "BUNDALA NATIONAL PARK",
    image: "/images/bundala.jpg",
    description: "Wildlife sanctuary and bird watching",
    duration: "Full Day",
    rating: 4.7,
    distance: "60 km",
  },
  {
    title: "NIMALAWA ARANYA SENASANAYA",
    image: "/images/nimalawa.jpg",
    description: "Meditation retreat center",
    duration: "Half Day",
    rating: 4.6,
    distance: "25 km",
  },
];

export default function ExperienceCenter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

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
    hidden: { opacity: 0, y: 30 },
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
    <motion.div 
      className="bg-gradient-to-br from-[#4A4630] to-[#3A3520] text-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
          Center of Great Experience
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover the beauty of Sri Lanka through our curated experiences
        </p>
      </motion.div>

      {/* Desktop Carousel */}
      <div className="hidden md:block relative max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url(${experiences[currentIndex].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl"
                >
                  <h3 className="text-3xl font-bold mb-2 text-yellow-400">
                    {experiences[currentIndex].title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-4">
                    {experiences[currentIndex].description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {experiences[currentIndex].duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {experiences[currentIndex].distance}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} fill="currentColor" className="text-yellow-400" />
                      {experiences[currentIndex].rating}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {experiences.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 w-8 h-3'
                    : 'bg-white/60 hover:bg-white/80 w-3 h-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative h-[300px] bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl group"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold mb-1 text-yellow-400">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                {item.description}
              </p>
              
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  {item.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  {item.distance}
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} fill="currentColor" className="text-yellow-400" />
                  {item.rating}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
