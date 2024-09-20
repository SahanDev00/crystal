import React from 'react'

const GetStarted = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center p-5 pt-10 pb-10 relative bg-cyan-50'>
        <h1 className='text-3xl font-semibold text-cyan-700 uppercase font-overpass'>Let's Get You Some Comfort!</h1>
        <p className='text-lg my-1 text-black/60 font-semibold font-karla'>Check Our New Arrivals to Decorate your Floors.</p>
        <button className='rounded-full border py-1 px-3 mt-2 font-karla border-cyan-500 text-cyan-500 hover:text-white hover:bg-cyan-500 duration-100'>New Arrivals</button>
    </div>
  )
}

export default GetStarted