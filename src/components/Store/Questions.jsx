import React from 'react'

const Questions = () => {
  return (
    <div className='w-full flex justify-center items-center mt-20 mb-10 bg-yellow-400/20 py-8'>
        <div className='w-[80%] flex flex-col justify-center items-center'>
            <h1 className='text-center text-3xl font-semibold text-black/90'>Have Any Questions Related To This Product?</h1>
            <p className='text-xl text-center mt-1 font-semibold text-black/80'>Reach Out to Us by Filling This Form.</p>
            <button className='px-4 py-2 mt-3 bg-yellow-600/90 hover:bg-yellow-600 duration-300 rounded-full text-white'>Contact Us</button>
        </div>
    </div>
  )
}

export default Questions