import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function Facilities() {
  const facilities = [
    {
      category: "Dining & Culinary",
      icon: "🍽️",
      items: [
        {
          name: "Main Restaurant",
          description: "Fine dining with authentic Sri Lankan and international cuisine",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
          features: ["Indoor & Outdoor Seating", "Live Cooking Stations", "Wine Cellar", "Private Dining"]
        },
        {
          name: "Poolside Bar & Grill",
          description: "Casual dining with refreshing cocktails and grilled specialties",
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop",
          features: ["Poolside Service", "Fresh Seafood", "Signature Cocktails", "Sunset Views"]
        },
        {
          name: "Coffee Lounge",
          description: "Premium coffee and light snacks in a relaxed atmosphere",
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=300&fit=crop",
          features: ["Artisan Coffee", "Pastries", "WiFi Zone", "Reading Corner"]
        }
      ]
    },
    {
      category: "Wellness & Recreation",
      icon: "🧘",
      items: [
        {
          name: "Spa & Wellness Center",
          description: "Traditional Ayurvedic treatments and modern spa therapies",
          image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=300&fit=crop",
          features: ["Ayurvedic Treatments", "Massage Therapy", "Steam Room", "Yoga Classes"]
        },
        {
          name: "Swimming Pool",
          description: "Infinity pool with stunning views of the surrounding landscape",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
          features: ["Infinity Design", "Pool Bar", "Sun Loungers", "Kids Section"]
        },
        {
          name: "Fitness Center",
          description: "State-of-the-art gym with modern equipment and personal training",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
          features: ["Modern Equipment", "Personal Training", "Group Classes", "Sauna"]
        }
      ]
    },
    {
      category: "Business & Events",
      icon: "💼",
      items: [
        {
          name: "Conference Center",
          description: "Fully equipped meeting rooms for business events and conferences",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
          features: ["Audio-Visual Equipment", "Catering Services", "WiFi", "Breakout Rooms"]
        },
        {
          name: "Wedding Venue",
          description: "Beautiful outdoor and indoor spaces for memorable celebrations",
          image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop",
          features: ["Garden Setting", "Reception Hall", "Bridal Suite", "Event Planning"]
        },
        {
          name: "Business Center",
          description: "Professional services and facilities for business travelers",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop",
          features: ["Printing Services", "Secretarial Support", "Internet Access", "Meeting Rooms"]
        }
      ]
    },
    {
      category: "Guest Services",
      icon: "🏨",
      items: [
        {
          name: "Concierge Service",
          description: "24/7 personalized assistance for all your needs and requests",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
          features: ["Tour Arrangements", "Transportation", "Restaurant Reservations", "Local Guidance"]
        },
        {
          name: "Laundry Service",
          description: "Professional laundry and dry cleaning services",
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
          features: ["Same Day Service", "Express Cleaning", "Ironing", "Alterations"]
        },
        {
          name: "Gift Shop",
          description: "Curated collection of local handicrafts and souvenirs",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
          features: ["Local Crafts", "Jewelry", "Books", "Souvenirs"]
        }
      ]
    }
  ];

  const amenities = [
    { icon: "🚗", name: "Free Parking", description: "Complimentary valet and self-parking" },
    { icon: "📶", name: "Free WiFi", description: "High-speed internet throughout the resort" },
    { icon: "🏊", name: "Pool Access", description: "24/7 access to our infinity pool" },
    { icon: "🍽️", name: "Room Service", description: "24-hour in-room dining service" },
    { icon: "🧳", name: "Luggage Storage", description: "Secure storage for your belongings" },
    { icon: "🚁", name: "Airport Transfer", description: "Complimentary airport pickup service" },
    { icon: "🐕", name: "Pet Friendly", description: "Pet-friendly rooms and facilities" },
    { icon: "♿", name: "Accessibility", description: "Wheelchair accessible rooms and facilities" }
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
              Resort Facilities
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Discover world-class amenities and services designed for your comfort and enjoyment
            </motion.p>
          </div>
        </section>

        {/* Quick Amenities Overview */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Essential Amenities</h2>
              <p className="text-gray-300">Everything you need for a perfect stay</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 text-center hover:border-[#D4AF37]/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-3">{amenity.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{amenity.name}</h3>
                  <p className="text-gray-400 text-sm">{amenity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Facilities */}
        {facilities.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-20 px-4 ${categoryIndex % 2 === 0 ? 'bg-gradient-to-b from-[#1a1a1a] to-black' : 'bg-gradient-to-b from-black to-[#1a1a1a]'}`}>
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl mr-3">{category.icon}</span>
                  <h2 className="text-4xl font-bold text-white">{category.category}</h2>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the finest in {category.category.toLowerCase()} at Kings Lodge Habarana
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: itemIndex * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{item.description}</p>
                      <div className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Additional Services */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We go above and beyond to ensure your stay is exceptional
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Cultural Tours",
                  description: "Guided tours to ancient sites and cultural landmarks"
                },
                {
                  icon: "🐘",
                  title: "Wildlife Safaris",
                  description: "Elephant safaris and wildlife spotting adventures"
                },
                {
                  icon: "🚁",
                  title: "Helicopter Tours",
                  description: "Aerial views of Sri Lanka's stunning landscapes"
                },
                {
                  icon: "🍃",
                  title: "Cooking Classes",
                  description: "Learn to prepare authentic Sri Lankan dishes"
                },
                {
                  icon: "🎨",
                  title: "Art Workshops",
                  description: "Traditional crafts and artistic experiences"
                },
                {
                  icon: "🌅",
                  title: "Sunrise Yoga",
                  description: "Morning yoga sessions with breathtaking views"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 text-center hover:border-[#D4AF37]/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </motion.div>
  );
}

export default Facilities;
