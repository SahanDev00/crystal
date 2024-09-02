import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Categories = () => {
  return (
    <div id='categories' className='w-full border bg-cyan-800'>
      <div className='w-[80%] py-2 mx-auto mt-20 flex flex-wrap justify-center gap-10 items-center'>
        <div className='relative group'>
          <ScrollLink to="category1" smooth={true} duration={500} offset={-100}>
            <h1 className='font-semibold uppercase cursor-pointer text-white font-poppins'>
              Category 1
            </h1>
          </ScrollLink>
          <div className='w-[300px] z-20 py-5 translate-y-4 group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100 bg-white absolute -left-28 border invisible group-hover:visible'>
            <ul className='w-full h-full space-y-3 flex flex-col justify-center ml-5'>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 1</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 2</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 3</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 4</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 5</Link>
            </ul>
          </div>
        </div>
        <div className='relative group'>
          <ScrollLink to="category2" smooth={true} duration={500} offset={-100}>
            <h1 className='font-semibold uppercase cursor-pointer text-white font-poppins'>
              Category 2
            </h1>
          </ScrollLink>
          <div className='w-[300px] z-20 py-5 translate-y-4 group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100 bg-white absolute -left-28 border invisible group-hover:visible'>
            <ul className='w-full h-full space-y-3 flex flex-col justify-center ml-5'>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 1</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 2</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 3</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 4</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 5</Link>
            </ul>
          </div>
        </div>
        <div className='relative group'>
          <ScrollLink to="category3" smooth={true} duration={500} offset={-100}>
            <h1 className='font-semibold uppercase cursor-pointer text-white font-poppins'>
              Category 3
            </h1>
          </ScrollLink>
          <div className='w-[300px] z-20 py-5 translate-y-4 group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100 bg-white absolute -left-28 border invisible group-hover:visible'>
            <ul className='w-full h-full space-y-3 flex flex-col justify-center ml-5'>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 1</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 2</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 3</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 4</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 5</Link>
            </ul>
          </div>
        </div>
        <div className='relative group'>
          <ScrollLink to="category4" smooth={true} duration={500} offset={-100}>
            <h1 className='font-semibold uppercase cursor-pointer text-white font-poppins'>
              Category 4
            </h1>
          </ScrollLink>
          <div className='w-[300px] z-20 py-5 translate-y-4 group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100 bg-white absolute -left-28 border invisible group-hover:visible'>
            <ul className='w-full h-full space-y-3 flex flex-col justify-center ml-5'>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 1</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 2</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 3</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 4</Link>
              <Link to='/product' className='text-cyan-700 font-semibold cursor-pointer font-roboto hover:text-cyan-600/80'>Item List Example 5</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
