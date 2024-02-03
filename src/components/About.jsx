import React from 'react'

export const About = () => {
  return (
    <div data-aos="fade-bottom" name="about" className='max-w-[1328px] my-[60px] mx-auto lg:flex-row md:flex-row flex-col flex justify-between'>
    <div>
        <img src="sepatu/nike-adapt-bb-smart.png" className='lg:w-[500px] w-[300px] transition-all hover:-rotate-12 cursor-pointer' alt="" />
    </div>
    <div className='lg:my-0 my-4 lg:px-0 px-1'>
        <h1 className='lg:text-[50px] text-3xl text-blue-700 font-bold'>About Us</h1>
        <p className='lg:w-[600px] w-[300px] leading-9 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laudantium nobis officiis iste ab nemo quasi, quia reprehenderit provident voluptates saepe sapiente veritatis recusandae quaerat. Eius praesentium eveniet veniam veritatis, laboriosam quidem voluptatibus.</p>

        <button className='bg-gradient-to-b from-blue-600 to-blue-900 w-[160px] font-bold py-3 rounded-md text-white'>
             Read More</button>
    </div>

</div>  )
}
