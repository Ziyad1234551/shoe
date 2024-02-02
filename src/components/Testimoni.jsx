import React from 'react';
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

// import required modules
export const Testimoni = () => {
  const testimonis = [
    {
      image:"1.png",
      text:"Amazing selection! Found the perfect pair at this shoe store. Trendy styles, great prices, and super comfy. Highly recommend!",
      name:"Vannesa"


    },
    {
      image:"2.png",
      text:"Best shoe shopping experience ever! The staff was friendly, the store was organized, and I left with stylish shoes that fit like a dream. A+!",
      name:"John Smith"

    },
    {
      image:"3.png",
      text:"Incredible customer service! Needed a specific size, and the staff went above and beyond to help me find it. This shoe store is now my go-to for quality and service.",
      name:"Sarah Willson"








    },
  ]
  return (
    <div data-aos="fade-bottom" className='lg:w-[1328px] px- my-[100px] mx-auto overflow-hidden '>
        <h1 className='capitalize font-bold lg:max-w-[600px] lg:mx-auto text-blue-700 text-center text-2xl lg:text-5xl max-w-[300px] mx-auto'>What Our Customer  Say About Us</h1>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testimonis.map((testi)=>{
          return(

            <SwiperSlide>
              <div className='w-full lg:h-[60vh] flex lg:justify-center lg:items-center'>
                <div className='lg:w-[600px] md:my-4 md:w-[500px] w-[300px] mx-auto bg-[#0B60B0] text-white rounded-lg px-10 shadow-2xl py-6'>
                  <img src={testi.image} className='w-[90px] h-[90px] object-cover rounded-full border-[2px] border-white mx-auto' alt="" />
                  <p className='text-center my-4 leading-9'>{testi.text}</p>
                  <h1 className='my-4 text-center text-xl font-bold'>{testi.name}</h1>
                  <div className="flex gap-3 text-yellow-400 justify-center">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                  </div>

                </div>

              </div>
            </SwiperSlide>
          )
        })}
       
      </Swiper>
    </div>
  )
}
