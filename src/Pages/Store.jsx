import React, { useEffect } from 'react'
import Categories from '../components/Store/Categories'
import Collection from '../components/Collection'
import AllProducts from '../components/Store/AllProducts'
import Questions from '../components/AboutUs/Questions'
import { FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Store = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Categories/>
        <AllProducts/>
        <Questions/>
        <Collection/>
        <Link to='categories' smooth={true} duration={600}>
          <button className='bg-cyan-950 text-white p-3 fixed bottom-4 right-4'><FaArrowUp size={25}/></button>
        </Link>
    </div>
  )
}

export default Store