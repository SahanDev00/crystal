import React from 'react'
import rugPic from '../images/rug3.jpeg'
import { Link } from 'react-router-dom'

const WhyMats = () => {
  return (
    <div className='w-full pt-10 md:pt-32 pb-10 md:pb-20 relative bg-cyan-50'>
        <div className='w-full md:grid grid-cols-2'>
            <div className='w-full md:block hidden'>
                <img src={rugPic} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='w-full h-full bg-cyan-100 flex flex-col justify-center items-center py-6'>
                <h1 className='text-4xl font-bold text-black/80 text-center font-overpass'>WHY K-Mats?</h1>
                <p className='w-[90%] mt-5 text-center text-sm lg:text-lg font-overpass text-black/80'>Kmat, one of the oldest manufacturers and exporters of rubber mats in Kerala, offers premium mats crafted from high-grade synthetic and Indian rubber. Our journey began in 1998 with the establishment of our first factory, which initially focused on producing rubber crumb powder. By 2010, we expanded our operations with a second factory dedicated to rubber mat production, and in 2017, we opened a third facility. Most recently, in 2022, we launched our fourth production site. Today, our operations span over 60,000 square feet across three separate production locations, allowing us to consistently deliver high-quality rubber mats globally.</p>
                <Link to='/store'>
                  <button className='px-3 py-2 lg:px-5 lg:py-3 mt-5 font-semibold rounded-full bg-gradient-to-tl font-karla hover:bg-gradient-to-tr from-cyan-300 to-cyan-400 transition duration-300'>Explore Shop</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default WhyMats