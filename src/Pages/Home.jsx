import React from 'react'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import Cards from '../components/Cards'
import WhyMats from '../components/WhyMats'
import Features from '../components/Features'
import LatestProducts from '../components/LatestProducts'
import CustomProducts from '../components/CustomProducts'

const Home = () => {
  return (
    <div className='w-full'>
        <Hero/>
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