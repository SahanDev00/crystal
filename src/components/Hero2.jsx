import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic from '../images/heroPic.jpeg'; 

const Hero2 = () => {

  return (
    <div className="h-[100vh] bg-black">
        <img src={pic} alt="" className='w-full absolute opacity-30 h-full' />
          <div className="flex items-center justify-center">
            <div className="flex w-[100%] relative h-[100vh] mx-auto justify-center items-center">
              <div className="w-full h-full flex flex-col items-center p-10 text-white justify-center mt-10">
                <h1 className="text-5xl font-poppins font-bold mb-4 uppercase text-gray-300">Lorem, ipsum dolor.</h1>
                <p className="text-lg mb-6 w-[50%] text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum odit quae minima. Mollitia distinctio impedit iste, earum perspiciatis eius quidem placeat nostrum excepturi error nobis? Itaque beatae maiores qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum odit quae minima. Mollitia distinctio impedit iste.</p>
                <button className="bg-cyan-500/90 font-poppins text-white py-2 px-5 rounded hover:bg-cyan-600 transition duration-300">
                  Explore
                </button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Hero2;
