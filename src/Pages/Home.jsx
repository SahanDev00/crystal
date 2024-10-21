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
import { Helmet } from 'react-helmet'
import mat from '../images/mat.jpg'
import cow from '../images/cows.jpg'
import Slider from 'react-slick'

const Home = () => {

  const slides = [
    {
      image: mat,
    },
    {
      image: cow,
    }
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full'>
      <Helmet>
        <title>K-Mats | Home</title>
      </Helmet>

      {/* Slider acting as a background */}
      <div className="w-full h-screen fixed top-0 left-0 opacity-30">
        <Slider {...settings} className="w-full h-screen">
          {slides.map((slide, index) => (
            <img key={index} src={slide.image} alt="" className='w-full h-screen xl:h-full object-cover' />
          ))}
        </Slider>
      </div>

      {/* Content on top of the slider */}
      <div className=' z-40'>
        <Hero2 />
        <Collection />
        <Gallery />
        <Cards />
        <WhyMats />
        <LatestProducts />
        <CustomProducts />
        <GetStarted />
        <Features />
      </div>
    </div>
  );
}

export default Home;
