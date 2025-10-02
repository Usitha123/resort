import Navbar from '../components/Navbar';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import Footer from '../components/Footer'
import ExperienceCenter from '../components/ExperienceCenter'
import {motion, AnimatePresence} from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/slideshows/slide4.jpg',
  '/images/slideshows/slide2.jpg',
  '/images/slideshows/slide3.jpg',
];

function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
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
      <div className="pt-16"> {/* Push content below fixed navbar */}
        {/* Hero Section with Slideshow Background */}
        <section className="relative h-screen overflow-hidden group">
          {/* Slideshow Background */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={current}
              src={images[current]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
              }}
              alt={`slide-${current}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Dots indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-[#D4AF37] w-8 h-3'
                    : 'bg-white/60 hover:bg-white/80 w-3 h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-20 flex items-center justify-center h-full text-center px-4 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
                  Kings Lodge
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-300 font-light">
                  Habarana
                </span>
              </h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience luxury in the heart of Sri Lanka's Cultural Triangle. 
                Where ancient heritage meets modern comfort.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#B8941F] transition-colors duration-300"
                >
                  Explore Our Resort
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
                >
                  Book Your Stay
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Kings Lodge?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover what makes our resort the perfect destination for your Sri Lankan adventure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏛️",
                  title: "Cultural Heritage",
                  description: "Located in the heart of Sri Lanka's Cultural Triangle, with easy access to ancient temples, ruins, and historical sites."
                },
                {
                  icon: "🌿",
                  title: "Natural Beauty",
                  description: "Surrounded by pristine wilderness, offering breathtaking views and opportunities for wildlife encounters."
                },
                {
                  icon: "⭐",
                  title: "Luxury Comfort",
                  description: "World-class amenities and personalized service ensuring an unforgettable stay in elegant surroundings."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 text-center hover:border-[#D4AF37]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ExperienceCenter/>
        
        {/* Testimonials Preview Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Guests Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover why travelers choose Kings Lodge for their Sri Lankan adventure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah & Michael",
                  location: "London, UK",
                  rating: 5,
                  review: "Absolutely magical! The resort exceeded all our expectations. The staff was incredibly welcoming and the location was perfect for exploring the Cultural Triangle.",
                  stay: "3 nights"
                },
                {
                  name: "Priya & Raj",
                  location: "Mumbai, India", 
                  rating: 5,
                  review: "A perfect blend of luxury and authenticity. The rooms were beautiful, the food was exceptional, and the cultural experiences were unforgettable.",
                  stay: "5 nights"
                },
                {
                  name: "Emma & James",
                  location: "Sydney, Australia",
                  rating: 5,
                  review: "Kings Lodge provided the perfect base for our Sri Lankan adventure. The sunset views from our room were breathtaking and the service was impeccable.",
                  stay: "4 nights"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#D4AF37] text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed italic">"{testimonial.review}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.location} • {testimonial.stay}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
              >
                Read More Reviews
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Your Sri Lankan Adventure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your stay at Kings Lodge Habarana and create memories that will last a lifetime. 
                Experience the perfect blend of luxury, culture, and natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#B8941F] transition-colors duration-300"
                >
                  Book Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
              <div className="mt-8 flex justify-center items-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>Free Cancellation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>Best Price Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Discover Our Prime Location
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Nestled in the heart of Sri Lanka's Cultural Triangle, Kings Lodge Habarana offers 
                unparalleled access to ancient wonders and natural beauty.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏛️</div>
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-1">Ancient Temples</h3>
                  <p className="text-gray-400 text-sm">15-30 minutes away</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🦁</div>
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-1">Wildlife Parks</h3>
                  <p className="text-gray-400 text-sm">45-60 minutes away</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏖️</div>
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-1">Pristine Beaches</h3>
                  <p className="text-gray-400 text-sm">2-3 hours away</p>
                </div>
              </div>
            </motion.div>

            <GoogleMapEmbed 
              showLocationInfo={true}
              showDirections={true}
              height="500px"
            />
          </div>
        </section>

        <Footer />
      </div>
    </motion.div>
  );
}

export default App
