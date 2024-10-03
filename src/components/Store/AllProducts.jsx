import React, { useState, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loader from '../../images/loader.gif'
import { useCart } from '../Cart/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

 // Assuming addToCart adds the product to the cart correctly
 const handleAddToCart = (product) => {
  addToCart({
    ...product,
    quantity: 1,  // Ensure quantity is set properly
  });
  toast.success(product.itemName + ' Added To The Cart!', {
    toastId: 1,
    position: "top-right",
    autoClose: 2000,
  });
};

  const fetchCategories = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get('https://kmatadmin.worldpos.biz/Api/CategoryMain', {
      headers: {
        'APIKey': apiKey,
      },
    });
    return response.data.data;
  };
  
  const fetchProductsByCategory = async (categoryID) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get(`https://kmatadmin.worldpos.biz/Api/Item?CategoryMainID=${categoryID}`, {
      headers: {
        'APIKey': apiKey,
      },
    });
    return response.data.data;
  };

  // Fetch categories and products
  useEffect(() => {
    const getData = async () => {
      const categoryData = await fetchCategories();

      const productData = {};
      for (const category of categoryData) {
        productData[category.categoryMainID] = await fetchProductsByCategory(category.categoryMainID);
      }

      setCategories(categoryData);
      setProducts(productData);
      setLoading(false); // Stop loading
    };

    getData();
  }, []);

  if (loading) return <div className='h-[70vh] w-screen flex items-center justify-center'><img src={loader} className='w-[100px]' alt="" /></div>;

  return (
    <div className='w-full'>
      <h1 className='font-bold text-center my-10 text-3xl text-black/80 font-overpass'>Explore Our Products</h1>

      {categories.map(category => (
        <div key={category.categoryMainID} id={category.categoryMainName} className='w-[80%] mx-auto md:mt-20'>
          <h2 className='text-2xl font-semibold uppercase mb-3 text-cyan-900 font-overpass'>{category.categoryMainName}</h2>
          <div className='w-full h-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {products[category.categoryMainID]?.length > 0 ? (
            products[category.categoryMainID]?.map(product => (
              <div key={product.itemID} className='w-full  relative cursor-pointer hover:shadow-lg duration-150 shadow group'>
                <button onClick={() => handleAddToCart(product)} className='absolute right-3 top-3 border rounded-full p-3 text-cyan-300 bg-black/70 lg:hidden lg:group-hover:block hover:text-cyan-400'>
                  <FaCartPlus size={20} />
                </button>
                <Link to={`/product/${product.itemID}`} className=''>
                  <img src={`https://kmatadmin.worldpos.biz/Uploads/${product.cacheID}.jpg` || 'default_image.jpg'} alt={product.itemName} className='w-full md:h-[400px] object-cover' />
                  <p className='absolute text-cyan-300 w-full bg-black/80 bottom-24 text-center font-karla py-2 font-semibold text-lg lg:opacity-0 lg:group-hover:opacity-100 duration-200'>
                    Rs.{product.retailPrice}
                  </p>
                  <div className='w-full h-[100px] flex flex-col items-center justify-center'>
                    <h1 className='text-center text-cyan-600 font-semibold mt-2 font-karla w-[80%]'>{product.itemName}</h1>
                  </div>
                </Link>
              </div>
            ))) : (
              <div className='text-red-600'>No Items Available</div>
            )}
          </div>
        </div>
      ))}
      {/* <ToastContainer/> */}
    </div>
  );
};

export default AllProducts;
