import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import rugPic from '../images/RugBig.jpeg'; // Example image

const Cards = () => {
  // Array with data for each slide
  const products = [
    {
      title: "Rubber Rugs",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cum necessitatibus quae, dolorum sequi error veritatis culpa ratione esse. Odio labore repudiandae consectetur vel nihil veniam assumenda, accusantium amet aliquam!",
      img: rugPic
    },
    {
      title: "Leather Mats",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cum necessitatibus quae, dolorum sequi error veritatis culpa ratione esse. Odio labore repudiandae consectetur vel nihil veniam assumenda, accusantium amet aliquam!",
      img: rugPic
    },
    // Add more products as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className='w-full mt-28 mb-10'>
      <h1 className='text-3xl font-bold text-center mb-10 text-gray-700 font-roboto'>GLIMPSE OF OUR <span className='text-cyan-600'>PRODUCTS</span></h1>
      <Slider {...settings} className='w-[55%] mx-auto'>
        {products.map((product, index) => (
          <div key={index} className='relative w-full h-[650px]'>
            <img src={product.img} alt={product.title} className='w-[500px] shadow-lg absolute top-0 left-2 z-10 rounded-lg' />
            <div className='w-[770px] h-[600px] bg-cyan-400/20 absolute right-2 bottom-0 rounded-lg'>
              <div className='w-full h-full flex'>
                <div className='w-1/2'/>
                <div className='w-full h-full flex items-center'>
                  <div>
                    <h1 className='font-bold my-5 text-5xl text-black/90 font-poppins'>{product.title}</h1>
                    <p>{product.description}</p>
                    <FaArrowRight className='mt-5 rounded-full w-[50px] h-[50px] p-3 text-black/90 border border-black cursor-pointer hover:bg-yellow-400/20'/>
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
