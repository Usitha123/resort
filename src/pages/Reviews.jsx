import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function Reviews() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      date: "December 2024",
      stay: "3 nights",
      room: "Deluxe Suite",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      review: "Absolutely magical experience! The resort exceeded all our expectations. The staff was incredibly welcoming, the food was exceptional, and the location was perfect for exploring the Cultural Triangle. The sunset views from our room were breathtaking.",
      highlights: ["Exceptional Service", "Beautiful Location", "Amazing Food"],
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      date: "November 2024",
      stay: "5 nights",
      room: "Presidential Villa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      review: "Kings Lodge Habarana is a true gem in Sri Lanka. The attention to detail in every aspect of our stay was remarkable. The spa treatments were world-class, and the cultural tours arranged by the concierge were unforgettable.",
      highlights: ["Luxury Amenities", "Cultural Tours", "Spa Services"],
      verified: true
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      date: "October 2024",
      stay: "4 nights",
      room: "Garden Villa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      review: "Perfect blend of luxury and authenticity. The resort beautifully incorporates Sri Lankan culture while providing modern comforts. The infinity pool with views of the surrounding nature was our favorite spot.",
      highlights: ["Authentic Experience", "Stunning Views", "Cultural Integration"],
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Melbourne, Australia",
      rating: 4,
      date: "September 2024",
      stay: "2 nights",
      room: "Standard Room",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      review: "Great resort with excellent facilities. The staff was very helpful and the location is perfect for visiting Sigiriya and other attractions. The only minor issue was the WiFi speed in some areas, but overall a wonderful stay.",
      highlights: ["Great Location", "Helpful Staff", "Good Facilities"],
      verified: true
    },
    {
      id: 5,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      date: "August 2024",
      stay: "6 nights",
      room: "Family Suite",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      review: "Exceptional family vacation! The kids loved the pool and the cultural activities. The resort staff went above and beyond to make our family feel special. The traditional Sri Lankan breakfast was a highlight.",
      highlights: ["Family Friendly", "Cultural Activities", "Delicious Food"],
      verified: true
    },
    {
      id: 6,
      name: "James Wilson",
      location: "New York, USA",
      rating: 5,
      date: "July 2024",
      stay: "3 nights",
      room: "Honeymoon Suite",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      review: "Romantic and luxurious! Perfect for our honeymoon. The private dining experience under the stars was magical. The resort's attention to creating special moments made our stay unforgettable.",
      highlights: ["Romantic Setting", "Private Dining", "Special Moments"],
      verified: true
    }
  ];

  const ratingStats = {
    overall: 4.8,
    total: 1247,
    breakdown: [
      { stars: 5, count: 892, percentage: 72 },
      { stars: 4, count: 245, percentage: 20 },
      { stars: 3, count: 78, percentage: 6 },
      { stars: 2, count: 22, percentage: 2 },
      { stars: 1, count: 10, percentage: 1 }
    ]
  };

  const categories = [
    { key: 'all', label: 'All Reviews', count: reviews.length },
    { key: 'family', label: 'Family', count: 2 },
    { key: 'couples', label: 'Couples', count: 2 },
    { key: 'business', label: 'Business', count: 1 },
    { key: 'solo', label: 'Solo Travel', count: 1 }
  ];

  const filteredReviews = selectedFilter === 'all' 
    ? reviews 
    : reviews.filter(review => {
        // Simple filtering logic - in a real app, this would be more sophisticated
        switch(selectedFilter) {
          case 'family': return review.highlights.includes('Family Friendly');
          case 'couples': return review.highlights.includes('Romantic Setting');
          case 'business': return review.highlights.includes('Great Location');
          case 'solo': return review.highlights.includes('Authentic Experience');
          default: return true;
        }
      });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-[#D4AF37]' : 'text-gray-600'}>
        ★
      </span>
    ));
  };

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
        <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-black">
          <div className="text-center z-10 px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Guest Reviews
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Discover what our guests say about their unforgettable experiences at Kings Lodge Habarana
            </motion.p>
          </div>
        </section>

        {/* Rating Overview */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="text-6xl font-bold text-[#D4AF37] mb-2">{ratingStats.overall}</div>
                <div className="text-2xl text-white mb-2">{renderStars(5)}</div>
                <div className="text-gray-300 mb-4">Based on {ratingStats.total.toLocaleString()} reviews</div>
                <div className="text-lg text-gray-400">Excellent • Highly Recommended</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {ratingStats.breakdown.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-white w-8">{item.stars}★</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-[#D4AF37] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-300 w-12 text-sm">{item.count}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Review Filters */}
        <section className="py-8 px-4 bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedFilter(category.key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedFilter === category.key
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-white font-semibold">{review.name}</h3>
                          {review.verified && (
                            <span className="text-[#D4AF37] text-sm">✓ Verified</span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{review.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#D4AF37] text-lg">{renderStars(review.rating)}</div>
                      <p className="text-gray-400 text-sm">{review.date}</p>
                    </div>
                  </div>

                  {/* Stay Details */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <span>{review.stay}</span>
                    <span>•</span>
                    <span>{review.room}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 leading-relaxed mb-4">{review.review}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {review.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Review Platforms */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Find Us On</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Read more reviews and book your stay on these trusted platforms
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "TripAdvisor",
                  rating: 4.8,
                  reviews: 892,
                  icon: "🌍",
                  color: "from-green-500 to-green-600"
                },
                {
                  name: "Booking.com",
                  rating: 4.7,
                  reviews: 456,
                  icon: "📅",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  name: "Google Reviews",
                  rating: 4.9,
                  reviews: 234,
                  icon: "🔍",
                  color: "from-red-500 to-red-600"
                }
              ].map((platform, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 text-center hover:border-[#D4AF37]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">{platform.rating}</div>
                  <div className="text-white mb-2">{renderStars(5)}</div>
                  <p className="text-gray-400">{platform.reviews} reviews</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience It Yourself?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied guests who have made Kings Lodge Habarana their home away from home
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-lg hover:bg-[#B8941F] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Stay
                </motion.button>
                <motion.button
                  className="border border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-lg hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Packages
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </motion.div>
  );
}

export default Reviews;
