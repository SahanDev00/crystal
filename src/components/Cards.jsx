import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const Cards = () => {
  const [slides, setSlides] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  // Function to fetch slide data
  const fetchSlides = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await axios.get('https://kmatadmin.worldpos.biz/Api/SlideBanner',{
        headers: {
          'APIKey': apiKey,
        },
      });
      if (response.data.success) {
        setSlides(response.data.data); // Store the fetched slides
      } else {
        console.error('Failed to fetch slides:', response.data.errorMessage);
      }
    } catch (error) {
      console.error('Error fetching slides:', error);
    }
  };

  useEffect(() => {
    fetchSlides(); // Fetch the slides when the component mounts
  }, []);

  return (
    <div className='w-full pt-28 pb-10 relative bg-cyan-50'>
      <h1 className='text-3xl font-bold text-center mb-10 text-gray-700 font-overpass sm:w-full w-[90%] mx-auto'>GLIMPSE OF OUR <span className='text-cyan-600'>PRODUCTS</span></h1>
      <Slider {...settings} className='lg:w-[90%] xl:w-[80%] 2xl:w-[70%] 3xl:w-[55%] w-[95%] mx-auto'>
        {slides.map((slide) => (
          <div key={slide.slideBannerID} className='relative w-full h-[500px] lg:h-[650px]'>
            <img src={`https://kmatadmin.worldpos.biz/uploads/${slide.slideBannerID}.jpg`} alt={slide.title} className=' lg:w-[50%] xl:w-[500px] h-full lg:h-[80%] object-cover shadow-lg absolute top-0 lg:left-2 lg:z-10 rounded-lg' />
            <div className='w-full lg:w-[650px] xl:w-[770px] h-[600px]  lg:bg-cyan-400/20 absolute lg:right-2 bottom-0 rounded-lg'>
              <div className='w-full h-full flex bg-black/40 lg:bg-cyan-400/20'>
                <div className='w-5 sm:w-2/12 lg:w-1/2'/>
                <div className='w-full h-full flex items-center'>
                  <div>
                    <h1 className='font-bold my-5 text-5xl text-white lg:text-black/90 font-overpass'>{slide.title}</h1>
                    <p className='font-karla text-gray-200 lg:text-black'>{slide.description}</p>
                    <Link to={slide.buttonLink}>
                      <FaArrowRight className='mt-5 rounded-full w-[50px] h-[50px] p-3 text-white lg:text-black/90 border border-white lg:border-black cursor-pointer hover:bg-yellow-400/20'/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
