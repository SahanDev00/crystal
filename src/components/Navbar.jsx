import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaTimes } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { RiRobot2Fill } from "react-icons/ri";
import Chatbot from './Chatbot/Chatbot';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isChatbotVisible, setChatbotVisible] = useState(false);

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

  return (
    <div className='w-full fixed top-0 bg-gradient-to-b z-50 from-black/90 to-black/50'>
      <div className='w-[80%] h-[80px] flex items-center justify-between mx-auto'>
        <h1 className='text-4xl text-yellow-500 hover:text-yellow-400 duration-300 font-bold cursor-pointer'>CG</h1>
        <ul className='flex gap-10'>
          <Link to='/' exact className={`font-semibold text-white/90 text-xl hover:text-yellow-500 duration-300 cursor-pointer ${isActive('/') ? 'text-yellow-500' : ''}`}>Home</Link>
          <Link to='/store' className={`font-semibold text-white/90 text-xl hover:text-yellow-500 duration-300 cursor-pointer ${isActive('/store') ? 'text-yellow-500' : ''}`}>Store</Link>
          <Link to='/about-us' className={`font-semibold text-white/90 text-xl hover:text-yellow-500 duration-300 cursor-pointer ${isActive('/about-us') ? 'text-yellow-500' : ''} `}>About Us</Link>
          <Link to='/contact-us' className={`font-semibold text-white/90 text-xl hover:text-yellow-500 duration-300 cursor-pointer ${isActive('/contact-us') ? 'text-yellow-500' : ''} `}>Contact Us</Link>
        </ul>
        <div className='flex gap-5 items-center justify-center'>
          <div className='flex items-center justify-center group'>
            <FaSearch className='hover:text-yellow-500 cursor-pointer duration-300 text-white/90' size={20} />
            <div className='ml-3 w-[0px] duration-300 group-hover:w-[200px] invisible group-hover:visible h-[30px] bg-white'>
              <input type="text" className='h-full pl-2 w-full' />
            </div>
          </div>
          <FaUser className='hover:text-yellow-500 cursor-pointer duration-300 mr-2 text-white/90' size={20} />
          <FaCartShopping className='hover:text-yellow-500 cursor-pointer duration-300 text-white/90' size={20} />
        </div>
      </div>

      <button 
        onClick={toggleChatbot} 
        className='fixed bottom-4 left-4 bg-black p-3 rounded-full'>
        <RiRobot2Fill size={30} className='text-white'/>
      </button>

      {isChatbotVisible && (
        <div className=''>
          <div className='relative'>
            <button 
              onClick={toggleChatbot} 
              className='absolute z-50 top-10 right-10 text-white'>
              <FaTimes size={20} />
            </button>
            <Chatbot />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
