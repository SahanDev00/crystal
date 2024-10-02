import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const LatestProducts = () => {
  const rugsRef = useRef([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the latest 6 items from the API
    const fetchLatestItems = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch('https://kmatadmin.worldpos.biz/Api/Item?IsNew=y', {
          method: 'GET',
          headers: {
            'APIKey': apiKey,
          },
        });
        const data = await response.json();
        // Take the first 6 items
        const latestItems = data.data.slice(0, 6);
        setItems(latestItems);
      } catch (error) {
        console.error('Error fetching latest items:', error);
      }
    };

    fetchLatestItems();
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
  }, [items]); // Ensure this effect runs after items are loaded

  return (
    <div className='w-full pt-1 md:pt-20 pb-28 bg-cyan-50 relative'>
      <div className='w-[100%] mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-center text-3xl text-gray-700 font-bold uppercase my-5 font-overpass'>
          Latest <span className='text-cyan-600'>Arrivals</span>
        </h1>
        <div className='mt-3 flex flex-wrap gap-5 w-full items-center justify-center'>
          {items.map((item, index) => (
            <div
              key={item.itemID}
              ref={(el) => rugsRef.current[index] = el}
              className='h-[400px] sm:h-[350px] md:h-[450px] border w-[90%] sm:w-[40%] md:w-[45%] lg:w-[40%] xl:w-[30%] relative hover:shadow-md duration-300 hover:bg-cyan-950 group cursor-pointer opacity-0 transform translate-y-10'
            >
            <Link
            key={index}
            to={`/product/${item.cacheID}`} // Link to the corresponding category
          >
              <img
                src={`https://kmatadmin.worldpos.biz/Uploads/${item.cacheID}.jpg` || '/placeholder-image.jpg'} // Default image if no fileUpload is provided
                className='absolute bg-white w-full h-full object-cover duration-300 group-hover:opacity-30'
                alt={item.itemName}
              />
              <div className='absolute flex justify-center items-center flex-col inset-0 text-white bg-black/50 lg:opacity-0 lg:group-hover:opacity-100'>
                <h1 className='text-center my-1 font-semibold uppercase text-lg font-karla w-[97%] mx-auto'>
                  {item.itemName}
                </h1>
                <p className='text-center font-semibold'>Rs. {item.retailDisplay}</p>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
