import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loader from '../../images/loader.gif';

const Product = () => {
  const { itemID } = useParams(); // Capture itemID from the URL
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(''); // State for main image

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://extremeadmin.worldpos.biz/Api/Item/${itemID}`, {
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
        const response = await fetch(`https://extremeadmin.worldpos.biz/Api/ImageData/${itemID}`, {
          headers: {
            'APIKey': apiKey,
          },
        });
        const data = await response.json();
        if (data.success) {
          setImages(data.data); // Set the fetched image data
          // Set the first image as the default main image
          if (data.data.length > 0) {
            setMainImage(`https://extremeadmin.worldpos.biz/Uploads/${data.data[0].imageID}.jpg`);
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

  if (!product) {
    return <div className='h-screen w-screen flex items-center justify-center'><img src={loader} className='w-[100px]' alt="" /></div>;
  }

  return (
    <div className='w-full mt-28 mb-10'>
      <h1 className='text-3xl text-center font-bold my-5 text-gray-600 font-roboto'>{product.itemName}</h1>
      <div className='w-[70%] grid grid-cols-2 mx-auto'>
        <div className='w-full mt-5'>
          <img 
            src={mainImage || `https://extremeadmin.worldpos.biz/Uploads/${product.cacheID}.jpg`} 
            className='w-[90%] mx-auto h-[500px] object-contain' 
            alt={product.itemName} 
          />
          <div className='flex justify-between mt-2'>
            {images.map((img, idx) => (
              <img 
                key={img.imageID} 
                src={`https://extremeadmin.worldpos.biz/Uploads/${img.imageID}.jpg`}  // Use imageID for thumbnail URL
                className='w-[160px] h-[160px] cursor-pointer' 
                alt={`Gallery ${idx}`} 
                onClick={() => setMainImage(`https://extremeadmin.worldpos.biz/Uploads/${img.imageID}.jpg`)} // Update main image on click
              />
            ))}
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-black/70 my-5 font-poppins'>{product.itemName}</h1>
          <p className='text-lg text-center w-[80%] text-black/60'>{product.itemDescription}</p>
          <p className='text-lg font-semibold my-5 font-poppins'>Rs.{product.retailPrice}</p>
          <button className='px-4 py-2 rounded-full font-poppins bg-cyan-600/70 font-semibold text-white hover:bg-cyan-600/80'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
