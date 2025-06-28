import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import Accommodation from '../components/Accommodation';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import Footer from '../components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* Push content below fixed navbar */}
        <Slideshow />
        <Accommodation />
        <GoogleMapEmbed />
        <Footer />
      </div>
    </>
  );
}

export default App
