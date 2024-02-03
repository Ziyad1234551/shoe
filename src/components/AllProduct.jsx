import React from 'react'

export const AllProduct = () => {
    const products = [
        {
            img:"sepatu/product2.png",
            bg:"green",
            name:"Nike Green"

        },
        {
            img:"sepatu/product3.png",
            bg:"crimson",
            name:"Nike Red"
            
        },
        {
            img:"sepatu/product4.png",
            bg:"orange",
            name:"Nike Orange"
            
        },
        {
            img:"sepatu/product5.png",
            bg:"#436850",
            name:"Nike Army"
            
        },
        {
            img:"sepatu/product6.png",
            bg:"#6895D2",
            name:"Nike Blue"
            
            
        },
        {
            img:"sepatu/product10.png",
            bg:"#6962AD",
            name:"Nike Purple 2.0"
        },
        {
            img:"sepatu/product7.png",
            bg:"#637A9F",
            name:"Nike Blue Donker"
        },
        {
            img:"sepatu/product8.png",
            bg:"#0C2D57",
            name:"Nike 2323"
            
        },
        {
            img:"sepatu/product9.png",
            bg:"#EAD196",
            name:"Nike 2002"
            
        },
    ]
  return (
    <div data-aos="zoom-in" name="product" className='lg:w-[1328px] my-[100px] mx-auto'>
        <h1 className='text-blue-700 font-bold  my-4 lg:my-10 text-center md:text-4xl md:my-5 text-3xl lg:text-5xl'>All Products</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 px-10  gap-10 justify-center items-center">
            {products.map((product)=>{
                return(
                    <div style={{background:product.bg}} className='mx-auto rounded-xl lg:w-[400px] md:w-[200px] md:h-[330px] shadow-xl py-4 px-10'>
                        <img src={product.img} className='transition-all cursor-pointer w-full h-[160px]  hover:rotate-12' alt="" />
                        <h1 className='my-4 text-white text-center font-bold text-2xl'  >{product.name}</h1>

                        <button className='w-full py-4 text-white shadow-xl hover:scale-105 transition-all hover:shadow-2xl' style={{background:product.bg}}>Buy</button>
                    </div>
                )
            })}

        </div>
    </div>
  )
}
