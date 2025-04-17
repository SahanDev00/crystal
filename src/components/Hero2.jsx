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
                <h1 className="text-3xl sm:text-4xl text-center md:text-5xl 2lg:text-4xl 3lg:text-5xl font-bold mb-4 uppercase text-gray-300 relative font-karla">K-Mats | <span className='text-cyan-400'>Tough on Wear, Soft on Feet</span></h1>
                <p className=" md:text-lg 2lg:text-sm 3lg:text-lg mb-6 text-sm md:w-[70%] lg:w-[60%] text-center text-gray-300 font-karla">At K-MATS, we redefine durability with a conscience. As a global exporter to over 70 countries, we craft high-performance rubber mats that not only stand the test of time but tread lightly on the planet. Our products are manufactured using a powerful blend of natural rubber and sustainably sourced coconut fiber — a renewable, biodegradable material known for its strength and eco-friendly profile. Headquartered in Brisbane, Australia, with expert manufacturing in Sri Lanka and India, we specialize in mats for livestock, commercial, industrial, and entrance use. While rubber ensures resilience and grip, our use of coconut fiber helps reduce environmental impact, making every mat a step toward a greener future. At K-MATS, performance meets purpose — for people, animals, and the planet.
                </p>
                <Link to='/store'>
                    <button className="bg-cyan-500/90 font-karla text-white text-[16px] 2lg:text-[14px] 3lg:text-[16px] py-2 px-5 rounded hover:bg-cyan-600 transition duration-300">
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
