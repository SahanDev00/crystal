import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loader from '../../images/loader.gif';
import { useCart } from '../Cart/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { itemID } = useParams(); // Capture itemID from the URL
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(''); // State for main image

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

    const fetchImageData = async () => {
      try {
        const response = await fetch(`https://kmatadmin.worldpos.biz/Api/ImageData/${itemID}`, {
          headers: {
            'APIKey': apiKey,
          },
        });
        const data = await response.json();
        if (data.success) {
          setImages(data.data); // Set the fetched image data
          // Set the first image as the default main image
          if (data.data.length > 0) {
            setMainImage(`https://kmatadmin.worldpos.biz/Uploads/${data.data[0].imageID}.jpg`);
          }
        } else {
          console.error('Error fetching image data:', data.errorMessage);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchProductDetails();
    fetchImageData();
  }, [itemID]);

  const { addToCart } = useCart();

  // Assuming addToCart adds the product to the cart correctly
  const handleAddToCart = (product) => {
   addToCart({
     ...product,
     quantity: 1,  // Ensure quantity is set properly
   });
   toast.success(product.itemName + ' Added To The Cart!', {
    position: "top-right",
    autoClose: 2000,
  });
 };

  if (!product) {
    return <div className='h-screen w-screen flex items-center justify-center'><img src={loader} className='w-[100px]' alt="" /></div>;
  }

  return (
    <div className='w-full mt-28 mb-10'>
      <h1 className='text-3xl text-center font-bold my-5 text-gray-600 font-overpass'>{product.itemName}</h1>
      <div className='w-[95%] md:w-[85%] xl:w-[80%] 3xl:w-[70%] grid grid-cols-1 lg:grid-cols-2 mx-auto'>
        <div className='w-full mt-5'>
          <img 
            src={mainImage || `https://kmatadmin.worldpos.biz/Uploads/${product.cacheID}.jpg`} 
            className='w-[90%] mx-auto md:h-[500px] object-contain' 
            alt={product.itemName} 
          />
          <div className='flex items-center justify-center mt-4 gap-2 flex-wrap'>
            {images.map((img, idx) => (
              <img 
                key={img.imageID} 
                src={`https://kmatadmin.worldpos.biz/Uploads/${img.imageID}.jpg`}  // Use imageID for thumbnail URL
                className='w-[60px] sm:w-[100px] md:w-[160px]  md:h-[160px] cursor-pointer object-contain' 
                alt={`Gallery ${idx}`} 
                onClick={() => setMainImage(`https://kmatadmin.worldpos.biz/Uploads/${img.imageID}.jpg`)} // Update main image on click
              />
            ))}
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-black/70 lg:block hidden lg:mt-0 lg:my-5 font-karla'>{product.itemName}</h1>
          <p className='text-[15px] md:text-lg text-center w-[90%] lg:w-[80%] text-black/60 font-karla mt-10 lg:mt-0'>{product.itemDescription}</p>
          <p className='text-lg font-semibold my-5 font-karla'>Rs.{product.retailPrice}</p>
          <button onClick={() => handleAddToCart(product)} className='px-4 py-2 rounded-full font-karla bg-cyan-600/70 font-semibold text-white hover:bg-cyan-600/80'>
            Add to Cart
          </button>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Product;
