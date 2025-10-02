import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function About() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "General Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "With over 15 years in hospitality, Rajesh ensures every guest experiences the warmth of Sri Lankan hospitality."
    },
    {
      name: "Priya Fernando",
      position: "Guest Relations Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Priya's passion for creating memorable experiences makes her the heart of our guest services team."
    },
    {
      name: "David Silva",
      position: "Head Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "David brings international culinary expertise while celebrating the rich flavors of Sri Lankan cuisine."
    }
  ];

  const values = [
    {
      icon: "🏛️",
      title: "Cultural Heritage",
      description: "We preserve and celebrate Sri Lanka's rich cultural heritage through authentic experiences and local partnerships."
    },
    {
      icon: "🌿",
      title: "Sustainability",
      description: "Committed to eco-friendly practices, we protect the natural beauty that surrounds our resort."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "We support local communities and provide meaningful employment opportunities in the region."
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "Dedicated to providing exceptional service and creating unforgettable memories for our guests."
    }
  ];

  return (
    <motion.div
      className="bg-black min-h-screen overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-black">
          <div className="text-center z-10 px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              About Kings Lodge
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Where luxury meets tradition in the heart of Sri Lanka's Cultural Triangle
            </motion.p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Founded in 2010, Kings Lodge Habarana was born from a vision to create a luxury retreat 
                    that honors Sri Lanka's rich cultural heritage while providing world-class hospitality. 
                    Nestled in the heart of the Cultural Triangle, our resort serves as a gateway to ancient 
                    wonders and natural beauty.
                  </p>
                  <p>
                    What started as a small family-run establishment has grown into a premier destination 
                    that welcomes travelers from around the world. Our commitment to authentic Sri Lankan 
                    hospitality, combined with modern luxury amenities, creates an unforgettable experience 
                    for every guest.
                  </p>
                  <p>
                    Today, Kings Lodge stands as a testament to the perfect blend of tradition and innovation, 
                    offering a sanctuary where guests can immerse themselves in the island's cultural treasures 
                    while enjoying the comfort and elegance they deserve.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-[#D4AF37]/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#D4AF37] mb-2">14+</div>
                      <div className="text-gray-300 text-sm">Years of Excellence</div>
                    </div>
                    <div className="bg-[#D4AF37]/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#D4AF37] mb-2">50+</div>
                      <div className="text-gray-300 text-sm">Luxury Rooms</div>
                    </div>
                    <div className="bg-[#D4AF37]/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#D4AF37] mb-2">10K+</div>
                      <div className="text-gray-300 text-sm">Happy Guests</div>
                    </div>
                    <div className="bg-[#D4AF37]/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#D4AF37] mb-2">4.8</div>
                      <div className="text-gray-300 text-sm">Average Rating</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do at Kings Lodge Habarana
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The passionate individuals who make your stay at Kings Lodge unforgettable
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-[#D4AF37] mb-3">{member.position}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
              <blockquote className="text-2xl text-gray-300 leading-relaxed italic">
                "To provide an authentic Sri Lankan luxury experience that celebrates our rich cultural 
                heritage while creating lasting memories for our guests through exceptional service, 
                sustainable practices, and genuine hospitality."
              </blockquote>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-[#D4AF37] rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </motion.div>
  );
}

export default About;
