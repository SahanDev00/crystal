import React from 'react'
import pic from '../../images/rug1.jpeg'
import Questions from './Questions'

const AboutUs = () => {
  return (
    <div className='w-full mt-28'>
        <div className='w-[60%] mx-auto'>
            <h1 className='text-gray-700 text-4xl font-bold my-10 font-overpass'>About Us</h1>
            <div className='w-full flex flex-wrap mt-14'>
                <div className='w-1/2 mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>Who We Are?</h1>
                    <p className='text-black/50 w-[95%] text-wrap text-lg font-karla'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum quis, veritatis at suscipit quaerat consequuntur quod inventore est culpa et eaque laudantium recusandae quae nobis voluptate obcaecati aut ea quam velit sequi aliquam dolores sint corporis? Repudiandae optio beatae quasi veniam tempora, iusto illum nobis labore est ratione aut.</p>
                </div>
                <div className='w-1/2 h-[350px] flex flex-col items-center justify-center'>
                    <img src={pic} alt="" className='w-full h-full rounded' />
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-14'>
                <div className='w-1/2 h-[350px] flex flex-col items-center justify-center'>
                    <img src={pic} alt="" className='w-full h-full rounded' />
                </div>
                <div className='w-1/2 mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl ml-10 font-semibold text-cyan-600/60 my-4 font-overpass'>What We Produce?</h1>
                    <p className='text-black/50 text-wrap text-lg ml-10 font-karla'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum quis, veritatis at suscipit quaerat consequuntur quod inventore est culpa et eaque laudantium recusandae quae nobis voluptate obcaecati aut ea quam velit sequi aliquam dolores sint corporis? Repudiandae optio beatae quasi veniam tempora, iusto illum nobis labore est ratione aut.</p>
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-14'>
                <div className='w-1/2 mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>Where We Are?</h1>
                    <p className='text-black/50 text-wrap text-lg w-[95%] font-karla'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum quis, veritatis at suscipit quaerat consequuntur quod inventore est culpa et eaque laudantium recusandae quae nobis voluptate obcaecati aut ea quam velit sequi aliquam dolores sint corporis? Repudiandae optio beatae quasi veniam tempora, iusto illum nobis labore est ratione aut.</p>
                </div>
                <div className='w-1/2 h-[350px] flex flex-col items-center justify-center'>
                    <img src={pic} alt="" className='w-full h-full rounded' />
                </div>
            </div>
        </div>
        <Questions/>
    </div>
  )
}

export default AboutUs