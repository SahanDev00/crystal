import React from 'react'
import pic from '../../images/rug1.jpeg'
import { Link } from 'react-router-dom'

const AllProducts = () => {

  const products = [
    {
      name: 'Product Example 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 7',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 8',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 9',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 10',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 11',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
    {
      name: 'Product Example 12',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel.',
      img: pic
    },
  ]

  return (
    <div className='w-full'>
      <h1 className='font-bold text-center my-10 text-3xl text-black/80 font-roboto'>Explore Our Products</h1>
      <div className='w-[80%] gap-5 mx-auto flex flex-wrap justify-center items-center'>
        {products.map(product => (
          <Link to='/product' className='w-[350px] h-[300px] cursor-pointer hover:shadow-lg duration-150 shadow'>
            <img src={product.img} alt="" className='w-full h-[200px] object-cover' />
            <h1 className='text-center text-cyan-600 font-semibold mt-2 font-poppins'>{product.name}</h1>
            <p className='text-center text-black/70'>{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllProducts