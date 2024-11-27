import React, { useState, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loader from '../../images/loader.gif';
import { useCart } from '../Cart/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1,
    });
    toast.success(product.itemName + ' Added To The Cart!', {
      toastId: 1,
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Fetch main categories
  const fetchCategories = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get('https://kmatadmin.worldpos.biz/Api/CategoryMain', {
      headers: {
        'APIKey': apiKey,
      },
    });
    return response.data.data;
  };

  // Fetch subcategories for a main category
  const fetchSubcategories = async (categoryMainID) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get(`https://kmatadmin.worldpos.biz/Api/CategorySub?CategoryMainID=${categoryMainID}`, {
      headers: {
        'APIKey': apiKey,
      },
    });
    return response.data.data;
  };

  // Fetch products by subcategory
  const fetchProductsBySubcategory = async (categorySubID) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get(`https://kmatadmin.worldpos.biz/Api/Item?CategorySubID=${categorySubID}`, {
      headers: {
        'APIKey': apiKey,
      },
    });
    return response.data.data;
  };

  // Fetch categories, subcategories, and products
  useEffect(() => {
    const getData = async () => {
      const categoryData = await fetchCategories();
      const subcategoryData = {};
      const productData = {};

      for (const category of categoryData) {
        const subcategories = await fetchSubcategories(category.categoryMainID);
        subcategoryData[category.categoryMainID] = subcategories;

        for (const subcategory of subcategories) {
          productData[subcategory.categorySubID] = await fetchProductsBySubcategory(subcategory.categorySubID);
        }
      }

      setCategories(categoryData);
      setSubcategories(subcategoryData);
      setProducts(productData);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) return <div className='h-[70vh] w-screen flex items-center justify-center'><img src={loader} className='w-[100px]' alt="" /></div>;

  return (
    <div className='w-full'>
      <h1 className='font-bold text-center my-10 text-3xl text-black/80 font-overpass'>Explore Our Products</h1>

      {categories.map(category => (
        <div key={category.categoryMainID} id={category.categoryMainName} className='w-[80%] mx-auto md:mt-20'>
          <h2 className='text-3xl font-semibold uppercase mb-1 text-cyan-900 font-overpass'>{category.categoryMainName}</h2>

          {/* Products */}
          {subcategories[category.categoryMainID]?.map(sub => (
            <div key={sub.categorySubID} id={sub.categorySubID}>
              <h3 className='text-xl font-semibold mb-4 text-cyan-500'>{sub.categorySubName}</h3>
              <div className='w-full h-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {products[sub.categorySubID]?.length > 0 ? (
                  products[sub.categorySubID].map(product => (
                    <div key={product.itemID} className='w-full mb-10 relative cursor-pointer hover:shadow-lg duration-150 shadow group'>
                      <button onClick={() => handleAddToCart(product)} className='absolute right-3 top-3 border rounded-full p-3 text-cyan-300 bg-black/70 lg:hidden lg:group-hover:block hover:text-cyan-400'>
                        <FaCartPlus size={20} />
                      </button>
                      
                      <Link to={`/product/${product.itemID}`}>
                        <img src={`https://kmatadmin.worldpos.biz/Uploads/${product.cacheID}.jpg` || 'default_image.jpg'} alt={product.itemName} className='w-full md:h-[400px] 2lg:h-[240px] 3lg:h-[400px] object-cover' />
                        <p className='absolute text-cyan-300 w-full bg-black/80 bottom-24 text-center font-karla py-2 font-semibold text-lg lg:opacity-0 lg:group-hover:opacity-100 duration-200'>
                          ${product.retailPrice}
                        </p>
                        <div className='w-full h-[100px] flex flex-col items-center justify-center'>
                          <h1 className='text-center text-cyan-600 font-semibold mt-1 font-karla w-[80%]'>{product.itemName}</h1>
                          <p className='text-sm text-black/60 font-medium'>Brand: <span className='text-cyan-800'>{product.brandName}</span></p>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className='text-red-800'>No Items Available</div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
