import React from 'react'
import pic1 from "../images/RugBig.jpeg"
import { Link } from 'react-router-dom'

const CustomProducts = () => {
  return (
    <div className='w-full bg-cyan-50 relative'>
        <h1 className='text-center text-gray-700 font-bold text-3xl uppercase font-overpass w-[95%] mx-auto sm:w-full'>We offer <span className='text-cyan-600'>custom products</span> for you!</h1>
        <div className='w-[100%] mx-auto mt-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full mb-10 md:mb-0'>
                <div className='w-full h-[250px] md:h-[600px]'>
                    <img src={pic1} className='h-full w-full object-cover' alt="" />
                </div>
                <div className='flex flex-col justify-center items-center bg-cyan-100 p-5 md:p-0'>
                    <h1 className='text-center text-gray-600 text-2xl font-semibold uppercase font-overpass'>Lorem Ipsum Customs</h1>
                    <p className='text-center w-[90%] md:w-[60%] font-karla mt-5 text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <p className='text-center w-[90%] md:w-[60%] mt-5 font-karla text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <Link to='/contact-us'>
                        <button className='px-4 font-semibold py-2 mt-5 border hover:bg-cyan-400/20 border-cyan-400 shadow text-gray-800 rounded font-karla'>BUY CUSTOM MATS</button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                <div className='flex flex-col justify-center items-center bg-cyan-100 p-5 md:p-0'>
                    <h1 className='text-center text-gray-600 text-2xl font-semibold uppercase font-overpass'>Lorem Ipsum Customs</h1>
                    <p className='text-center w-[90%] md:w-[60%] font-karla mt-5 text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <p className='text-center w-[90%] md:w-[60%] mt-5 font-karla text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus odit quae ratione debitis perspiciatis dolore consequatur a at!</p>
                    <Link to='/contact-us'>
                        <button className='px-4 font-semibold py-2 mt-5 border hover:bg-cyan-400/20 border-cyan-400 shadow text-gray-800 rounded font-karla'>BUY CUSTOM MATS</button>
                    </Link>
                </div>
                <div className='w-full h-[250px] md:h-[600px]'>
                    <img src={pic1} className='h-full w-full object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomProducts