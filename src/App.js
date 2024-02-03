import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
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
  const [nav,setNav] = useState(false)

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
  <Navbar nav={nav} setNav={setNav}/>
  <Hero/>
  <About/>
  <Best/>
  <Banner/>
  <AllProduct/>
  <Testimoni/>
  <Footer/>
  {nav ?
  <div className="lg:hidden z-10 transition-all md:hidden absolute overflow-hidden top-0 left-0 h-[100vh] w-[250px] bg-blue-600 text-white flex flex-col gap-6 t font-semibold px-4 text-2xl">
<NavLink>Home</NavLink>
<NavLink>About</NavLink>
<NavLink>Contact</NavLink>
<NavLink>Login</NavLink>

</div>

:
<div className="lg:hidden transition-all md:hidden absolute top-0 left-0 h-[100vh] w-[0px] overflow-hidden bg-blue-600 text-white flex flex-col gap-6 t font-semibold px-0 text-2xl">
<NavLink>Home</NavLink>
<NavLink>About</NavLink>
<NavLink>Contact</NavLink>
<NavLink>Login</NavLink>

</div>
}
 </div>
  );
}

export default App;
