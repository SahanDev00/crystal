import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic from '../images/heroPic.jpeg'; // Update path as needed

const slides = [
  {
    heading: 'Your Heading 1',
    text: 'Your descriptive text for the first slide.',
    image: pic,
  },
  {
    heading: 'Your Heading 2',
    text: 'Your descriptive text for the second slide.',
    image: pic,
  },
  // Add more slides as needed
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-screen h-[100vh] bg-black">
        <img src={pic} alt="" className='w-full absolute opacity-30 h-full' />
      <Slider {...settings} className="">
        {slides.map((slide, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="flex w-[90%] h-[90vh] mx-auto items-center">
              <div className="w-1/2 p-10 text-white justify-center">
                <h1 className="text-4xl font-bold mb-4">{slide.heading}</h1>
                <p className="text-lg mb-6">{slide.text}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Your Button
                </button>
              </div>
              <div className="w-1/2 h-full flex items-center">
                <img src={slide.image} alt="Slider Image" className=" object-cover" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
