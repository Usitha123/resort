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
      className="bg-black min-h-screen"
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
        <GoogleMapEmbed />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App
