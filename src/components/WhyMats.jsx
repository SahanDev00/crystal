import React from 'react'
import rugPic from '../images/rug3.jpeg'
import { Link } from 'react-router-dom'

const WhyMats = () => {
  return (
    <div className='w-full mt-32 mb-20'>
        <div className='w-full grid grid-cols-2'>
            <div className='w-full'>
                <img src={rugPic} alt="" />
            </div>
            <div className='w-full h-full bg-cyan-100 flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold text-black/80 text-center font-poppins'>WHY CRYSTAL MATS?</h1>
                <p className='w-[90%] mt-5 text-center text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi earum temporibus repellendus, animi mollitia voluptatibus perferendis explicabo veritatis atque optio facere? Excepturi tempore suscipit molestiae rem cum laudantium repudiandae ut, earum quaerat minus voluptatum dolorum labore nisi voluptates id iste, voluptatibus sint! Odit maiores error quaerat illum quibusdam iusto!</p>
                <Link to='/store'>
                  <button className='px-5 py-3 mt-5 font-semibold rounded-full bg-cyan-400/50 font-poppins'>Explore Shop</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default WhyMats