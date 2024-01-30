import React from 'react'

export const Hero = () => {
  return (
    <div data-aos="fade-left" className='max-w-[1328px] px-2 my-[60px] mx-auto flex lg:flex-row md:flex-row flex-col justify-between'>
        <div>
            <h1 className='lg:text-[50px] text-3xl leading-9 text-blue-700 font-bold'>We Sell Shoes From <span className="my-4 block" /> Various Country</h1>
            <p className='lg:w-[600px] w-[300px]  leading-9 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laudantium nobis officiis iste ab nemo quasi, quia reprehenderit provident voluptates saepe sapiente veritatis recusandae quaerat. Eius praesentium eveniet veniam veritatis, laboriosam quidem voluptatibus.</p>

            <button className='bg-gradient-to-b from-blue-600 to-blue-900 w-[160px] font-bold py-3 rounded-md text-white'> Buy Now</button>
        </div>
        <div>
            <img src="sepatu/hero.png" className='lg:w-[500px] w-[300px] my-4 lg:my-0 transition-all hover:-rotate-12 cursor-pointer' alt="" />
        </div>

    </div>
  )
}
