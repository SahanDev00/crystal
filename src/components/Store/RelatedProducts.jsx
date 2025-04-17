import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import { toast } from 'react-toastify';
import { FaCartPlus } from 'react-icons/fa';

const RelatedProducts = () => {
  const { itemID } = useParams(); // Capture itemID from the URL
  const [product, setProduct] = useState(null);
  const [subProducts, setSubProducts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://kmatadmin.worldpos.biz/Api/Item/${itemID}`, {
          headers: {
            'APIKey': apiKey,
          },
        });
        const data = await response.json();

        if (data.success) {
          setProduct(data.data); // Set the fetched product details
        } else {
          console.error('Error fetching product details:', data.errorMessage);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchProductDetails();
  }, [itemID]);

  useEffect(() => {
    if (product?.categorySubID) {
      const fetchSubProducts = async () => {
        try {
          const response = await fetch(
            `https://kmatadmin.worldpos.biz/Api/Item?CategorySubID=${product.categorySubID}`,
            {
              headers: {
                'APIKey': process.env.REACT_APP_API_KEY,
              },
            }
          );
          const data = await response.json();

          if (data.success) {
            setSubProducts(data.data);
          } else {
            console.error('Error fetching sub-products:', data.errorMessage);
          }
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };

      fetchSubProducts();
    }
  }, [product]);

  const { addToCart } = useCart();

  const handleAddToCart = (subProduct) => {
    addToCart({
      ...subProduct,
      quantity: 1,
    });
    toast.success(`${subProduct.itemName} Added To The Cart!`, {
      toastId: 1,
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };
  

  return (
    <div className="w-full min-h-[550px] py-5">
        <div className='w-[90%] mx-auto pb-5'>
          <h2 className='text-3xl font-semibold uppercase mb-1 text-cyan-900 font-overpass'>Related Products</h2>
        </div>
      <div className="w-[90%] h-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {subProducts.map((subProduct) => (
            <div
            key={subProduct.itemID}
            className="w-full mb-10 relative cursor-pointer hover:shadow-lg duration-150 shadow group"
            >
              {/* 
            <button
              onClick={() => handleAddToCart(subProduct)}
              className="absolute right-3 top-3 border rounded-full p-3 text-cyan-300 bg-black/70 lg:hidden lg:group-hover:block hover:text-cyan-400"
            >
              <FaCartPlus size={20} />
            </button>*/}

            <Link to={`/product/${subProduct.itemID}`} onClick={scrollUp}>
              <img
                src={
                  subProduct.cacheID
                    ? `https://kmatadmin.worldpos.biz/Uploads/${subProduct.cacheID}.jpg`
                    : 'default_image.jpg'
                }
                alt={subProduct.itemName}
                className="w-full md:h-[400px] 2lg:h-[240px] 3lg:h-[400px] object-cover"
              />
              {/*<p className="absolute text-cyan-300 w-full bg-black/80 bottom-24 text-center font-karla py-2 font-semibold text-lg lg:opacity-0 lg:group-hover:opacity-100 duration-200">
                ${subProduct.retailPrice}
              </p>*/}
              <div className="w-full h-[100px] flex flex-col items-center justify-center">
                <h1 className="text-center text-cyan-600 font-semibold mt-1 font-karla w-[80%]">
                  {subProduct.itemName}
                </h1>
                <p className="text-sm text-black/60 font-medium">
                  Brand: <span className="text-cyan-800">{subProduct.brandName}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
