import React, { useEffect } from 'react'
import Hero2 from '../components/Hero2'
import Collection from '../components/Collection'
import Cards from '../components/Cards'
import WhyMats from '../components/WhyMats'
import Features from '../components/Features'
import LatestProducts from '../components/LatestProducts'
import CustomProducts from '../components/CustomProducts'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full'>
        <Hero2/>
        <Collection/>
        <Cards/>
        <WhyMats/>
        <LatestProducts/>
        <CustomProducts/>
        <Features/>
    </div>
  )
}

export default Home