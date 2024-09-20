import React, { useEffect, useState, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import rugPic1 from '../images/rug1.jpeg';
import rugPic2 from '../images/rug2.jpeg';
import rugPic3 from '../images/rug3.jpeg';
import rugPic4 from '../images/RugBig.jpeg';

const Collection = () => {
  const rugsRef = useRef([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch('https://extremeadmin.worldpos.biz/Api/CategoryMain', {
          method: 'GET',
          headers: {
            'APIKey': apiKey,
          },
        });
        const data = await response.json();
        // Extract the first 4 categories
        const categoryNames = data.data.slice(0, 4).map(category => category.categoryMainName);
        setCategories(categoryNames);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

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
    <div className='w-full pt-14 pb-20 relative bg-cyan-50'>
      <div className='w-[100%] mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-center text-3xl text-gray-700 font-bold uppercase my-5 font-overpass'>
          Shop by <span className='text-cyan-600'>category</span>
        </h1>
        <div className='mt-3 grid grid-cols-4 w-full items-center justify-center'>
          {[rugPic1, rugPic2, rugPic3, rugPic4].map((pic, index) => (
                        <Link
                        scroll={el => {
                          const yOffset = -100; // Adjust this value for the offset
                          const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                        }}
                        key={index}
                        to={`/store#${categories[index]}`} // Link to the corresponding category
                        smooth
                        className='text-cyan-600 hover:text-cyan-400 font-semibold uppercase my-2'
                      >
            <div
              key={index}
              ref={(el) => rugsRef.current[index] = el}
              className='h-[450px] border w-full relative hover:shadow-md duration-300 hover:bg-black group cursor-pointer opacity-0 transform translate-y-10'
            >
              <img src={pic} className='absolute w-full h-full object-cover duration-300 group-hover:opacity-30' alt={`Rug ${index + 1}`} />
              <div className='absolute flex justify-center items-center flex-col inset-0 text-white opacity-0 group-hover:opacity-100'>
                <h1 className='text-center my-1 font-semibold uppercase text-lg font-overpass'>
                  {categories[index] || `Rug ${index + 1} Example Pic`}
                </h1>
              </div>
            </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
