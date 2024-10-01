import React, { useEffect } from 'react'
import Hero2 from '../components/Hero2'
import Collection from '../components/Collection'
import Cards from '../components/Cards'
import WhyMats from '../components/WhyMats'
import Features from '../components/Features'
import LatestProducts from '../components/LatestProducts'
import CustomProducts from '../components/CustomProducts'
import GetStarted from '../components/GetStarted'
import Gallery from '../components/Gallery'
import pic from '../images/heroPic.jpeg'; 
import { Helmet } from 'react-helmet'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className='w-full'>
        <Helmet>
          <title>K-Mats | Home</title>
        </Helmet>
        <img src={pic} alt="" className='w-full fixed opacity-30 h-full' />
        <div className='z-50'>
          <Hero2/>
          <Collection/>
          <Gallery/>
          <Cards/>
          <WhyMats/>
          <LatestProducts/>
          <CustomProducts/>
          <GetStarted/>
          <Features/>
        </div>
    </div>
  )
}

export default Home