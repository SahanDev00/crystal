import React from 'react'
import pic from '../../images/rug1.jpeg'

const Product = () => {
  return (
    <div className='w-full my-10'>
        <h1 className='text-3xl text-center font-bold my-5 text-gray-600 font-roboto'>Clicked Product</h1>
        <div className='w-[70%] grid grid-cols-2 mx-auto'>
            <div className='w-full mt-5'>
                <img src={pic} className='w-full h-[500px] object-cover' alt="" />
                <div className='flex justify-between mt-2'>
                    <img src={pic} className='w-[160px] h-[160px] ' alt="" />
                    <img src={pic} className='w-[160px] h-[160px] ' alt="" />
                    <img src={pic} className='w-[160px] h-[160px] ' alt="" />
                    <img src={pic} className='w-[160px] h-[160px] ' alt="" />
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-black/70 my-5 font-poppins'>Clicked Product Name</h1>
                <p className='text-lg text-center w-[80%] text-black/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nulla veritatis facere aut repellendus minus quod excepturi vitae, sed numquam reiciendis? Labore nostrum, quo praesentium maxime cumque natus odio excepturi sit dignissimos molestiae alias, repudiandae vel et repellat at dolores ipsam vitae aspernatur. Dicta consectetur impedit optio officia voluptatem quidem!</p>
                <p className='text-lg font-semibold my-5 font-poppins'>Rs.500.00</p>
                <button className='px-4 py-2 rounded-full font-poppins bg-cyan-600/70 font-semibold text-white hover:bg-cyan-600/80'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product