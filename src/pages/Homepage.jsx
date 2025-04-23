import CardSection from "../component/CardSection";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import Navbar2 from "../component/Navbar2";

function Homepage() {
  return ( 
    <div>
      <Navbar2 />
      <HeroSection />
      <CardSection />
      <Footer />
    </div>
  )
}


export default Homepage;