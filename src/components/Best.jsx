import React from 'react'

export const Best = () => {
    const products = [
        {
            name:"Nike Yellow",
            img:"sepatu/product1.png",
            bg:"#EC8F5E"
        },
        {
            name:"Nike Green",
            img:"sepatu/product2.png",
            bg:"green"
        },
        {
            name:"Nike Red",
            img:"sepatu/product3.png",
            bg:"red"
        },
        
    ]
  return (
    <div data-aos="fade-up" className='lg:w-[1328px] px-8 mx-auto my-[60px]'>
        <h1 className='lg:text-5xl text-3xl font-bold text-blue-700 text-center'>Best Product</h1>
        <div className="flex lg:flex-row md:flex-row flex-col my-10 justify-center lg:items-center gap-6">
            {products.map((product)=>{
                return(
                    <div className='lg:w-[400px] w-[300px] h-[300px] lg:h-[400px] py-4 flex flex-col justify-center items-center rounded-md shadow-xl px-8' style={{background:product.bg}}>
                        <img src={product.img} className='w-full h-[100px] lg:h-[200px] transition-all hover:scale-105 cursor-pointer' alt="" />
                       <h1 className='text-white text-2xl text-center my-6 font-bold'>{product.name}</h1>

                       <button className='font-bold hover:scale-110 w-full py-4 shadow-lg text-white transition-all hover:shadow-xl'>Buy </button>
                    </div>
                )
            })}
        </div>

    </div>
  )
}
