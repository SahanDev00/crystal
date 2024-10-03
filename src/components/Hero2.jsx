import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Hero2 = () => {

  return (
    <div className="h-[100vh] bg-black">
        {/*<img src={pic} alt="" className='w-full absolute opacity-30 h-full' />*/}
          <div className="flex items-center justify-center relative">
            <div className="flex w-[100%] relative h-[100vh] mx-auto justify-center items-center">
              <div className="w-full h-full flex flex-col items-center p-10 text-white justify-center mt-10">
                <h1 className="text-3xl sm:text-4xl text-center md:text-5xl font-bold mb-4 uppercase text-gray-300 relative font-karla">Welcome to <span className='text-cyan-400'>K-Mat</span></h1>
                <p className="md:text-lg mb-6 text-sm md:w-[70%] lg:w-[60%] text-center text-gray-400 font-karla">The market leader in manufacturing and supplying the best quality coconut fiber mats in Sri Lanka. A hand in hand is made on ecology and art in order to develop efficient, environment friendly mats for households, offices and industries. Our mats have a core of 100% coconut fiber offering strength and versatility with style for all manner of applications, whether as a doormat, floor mat or industrial mat. In Kmat global sustainability practices are integrated into the company's core culture in a way that enhances product longevity across markets. Browse our collection of step mats which are ideal for the environment and advances comfort. Make Kmat your choice for quality and sustainability.</p>
                <Link to='/store'>
                    <button className="bg-cyan-500/90 font-karla text-white py-2 px-5 rounded hover:bg-cyan-600 transition duration-300">
                    Explore
                    </button>
                </Link>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Hero2;
