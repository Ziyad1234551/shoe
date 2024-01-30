import React from 'react'

export const Banner = () => {
  return (
    <div data-aos="fade-right" className='lg:max-w-[1328px] px-10 mx-auto my-[60px] flex justify-center items-center h-[50vh]'>
        <div className="w-[800px] px-10 mx-auto bg-white shadow-md h-[300px] border border-gray-300 py-4">
            <h1 className='text-center text-3xl lg:text-5xl font-bold'>Subscribe To Know <span className='text-red-600'>More</span></h1>
            <div className='flex lg:flex-row flex-col my-[60px] gap-4 items-center'>
                <input type="text" className='w-full focus:border-blue-800 px-4 py-4 rounded-md outline-none border border-black' placeholder='Enter Your Email'  />
                <button className='lg:px-6 py-4  w-full lg:w-auto rounded-md bg-blue-600 text-white'>Subscribe</button>

            </div>
        </div>

    </div>
  )
}
