import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Wifi, Car, Coffee } from 'lucide-react';

const rooms = [
  {
    name: 'DELUXE QUEEN ROOM',
    image: '/images/queen.jpg',
    features: ['Free WiFi', 'Air Conditioning', 'Private Bathroom'],
    rating: 4.8,
  },
  {
    name: 'DELUXE KING ROOM',
    image: '/images/king.jpg',
    features: ['Free WiFi', 'Air Conditioning', 'Private Balcony'],
    rating: 4.9,
  },
  {
    name: 'TWO BEDROOM BUNGALOW',
    image: '/images/bungalow.jpg',
    features: ['Free WiFi', 'Kitchenette', 'Garden View'],
    rating: 4.7,
  },
];

const Accommodation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
      className="bg-gradient-to-br from-black to-[#1a1a1a] py-20 px-4 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl text-hero mb-4 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] bg-clip-text text-transparent">
          Luxury Accommodation
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Experience comfort and elegance in our beautifully designed rooms and suites
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-2xl shadow-2xl bg-[#1a1a1a]/80 backdrop-blur-sm border border-gray-800"
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={room.image}
                alt={room.name}
                className="w-full h-80 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm text-subheading"
              >
                <Star size={16} fill="currentColor" />
                {room.rating}
              </motion.div>

            </div>

            <div className="p-6">
              <h3 className="text-xl text-subheading mb-3 text-[#D4AF37]">{room.name}</h3>
              
              <div className="space-y-2 mb-4">
                {room.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    {feature}
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-black text-subheading py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                Book Now
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-lg text-[#D4AF37] hover:text-[#D4AF37]/80 font-medium flex items-center gap-2 mx-auto transition-colors duration-300"
        >
          View All Rooms
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Accommodation;
