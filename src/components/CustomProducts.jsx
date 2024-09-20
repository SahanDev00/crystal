import React from 'react'
import pic1 from "../images/RugBig.jpeg"

const CustomProducts = () => {
  return (
    <div className='w-full bg-cyan-50 relative'>
        <h1 className='text-center text-gray-700 font-bold text-3xl uppercase font-overpass'>We offer <span className='text-cyan-600'>custom products</span> for you!</h1>
        <div className='w-[100%] mx-auto mt-14'>
            <div className='grid grid-cols-2 w-full'>
                <div className='w-full h-[600px]'>
                    <img src={pic1} className='h-full w-full object-cover' alt="" />
                </div>
                <div className='flex flex-col justify-center items-center bg-cyan-100'>
                    <h1 className='text-center text-gray-600 text-2xl font-semibold uppercase font-overpass'>Lorem Ipsum Customs</h1>
                    <p className='text-center w-[60%] font-karla mt-5 text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <p className='text-center w-[60%] mt-5 font-karla text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <button className='px-4 font-semibold py-2 mt-5 border hover:bg-cyan-400/20 border-cyan-400 shadow text-gray-800 rounded font-karla'>BUY CUSTOM MATS</button>
                </div>
            </div>
            <div className='grid grid-cols-2 w-full'>
                <div className='flex flex-col justify-center items-center bg-cyan-100'>
                    <h1 className='text-center text-gray-600 text-2xl font-semibold uppercase font-overpass'>Lorem Ipsum Customs</h1>
                    <p className='text-center w-[60%] font-karla mt-5 text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <p className='text-center w-[60%] mt-5 font-karla text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <button className='px-4 font-semibold py-2 mt-5 border hover:bg-cyan-400/20 border-cyan-400 shadow text-gray-800 rounded font-karla'>BUY CUSTOM MATS</button>
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