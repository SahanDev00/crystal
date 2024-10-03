import React from 'react'
import { Link } from 'react-router-dom'

const Questions = () => {
  return (
    <div className='w-full flex justify-center items-center mt-20 mb-10 bg-cyan-400/20 py-8'>
        <div className='w-[80%] flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl md:text-3xl font-semibold text-black/90 font-overpass'>Have Any Questions Related To This Product?</h1>
            <p className='text-[15px] sm:text-lg md:text-xl text-center mt-1 font-semibold text-black/80 font-overpass'>Reach Out to Us by Filling This Form.</p>
            <Link to='/contact-us'>
              <button className='px-4 py-2 mt-3 bg-cyan-600/90 hover:bg-cyan-600 duration-300 font-overpass rounded-full text-white'>Contact Us</button>
            </Link>
        </div>
    </div>
  )
}

export default Questions