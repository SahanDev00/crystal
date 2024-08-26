import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 bg-gradient-to-b z-50 from-black/60'>
        <div className='w-[80%] h-[100px] flex items-center justify-between mx-auto'>
            <h1 className='text-4xl text-green-500 hover:text-green-600 duration-300 font-bold cursor-pointer'>HG</h1>
            <ul className='flex gap-10'>
                <li className='font-semibold text-white/90 text-xl hover:text-green-500 duration-300 cursor-pointer'>Home</li>
                <li className='font-semibold text-white/90 text-xl hover:text-green-500 duration-300 cursor-pointer'>Store</li>
                <li className='font-semibold text-white/90 text-xl hover:text-green-500 duration-300 cursor-pointer'>About Us</li>
                <li className='font-semibold text-white/90 text-xl hover:text-green-500 duration-300 cursor-pointer'>Contact Us</li>
            </ul>
            <div className='flex gap-5'>
                <FaSearch className='hover:text-green-500 cursor-pointer duration-300 text-white/90' size={20}/>
                <FaUser className='hover:text-green-500 cursor-pointer duration-300 text-white/90' size={20}/>
                <FaCartShopping className='hover:text-green-500 cursor-pointer duration-300 text-white/90' size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar