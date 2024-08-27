import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineCompost } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";

const Features = () => {
  return (
    <div className='w-full bg-yellow-400/30 mt-20'>
        <div className='w-[90%] space-y-5 py-10 mx-auto flex flex-wrap items-center justify-center'>
            <div className='w-[400px] h-full flex items-center gap-4 justify-center group'>
                <FaShippingFast size={55} className='group-hover:rotate-12 duration-300'/>
                <h1 className='text-xl font-semibold text-gray-700'>Island Wide Delivery</h1>
            </div>
            <div className='w-[400px] h-full flex items-center gap-4 justify-center group'>
                <LuBadgeCheck size={55} className='group-hover:rotate-12 duration-300'/>
                <h1 className='text-xl font-semibold text-gray-700'>Quality Guaranted</h1>
            </div>
            <div className='w-[400px] h-full flex items-center gap-4 justify-center group'>
                <MdOutlineCompost size={55} className='group-hover:rotate-12 duration-300'/>
                <h1 className='text-xl font-semibold text-gray-700'>Eco Friendly</h1>
            </div>
            <div className='w-[400px] h-full flex items-center gap-4 justify-center group'>
                <LuShieldCheck size={55} className='group-hover:rotate-12 duration-300'/>
                <h1 className='text-xl font-semibold text-gray-700'>Secure Guaranted</h1>
            </div>
        </div>
    </div>
  )
}

export default Features