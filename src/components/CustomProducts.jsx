import React from 'react'
import pic1 from "../images/RugBig.jpeg"
import { Link } from 'react-router-dom'

const CustomProducts = () => {
  return (
    <div className='w-full bg-cyan-50 relative'>
        <h1 className='text-center text-gray-700 font-bold text-3xl uppercase font-overpass w-[95%] mx-auto sm:w-full'>Our Premium Products Are <span className='text-cyan-600'>Customizable.</span></h1>
        <div className='w-[100%] mx-auto mt-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full mb-10 md:mb-0'>
                <div className='w-full h-[250px] md:h-[600px] 2lg:h-[400px] 3lg:h-[600px]'>
                    <img src={pic1} className='h-full w-full object-cover' alt="" />
                </div>
                <div className='flex flex-col justify-center items-center bg-cyan-100 p-5 md:p-0'>
                    <h1 className='text-center text-gray-600 text-2xl font-semibold uppercase font-overpass'>Livestock Mats</h1>
                    <p className='text-center w-[90%] md:w-[60%] font-karla mt-5 text-black/70'>Whether you are raising dairy cows, managing a busy stable, or operating a mixed-animal farm, we, at K-MATS, deliver livestock matting solutions that meet real-world demands. Our cow mats, horse mats, and barn mats for animals are more than just flooring. They are a long-term investment in animal welfare, farm hygiene, and daily efficiency as they offer  enhanced joint protection, reducing strain on animals while ensuring a non-slip surface for improved safety. Made from non-porous rubber, these mats promote better hygiene by preventing moisture buildup and simplifying maintenance. They also offer insulation against cold and damp surfaces, keeping livestock comfortable year-round. Built to last, our mats reduce bedding costs and serve as a cost-effective investment for farms, enhancing both efficiency and animal welfare.</p>
                    <p className='text-center w-[90%] md:w-[60%] mt-5 font-karla text-black/70'>Designed for performance in both Australian and American agricultural conditions, K-MATS is the name farmers trust when it comes to rubber livestock flooring that works as hard as they do.</p>
                    <Link to='/contact-us'>
                        <button className='px-4 font-semibold py-2 mt-5 border hover:bg-cyan-400/20 border-cyan-400 shadow text-gray-800 rounded font-karla'>BUY CUSTOM MATS</button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                <div className='flex flex-col justify-center items-center bg-cyan-100 p-5 md:p-0'>
                    <h1 className='text-center text-gray-600 text-2xl font-semibold uppercase font-overpass'>Horse Mats</h1>
                    <p className='text-center w-[90%] md:w-[60%] font-karla mt-5 text-black/70'>​K-MATS Horse Mats are expertly designed to enhance equine comfort and safety in stables, wash bays, grooming areas, and horse trailers. These premium rubber horse stall mats provide a cushioned, non-slip surface that reduces joint stress and minimizes injury risks. By insulating against cold, hard flooring, they promote better health and reduce fatigue. Additionally, their non-porous design resists moisture and odors, ensuring a hygienic environment that is easy to clean. Trusted by equine professionals across Australia and the USA, K-MATS Horse Mats are a durable, cost-effective solution for maintaining optimal horse welfare.​</p>
                    
                    <Link to='/contact-us'>
                        <button className='px-4 font-semibold py-2 mt-5 border hover:bg-cyan-400/20 border-cyan-400 shadow text-gray-800 rounded font-karla'>BUY CUSTOM MATS</button>
                    </Link>
                </div>
                <div className='w-full h-[250px] md:h-[600px] 2lg:h-[400px] 3lg:h-[600px]'>
                    <img src={pic1} className='h-full w-full object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomProducts