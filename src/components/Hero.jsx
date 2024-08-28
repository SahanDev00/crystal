import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic from '../images/heroPic.jpeg'; 
import pic2 from '../images/rug.png'; 

const slides = [
  {
    heading: 'Heading Text 1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptas, perferendis accusantium excepturi eaque voluptatem quae est provident hic porro!',
    image: pic,
  },
  {
    heading: 'Heading Text 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsa amet exercitationem officia placeat debitis!',
    image: pic2,
  },
  // Add more slides as needed
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2500,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="h-[100vh] bg-black">
        <img src={pic} alt="" className='w-full absolute opacity-30 h-full' />
      <Slider {...settings} className="w-[96%] mx-auto">
        {slides.map((slide, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="flex w-[90%] h-[95vh] mx-auto items-center">
              <div className="w-1/2 p-10 text-white justify-center mt-10">
                <h1 className="text-4xl font-poppins font-bold mb-4">{slide.heading}</h1>
                <p className="text-lg mb-6">{slide.text}</p>
                <button className="bg-cyan-500/80 font-poppins text-white py-2 px-5 rounded hover:bg-cyan-500/90 transition duration-300">
                  Explore
                </button>
              </div>
              <div className="w-1/2 h-full flex items-center mt-10">
                <img src={slide.image} alt="Slider" className=" rounded-lg shadow-lg object-cover w-[900px]" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
