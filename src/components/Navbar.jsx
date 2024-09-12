import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaTimes } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { RiRobot2Fill } from "react-icons/ri";
import Chatbot from './Chatbot/Chatbot';
import { Link, useLocation } from 'react-router-dom';
import SmallChatbot from './Chatbot/SmallChatBot';

const Navbar = () => {
  const location = useLocation();
  const [isChatbotVisible, setChatbotVisible] = useState(false);
  const [isSmallChatbotVisible, setSmallChatbotVisible] = useState(true); // State for small chatbot visibility

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible);
  };

  useEffect(() => {
    if (isChatbotVisible) {
      // Prevent background scrolling when chatbot is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when chatbot is closed
      document.body.style.overflow = 'auto';
    }

    // Cleanup effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isChatbotVisible]);

  const handleClose = () => {
    setSmallChatbotVisible(false);
  };


  return (
    <div className={`w-full fixed top-0 duration-300 z-50 ${isActive('/checkout') ? 'bg-cyan-950' : ''} ${isActive('/') ? 'bg-cyan-950/90' : ''} ${isActive('/cart') || isActive('/account') || isActive('/product') || isActive('/contact-us') || isActive('/order-details') || isActive('/store') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? 'bg-white border-b' : ''} ${isActive('/about-us') ? 'bg-cyan-950' : ''}`}>
      <div className='w-[80%] h-[80px] flex items-center justify-between mx-auto'>
        <h1 className='text-4xl text-cyan-500 hover:text-cyan-600 duration-300 font-bold cursor-pointer font-roboto'><Link to='/'>CG</Link></h1>
        <ul className='flex gap-10'>
          <Link to='/' exact className={` font-karla  text-xl hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') || isActive('/about-us') ? 'text-white' : ''} ${isActive('/product') || isActive('/cart') || isActive('/account') || isActive('/contact-us') || isActive('/store')|| isActive('/my-orders') || isActive('/order-details') || isActive('/edit-profile') || isActive('/login') ? 'text-black/50' : ''} ${isActive('/') ? 'text-cyan-500' : ''}`}>Home</Link>
          <Link to='/store' className={` font-karla text-xl hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') ? 'text-white' : ''} ${isActive('/cart') || isActive('/account') || isActive('/contact-us') || isActive('/store') || isActive('/my-orders') || isActive('/order-details') || isActive('/edit-profile') || isActive('/login') ? 'text-black/50' : ''}  ${isActive('/store') || isActive('/product') ? 'text-cyan-500' : ''} ${isActive('/') || isActive('/about-us') ? 'text-white' : ''}`}>Store</Link>
          <Link to='/about-us' className={` font-karla text-xl hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/account') || isActive('/contact-us') || isActive('/my-orders') || isActive('/store') || isActive('/edit-profile') || isActive('/order-details') || isActive('/login') ? 'text-black/50' : ''} ${isActive('/about-us') ? 'text-cyan-500' : ''}  ${isActive('/') ? 'text-white' : ''}`}>About Us</Link>
          <Link to='/contact-us' className={` font-karla text-xl hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') || isActive('/about-us') ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/account') || isActive('/store') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/order-details') || isActive('/login') ? 'text-black/50' : ''}  ${isActive('/contact-us') ? 'text-cyan-500' : ''}  ${isActive('/') ? 'text-white' : ''}`}>Contact Us</Link>
        </ul>
        <div className='flex gap-5 items-center justify-center'>
          <div className='flex items-center justify-center group'>
            <FaSearch className={`group-hover:text-cyan-500 cursor-pointer duration-300 ${isActive('/') ? 'text-white/90' : ''} ${isActive('/checkout') || isActive('/about-us') ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/contact-us') || isActive('/account') || isActive('/order-details') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') || isActive('/store') ? "text-black/50" : ''}`} size={20} />
            <div className={`ml-3 w-[0px] duration-300 group-hover:w-[200px] rounded invisible group-hover:visible h-[30px] bg-white ${isActive('/about-us') || isActive('/product') || isActive('/checkout') || isActive('/cart') || isActive('/order-details') || isActive('/account') || isActive('/contact-us') || isActive('/store') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? "border" : ''}`}>
              <form className='flex justify-center items-center h-full w-full'>
                <input type="text" className='h-full pl-2 w-full rounded' placeholder='Search an item...' />
                <button type='submit'></button>
              </form>
            </div>
          </div>
          <div className='relative group'>
            <FaUser className={`hover:text-cyan-500 cursor-pointer duration-300 mr-2 ${isActive('/checkout') || isActive('/') || isActive('/about-us')  ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/contact-us') || isActive('/store') ? "text-black/50" : ''} ${isActive('/account') || isActive('/order-details') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? 'text-cyan-500' : ''}`} size={20} />
            <div className='w-[150px] z-20 py-5 translate-y-4 group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100 bg-white absolute -left-16 border invisible group-hover:visible'>
                    <ul className='w-full h-full space-y-3 flex flex-col justify-center pl-5'>
                        <Link to='/account' className='text-black/50 font-semibold cursor-pointer hover:text-black/70'>My Account</Link>
                        <Link to='/edit-profile' className='text-black/50 font-semibold cursor-pointer hover:text-black/70'>Edit Profile</Link>
                        <Link to='/my-orders' className='text-black/50 font-semibold cursor-pointer hover:text-black/70'>My Orders</Link>
                        <Link to='/login' className='text-black/50 font-semibold cursor-pointer hover:text-black/70'>Log Out</Link>
                    </ul>
              </div>
          </div>
          <Link to='/cart'>
            <FaCartShopping className={`hover:text-cyan-500 cursor-pointer duration-300 ${isActive('/product') || isActive('/contact-us') || isActive('/order-details') || isActive('/account') || isActive('/store') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? "text-black/50" : ''} ${isActive('/about-us') || isActive('/') ? 'text-white' : ''} ${isActive('/cart') || isActive('/checkout') ? 'text-cyan-500 ' : '' } `} size={20} />
          </Link>
        </div>
      </div>

      <button 
        onClick={toggleChatbot} 
        className='fixed bottom-4 left-4 bg-cyan-950 p-3 rounded-full'>
        <RiRobot2Fill size={30} className='text-white'/>
      </button>

      {isChatbotVisible && (
        <div className='bg-cyan-950'>
          <div className='relative'>
            <button 
              onClick={toggleChatbot} 
              className='absolute z-50 top-10 right-10 text-white'>
              <FaTimes size={20} />
            </button>
            <Chatbot/>
          </div>
        </div>
      )}
      {isSmallChatbotVisible && (
              <SmallChatbot
                onClose={handleClose} // Pass handleClose to SmallChatbot
              />
      )}
    </div>
  );
}

export default Navbar;
