import React, { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [nav,setNav] = useState(false)
  return (
    <div data-aos="fade-up" className='w-full h-[100px] px-4 lg:px-[100px] shadow-xl flex justify-between items-center'>

<div>
<h1 className='lg:text-5xl text-3xl font-bold'>Foot
    <span className='text-red-600'>
        Wear
        </span> 
        
        
        </h1>
</div>
<div className="lg:flex md:flex hidden text-xl font-semibold gap-4 items-center">
<NavLink>Home</NavLink>
<NavLink>About</NavLink>
<NavLink>Contact</NavLink>
<NavLink>Login</NavLink>

</div>
<div onClick={()=>setNav(!nav)} className='flex lg:hidden md:hidden text-4xl mr-6 cursor-pointer'>
<RiMenu3Line/>
</div>
{nav ?
  <div className="lg:hidden transition-all md:hidden absolute overflow-hidden top-0 left-0 h-[100vh] w-[250px] bg-blue-600 text-white flex flex-col gap-6 t font-semibold px-4 text-2xl">
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
  )
}