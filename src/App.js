import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './App.css';
import { About } from './components/About';
import { AllProduct } from './components/AllProduct';
import { Banner } from './components/Banner';
import { Best } from './components/Best';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Testimoni } from './components/Testimoni';
function App() {
  useEffect(()=>{
    AOS.init({
      delay:400,
      duration:1200,
      easing:"ease-in-out",
      offset:500
    });
  })
  return (
 <div>
  <Navbar/>
  <Hero/>
  <About/>
  <Best/>
  <Banner/>
  <AllProduct/>
  <Testimoni/>
  <Footer/>
 </div>
  );
}

export default App;
