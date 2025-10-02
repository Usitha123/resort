import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import Accommodation from '../components/Accommodation';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import Footer from '../components/Footer'
import ExperienceCenter from '../components/ExperienceCenter'
import {motion} from 'framer-motion';

function App() {
 
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
        <Slideshow />
        <Accommodation />
        <ExperienceCenter/>
        
        {/* Location & Map Section */}
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
                Discover Our Location
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nestled in the heart of Sri Lanka's Cultural Triangle, Kings Lodge Habarana offers 
                unparalleled access to ancient wonders and natural beauty.
              </p>
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
