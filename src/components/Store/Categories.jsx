import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState({}); // To store items for each category

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const fetchCategories = async () => {
      try {
        const response = await fetch('http://admin.extreme.exesmart.com/Api/CategoryMain', {
          headers: {
            'APIKey': apiKey,
          },
        });
        const data = await response.json();
        if (data.success) {
          setCategories(data.data);
          // Fetch items for all categories after fetching categories
          fetchItemsForCategories(data.data);
        } else {
          console.error('Error fetching categories:', data.errorMessage);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    const fetchItemsForCategories = async (categories) => {
      const newItems = {};
      try {
        await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(`http://admin.extreme.exesmart.com/Api/Item?CategoryMainID=${category.categoryMainID}`, {
              headers: {
                'APIKey': apiKey,
              },
            });
            const data = await response.json();
            if (data.success) {
              newItems[category.categoryMainID] = data.data;
            } else {
              console.error('Error fetching items for category:', category.categoryMainID, data.errorMessage);
            }
          })
        );
        setItems(newItems);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
<div id='categories' className='w-full border bg-cyan-800'>
  <div className='w-[80%] py-2 mx-auto mt-20 flex flex-wrap justify-center gap-10 items-center'>
    {categories.map((category) => (
      <div key={category.categoryMainID} className='relative group'>
        <ScrollLink 
          to={category.categoryMainName} 
          smooth={true} 
          duration={500} 
          offset={-100}
        >
          <h1 className='font-semibold uppercase cursor-pointer text-white font-poppins'>
            {category.categoryMainName}
          </h1>
        </ScrollLink>
        <div className='w-[300px] z-20 py-5 translate-y-4 group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100 bg-white absolute -left-28 border invisible group-hover:visible'>
          <ul className='w-full h-full space-y-3 flex flex-col justify-center'>
            {items[category.categoryMainID]?.length > 0 ? (
              items[category.categoryMainID].map((item) => (
                <Link 
                  key={item.itemID} 
                  to={`/product/${item.itemID}`} 
                  className='text-cyan-700 cursor-pointer text-sm font-roboto hover:text-cyan-600/80 w-[80%] mx-auto'
                >
                  {item.itemName}
                </Link>
              ))
            ) : (
              <li className='text-red-600 text-center'>No items available</li>
            )}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Categories;
