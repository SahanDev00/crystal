import React, { useEffect } from 'react'
import Categories from '../components/Store/Categories'
import Collection from '../components/Collection'
import AllProducts from '../components/Store/AllProducts'
import Questions from '../components/AboutUs/Questions'
import { FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { Helmet } from 'react-helmet'

const Store = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Helmet>
          <title>KMat | Best place to buy high quality rubber mats, cow mats, and horse mats.</title>
        </Helmet>
        <Categories/>
        <AllProducts/>
        <Questions/>
        <Collection/>
        <Link to='categories' className='z-50 relative' smooth={true} duration={600} offset={-100} >
          <button className='bg-cyan-950 text-white p-3 fixed bottom-4 right-4'><FaArrowUp size={25}/></button>
        </Link>
    </div>
  )
}

export default Store