import React from 'react'
import pic1 from "../images/RugBig.jpeg"

const CustomProducts = () => {
  return (
    <div className='w-full'>
        <h1 className='text-center text-gray-700 font-bold text-3xl uppercase'>We offer custom products for you!</h1>
        <div className='w-[70%] mx-auto mt-14'>
            <div className='grid grid-cols-2 w-full'>
                <div className='w-full h-[600px]'>
                    <img src={pic1} className='h-full w-full object-cover' alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-center text-gray-500 text-2xl font-semibold uppercase'>Lorem Ipsum Customs</h1>
                    <p className='text-center w-[60%] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <p className='text-center w-[60%] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <button className='px-4 font-semibold py-2 mt-5 border hover:bg-yellow-400/20 border-yellow-400 shadow text-gray-800 rounded'>BUY CUSTOM MATS</button>
                </div>
            </div>
            <div className='grid grid-cols-2 w-full'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-center text-gray-500 text-2xl font-semibold uppercase'>Lorem Ipsum Customs</h1>
                    <p className='text-center w-[60%] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <p className='text-center w-[60%] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <button className='px-4 font-semibold py-2 mt-5 border hover:bg-yellow-400/20 border-yellow-400 shadow text-gray-800 rounded'>BUY CUSTOM MATS</button>
                </div>
                <div className='w-full h-[600px]'>
                    <img src={pic1} className='h-full w-full object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomProducts