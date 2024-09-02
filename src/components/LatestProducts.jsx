import React, { useEffect, useRef } from 'react';
import rugPic1 from '../images/rug1.jpeg';
import rugPic2 from '../images/rug2.jpeg';
import rugPic3 from '../images/rug3.jpeg';
import rugPic4 from '../images/RugBig.jpeg';

const LatestProducts = () => {
  const rugsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-floatUp');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, { threshold: 0.1 });

    rugsRef.current.forEach((rug, index) => {
      if (rug) {
        observer.observe(rug);
        rug.style.animationDelay = `${index * 0.2}s`; // Stagger animation by 0.2s for each rug
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='w-full mt-20 mb-20'>
      <div className='w-[100%] mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-center text-3xl text-gray-700 font-bold uppercase my-5 font-roboto'>latest arrivals</h1>
        <div className='mt-3 grid grid-cols-4 w-full items-center justify-center'>
          {[rugPic1, rugPic2, rugPic3, rugPic4].map((pic, index) => (
            <div
              key={index}
              ref={(el) => rugsRef.current[index] = el}
              className='h-[450px] border w-full relative hover:shadow-md duration-300 hover:bg-black group  cursor-pointer opacity-0 transform translate-y-10'
            >
              <img src={pic} className='absolute w-full h-full object-cover duration-300 group-hover:opacity-30' alt={`Rug ${index + 1}`} />
              <div className='absolute flex justify-center items-center flex-col inset-0 text-white opacity-0 group-hover:opacity-100'>
                <h1 className='text-center my-1 font-semibold uppercase text-lg font-poppins'>Rug {index + 1} Example Pic</h1>
                <p className='text-center text-sm opacity-0 group-hover:opacity-100 duration-300'>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;
