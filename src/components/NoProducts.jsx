import React, { useEffect } from 'react'

const NoProducts = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-24 h-[50vh] w-screen flex items-center justify-center font-semibold'>0 products found !!!</div>
  )
}

export default NoProducts