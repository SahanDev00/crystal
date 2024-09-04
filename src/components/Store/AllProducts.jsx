import React from 'react'
import pic from '../../images/rug1.jpeg'
import pic2 from '../../images/rug2.jpeg'
import pic3 from '../../images/rug3.jpeg'
import pic4 from '../../images/rug4.jpeg'
import pic5 from '../../images/product1.jpeg'
import pic6 from '../../images/product2.jpeg'
import pic7 from '../../images/product3.jpeg'
import pic8 from '../../images/product4.jpeg'
import pic9 from '../../images/product5.jpeg'
import pic10 from '../../images/product7.jpeg'
import pic11 from '../../images/product8.jpeg'
import pic12 from '../../images/product9.jpeg'
import pic13 from '../../images/product10.jpeg'
import pic14 from '../../images/product11.jpeg'
import pic15 from '../../images/product12.jpeg'
import pic16 from '../../images/product6.jpeg'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'

const AllProducts = () => {

  const Category1 = [
    {
      name: 'Product Example 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic
    },
    {
      name: 'Product Example 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 300,
      img: pic2
    },
    {
      name: 'Product Example 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 500,
      img: pic3
    },
    {
      name: 'Product Example 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 1200,
      img: pic4
    },
    {
      name: 'Product Example 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 2200,
      img: pic5
    },
    {
      name: 'Product Example 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic6
    },
  ]

  const Category2 = [
    {
      name: 'Product Example 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 300,
      img: pic7
    },
    {
      name: 'Product Example 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 500,
      img: pic8
    },
    {
      name: 'Product Example 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 800,
      img: pic9
    },
    {
      name: 'Product Example 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 1200,
      img: pic10
    },
    {
      name: 'Product Example 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 1300,
      img: pic11
    },
    {
      name: 'Product Example 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic12
    },
  ]

  const Category3 = [
    {
      name: 'Product Example 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic13
    },
    {
      name: 'Product Example 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic14
    },
    {
      name: 'Product Example 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic15
    },
    {
      name: 'Product Example 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic16
    },
    {
      name: 'Product Example 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic
    },
    {
      name: 'Product Example 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic5
    },
  ]

  const Category4 = [
    {
      name: 'Product Example 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic2
    },
    {
      name: 'Product Example 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic3
    },
    {
      name: 'Product Example 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic7
    },
    {
      name: 'Product Example 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic5
    },
    {
      name: 'Product Example 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic9
    },
    {
      name: 'Product Example 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      price: 200,
      img: pic11
    },
  ]

  return (
    <div className='w-full'>
      <h1 className='font-bold text-center my-10 text-3xl text-black/80 font-roboto'>Explore Our Products</h1>
      <div id='category1' className='w-[80%] mx-auto'>
        <h2 className='text-2xl font-semibold uppercase mb-3 text-cyan-900'>Category 1</h2>
        <div className='w-full h-full mx-auto grid grid-cols-3 gap-5'>
          {Category1.map(product => (
            <div className='w-full h-[500px] relative cursor-pointer hover:shadow-lg duration-150 shadow group'>
              <button className='absolute right-3 top-3 border rounded-full p-3 text-cyan-300 bg-black/70 hidden group-hover:block hover:text-cyan-400'><FaCartPlus size={20}/></button>
              <Link to='/product' className=''>
                <img src={product.img} alt="" className='w-full h-[400px] object-cover' />
                <p className='absolute text-cyan-300 w-full bg-black/80 bottom-24 text-center py-2 font-semibold text-lg opacity-0 group-hover:opacity-100 duration-200'>Rs.{product.price}</p>
                <div className='w-full h-[100px] flex flex-col items-center justify-center'>
                  <h1 className='text-center text-cyan-600 font-semibold mt-2 font-poppins'>{product.name}</h1>
                  <p className='text-center text-black/70 w-[90%]'>{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id='category2' className='w-[80%] mx-auto mt-20'>
        <h2 className='text-2xl font-semibold uppercase mb-3 text-cyan-900'>Category 2</h2>
        <div className='w-full h-full mx-auto grid grid-cols-3 gap-5'>
          {Category2.map(product => (
            <div className='w-full h-[500px] relative cursor-pointer hover:shadow-lg duration-150 shadow group'>
              <button className='absolute right-3 top-3 border rounded-full p-3 text-cyan-300 bg-black/70 hidden group-hover:block hover:text-cyan-400'><FaCartPlus size={20}/></button>
              <Link to='/product' className=''>
                <img src={product.img} alt="" className='w-full h-[400px] object-cover' />
                <p className='absolute text-cyan-300 w-full bg-black/80 bottom-24 text-center py-2 font-semibold text-lg opacity-0 group-hover:opacity-100 duration-200'>Rs.{product.price}</p>
                <div className='w-full h-[100px] flex flex-col items-center justify-center'>
                  <h1 className='text-center text-cyan-600 font-semibold mt-2 font-poppins'>{product.name}</h1>
                  <p className='text-center text-black/70 w-[90%]'>{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id='category3' className='w-[80%] mx-auto mt-20'>
        <h2 className='text-2xl font-semibold uppercase mb-3 text-cyan-900'>Category 3</h2>
        <div className='w-full h-full mx-auto grid grid-cols-3 gap-5'>
          {Category3.map(product => (
            <div className='w-full h-[500px] relative cursor-pointer hover:shadow-lg duration-150 shadow group'>
              <button className='absolute right-3 top-3 border rounded-full p-3 text-cyan-300 bg-black/70 hidden group-hover:block hover:text-cyan-400'><FaCartPlus size={20}/></button>
              <Link to='/product' className=''>
                <img src={product.img} alt="" className='w-full h-[400px] object-cover' />
                <p className='absolute text-cyan-300 w-full bg-black/80 bottom-24 text-center py-2 font-semibold text-lg opacity-0 group-hover:opacity-100 duration-200'>Rs.{product.price}</p>
                <div className='w-full h-[100px] flex flex-col items-center justify-center'>
                  <h1 className='text-center text-cyan-600 font-semibold mt-2 font-poppins'>{product.name}</h1>
                  <p className='text-center text-black/70 w-[90%]'>{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id='category4' className='w-[80%] mx-auto mt-20'>
        <h2 className='text-2xl font-semibold uppercase mb-3 text-cyan-900'>Category 4</h2>
        <div className='w-full h-full mx-auto grid grid-cols-3 gap-5'>
          {Category4.map(product => (
            <div className='w-full h-[500px] relative cursor-pointer hover:shadow-lg duration-150 shadow group'>
              <button className='absolute right-3 top-3 border rounded-full p-3 text-cyan-300 bg-black/70 hidden group-hover:block hover:text-cyan-400'><FaCartPlus size={20}/></button>
              <Link to='/product' className=''>
                <img src={product.img} alt="" className='w-full h-[400px] object-cover' />
                <p className='absolute text-cyan-300 w-full bg-black/80 bottom-24 text-center py-2 font-semibold text-lg opacity-0 group-hover:opacity-100 duration-200'>Rs.{product.price}</p>
                <div className='w-full h-[100px] flex flex-col items-center justify-center'>
                  <h1 className='text-center text-cyan-600 font-semibold mt-2 font-poppins'>{product.name}</h1>
                  <p className='text-center text-black/70 w-[90%]'>{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts