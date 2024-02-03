import React from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
export const Navbar = ({nav,setNav}) => {
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
<ScrollLink to="about">About</ScrollLink>
<ScrollLink to="product">Product</ScrollLink>
<NavLink>Login</NavLink>

</div>
<div onClick={()=>setNav(!nav)} className='flex lg:hidden md:hidden text-4xl mr-6 cursor-pointer'>
<RiMenu3Line/>
</div>


    </div>
  )
}
