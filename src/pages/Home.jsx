import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import Accommodation from '../components/Accommodation';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import Footer from '../components/Footer'
import ExperienceCenter from '../components/ExperienceCenter'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* Push content below fixed navbar */}
        <Slideshow />
        <Accommodation />
        <ExperienceCenter/>
        <GoogleMapEmbed />
        <Footer />
      </div>
    </>
  );
}

export default App
