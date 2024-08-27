import React from 'react'
import pic from '../../images/rug1.jpeg'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  return (
    <div className='w-full'>
      <h1 className='font-bold text-center my-10 text-3xl text-black/80'>Explore Our Products</h1>
      <div className='w-[80%] gap-5 mx-auto flex flex-wrap justify-center items-center'>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
        <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
          <img src={pic} alt="" className='w-full h-[200px] object-cover' />
          <h1 className='text-center font-semibold mt-2'>Product Example 1</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.</p>
        </Link>
      </div>
    </div>
  )
}

export default AllProducts