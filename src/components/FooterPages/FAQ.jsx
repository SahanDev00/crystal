import React, { useEffect } from 'react'

const FAQ = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='w-full min-h-screen mt-28 font-overpass pb-5'>
      <div className='w-[80%] mx-auto h-full'>
        <h1 className='text-cyan-600 text-3xl font-semibold'>Frequently Asked Questions. (FAQ)</h1>
        <ul className='list-decimal mt-5'>
          <li className='text-2xl font-medium text-cyan-800'>Lorem ipsum dolor sit amet.?</li>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam saepe pariatur, quod doloremque dignissimos quae quo consequatur doloribus dolor.</p>
          <li className='text-2xl font-medium text-cyan-800 mt-4'>Lorem orem ipsum dolor sit ame ipsum dolor sit amet.?</li>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing dipisicing elit. Aliquam numquam saepe pariatur, quod elit. Aliquam numquam saepe pariatur, quod doloremque dignissimos quae quo consequatur doloribus dolor.</p>
          <li className='text-2xl font-medium text-cyan-800 mt-4'>Lorem sit ame ipsum dolor sit amet.?</li>
          <p className='text-gray-700'>Lorem ipsum dolor dolor sit amet consectetur adipisicing elit. Aliquam numquam saepe par sit amet consectetur adipisicing elit. Aliquam numquam saepe pariatur, quod doloremque dignissimos quae quo consequatur doloribus dolor.</p>
          <li className='text-2xl font-medium text-cyan-800 mt-4'>Lorem orem ipsum dolor sit ame ipsum dolor sit amet.?</li>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing dipisicing elit. Aliquam numquam saepe pariatur, quod elit. Aliquam numquam saepe pariatur, quod doloremque dignissimos quae quo consequatur doloribus dolor.</p>
          <li className='text-2xl font-medium text-cyan-800 mt-4'>Lorem sit ame ipsum dolor sit amet.?</li>
          <p className='text-gray-700'>Lorem ipsum dolor dolor sit amet consectetur adipisicing elit. Aliquam numquam saepe par sit amet consectetur adipisicing elit. Aliquam numquam saepe pariatur, quod doloremque dignissimos quae quo consequatur doloribus dolor.</p>
          <li className='text-2xl font-medium text-cyan-800 mt-4'>Lorem orem ipsum dolor sit ame ipsum dolor sit amet.?</li>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing dipisicing elit. Aliquam numquam saepe pariatur, quod elit. Aliquam numquam saepe pariatur, quod doloremque dignissimos quae quo consequatur doloribus dolor.</p>
          <li className='text-2xl font-medium text-cyan-800 mt-4'>Lorem sit ame ipsum dolor sit amet.?</li>
          <p className='text-gray-700'>Lorem ipsum dolor dolor sit amet consectetur adipisicing elit. Aliquam numquam saepe par sit amet consectetur adipisicing elit. Aliquam numquam saepe pariatur, quod doloremque dignissimos quae quo consequatur doloribus dolor.</p>
        </ul>
      </div>
    </div>    
  )
}

export default FAQ