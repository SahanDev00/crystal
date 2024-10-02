import React, { useState, useEffect, useRef} from 'react';
import {  FaSearch, FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { RiRobot2Fill } from "react-icons/ri";
import Chatbot from './Chatbot/Chatbot';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SmallChatbot from './Chatbot/SmallChatBot';
import Cookies from 'js-cookie';
import { useCart } from './Cart/CartContext';
import axios from 'axios';  // Import axios for API calls
import logo from '../images/logo2.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  const Navigate = useNavigate()
  const location = useLocation();
  const [isChatbotVisible, setChatbotVisible] = useState(false);
  const [isSmallChatbotVisible, setSmallChatbotVisible] = useState(true); // State for small chatbot visibility
  const { getTotalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [searchResults, setSearchResults] = useState([]); // Search results state
  const searchContainerRef = useRef(null);
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }

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

  const handleLogout = () => {
    // Clear session data
    sessionStorage.removeItem('customerId');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('lastName');
    sessionStorage.removeItem('email');
  
    // Clear cookies
    Cookies.remove('customerId');
    Cookies.remove('firstName');
    Cookies.remove('lastName');
    Cookies.remove('email');
    
    toast.success('Successfully logged out!', {
      position: "top-right",
      autoClose: 2000, // Automatically close after 3 seconds
    });
    setTimeout(() => {
      Navigate('/');
    }, 2000);
    // Redirect to login or home
  };
  

        // Check if the user is logged in by looking for customerDetails in cookies or sessionStorage
      const isLoggedIn = () => {
          const customerDetails = Cookies.get('customerId') || sessionStorage.getItem('customerId');
          return !!customerDetails;
      };

      const handleProfileClick = () => {
        if (isLoggedIn()) {
            Navigate('/account');
        } else {
            Navigate('/login');
        }
    };

      // Function to fetch search results
  const handleSearch = async (e) => {
    e.preventDefault();  // Prevent the default form submission
    if (searchQuery.trim() === '') return; // Avoid fetching with empty query

    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await axios.get(`https://kmatadmin.worldpos.biz/Api/Item?KeyW=${searchQuery}`,{
        headers: {
          'APIKey': apiKey,
        },
      });
      if (response.data.success) {
        setSearchResults(response.data.data);  // Update search results with the fetched data
        const results = response.data.data;
          if (results.length === 0) {
            Navigate('/no-products'); // Redirect to /noresults if no products found
          } else {
            setSearchResults(results); // Update search results with the fetched data
          }
      } else {
        console.error('Failed to fetch products:', response.data.errorMessage);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

    // Detect clicks outside search container to close the dropdown
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
          setSearchResults([]);  // Close the search results
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
  return (
    <div className={`w-full fixed top-0 duration-300 z-50 ${isActive('/checkout') ? 'bg-cyan-950' : ''} ${isActive('/') ? 'bg-cyan-950/90' : ''} ${isActive('/cart') || isActive('/account') || isActive('/product') || isActive('/contact-us') || isActive('/order-details') || isActive('/store') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? 'bg-white border-b' : ''} ${isActive('/about-us') ? 'bg-cyan-950' : ''}`}>
      <div className='sm:w-[90%] lg:w-[80%] h-[80px] flex items-center justify-between mx-auto'>
        {/*<h1 className='text-4xl text-cyan-500 hover:text-cyan-600 duration-300 font-bold cursor-pointer font-roboto'><Link to='/'>CG</Link></h1>*/}
        <Link to='/'><img src={logo} alt="" className='w-48 sm:w-52 lg:w-60'/></Link>
        <ul className='hidden md:flex gap-7 lg:gap-10'>
          <Link to='/' exact className={` font-overpass text-lg hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') || isActive('/about-us') ? 'text-white' : ''} ${isActive('/product') || isActive('/cart') || isActive('/account') || isActive('/contact-us') || isActive('/store')|| isActive('/my-orders') || isActive('/order-details') || isActive('/edit-profile') || isActive('/login') ? 'text-black/50' : ''} ${isActive('/') ? 'text-cyan-500' : ''}`}>Home</Link>
          <Link to='/store' className={` font-overpass text-lg hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') ? 'text-white' : ''} ${isActive('/cart') || isActive('/account') || isActive('/contact-us') || isActive('/store') || isActive('/my-orders') || isActive('/order-details') || isActive('/edit-profile') || isActive('/login') ? 'text-black/50' : ''}  ${isActive('/store') || isActive('/product') ? 'text-cyan-500' : ''} ${isActive('/') || isActive('/about-us') ? 'text-white' : ''}`}>Store</Link>
          <Link to='/about-us' className={` font-overpass text-lg hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/account') || isActive('/contact-us') || isActive('/my-orders') || isActive('/store') || isActive('/edit-profile') || isActive('/order-details') || isActive('/login') ? 'text-black/50' : ''} ${isActive('/about-us') ? 'text-cyan-500' : ''}  ${isActive('/') ? 'text-white' : ''}`}>About Us</Link>
          <Link to='/contact-us' className={` font-overpass text-lg hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') || isActive('/about-us') ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/account') || isActive('/store') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/order-details') || isActive('/login') ? 'text-black/50' : ''}  ${isActive('/contact-us') ? 'text-cyan-500' : ''}  ${isActive('/') ? 'text-white' : ''}`}>Contact Us</Link>
        </ul>
        <div className='flex gap-3 sm:gap-4 md:gap-5 items-center justify-center'>
          <div className='flex items-center justify-center group'>
            <FaSearch className={`group-hover:text-cyan-500 cursor-pointer duration-300 ${isActive('/') ? 'text-white/90' : ''} ${isActive('/checkout') || isActive('/about-us') ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/contact-us') || isActive('/account') || isActive('/order-details') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') || isActive('/store') ? "text-black/50" : ''}`} size={20} />
            <div className={`ml-3 w-[0px] duration-300 group-hover:w-[200px] rounded invisible group-hover:visible h-[30px] bg-white ${isActive('/about-us') || isActive('/product') || isActive('/checkout') || isActive('/cart') || isActive('/order-details') || isActive('/account') || isActive('/contact-us') || isActive('/store') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? "border" : ''}`}>
              <form className='flex justify-center items-center h-full w-full' onSubmit={handleSearch}>
                <input type="text" className='h-full pl-2 w-full rounded' placeholder='Search an item...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                 />
                <button type='submit'></button>
              </form>
            </div>
          </div>
          <div  className='relative group'>
            <FaUser onClick={handleProfileClick} className={`hover:text-cyan-500 cursor-pointer duration-300 mr-2 ${isActive('/checkout') || isActive('/') || isActive('/about-us')  ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/contact-us') || isActive('/store') ? "text-black/50" : ''} ${isActive('/account') || isActive('/order-details') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? 'text-cyan-500' : ''}`} size={20} />
            {
              isLoggedIn() && (
            <div className='w-[150px] z-20 py-5 translate-y-4 group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100 bg-white absolute -left-16 border invisible group-hover:visible hidden md:block'>
                    <ul className='w-full h-full space-y-3 flex flex-col justify-center pl-5'>
                        <Link to='/account' className='text-black/50 font-semibold cursor-pointer hover:text-black/70'>My Account</Link>
                        <Link to='/edit-profile' className='text-black/50 font-semibold cursor-pointer hover:text-black/70'>Edit Profile</Link>
                        <Link to='/my-orders' className='text-black/50 font-semibold cursor-pointer hover:text-black/70'>My Orders</Link>
                        <div onClick={handleLogout} className='text-black/50 font-semibold cursor-pointer hover:text-black/70'>Log Out</div>
                    </ul>
              </div>
              )
            }
          </div>
          <Link to='/cart' className='relative'>
          {getTotalItems() > 0 && (
            <p className='text-white bg-cyan-600/50 rounded-full px-2 absolute -top-4 -right-5'>{getTotalItems()}</p> 
            )}
            <FaCartShopping className={`hover:text-cyan-500 cursor-pointer duration-300 ${isActive('/product') || isActive('/contact-us') || isActive('/order-details') || isActive('/account') || isActive('/store') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? "text-black/50" : ''} ${isActive('/about-us') || isActive('/') ? 'text-white' : ''} ${isActive('/cart') || isActive('/checkout') ? 'text-cyan-500 ' : '' } `} size={20} />
          </Link>
          <div onClick={toggleMenu} className='md:hidden'>
            { !isMenu ? <IoMdMenu className={`hover:text-cyan-500 cursor-pointer duration-300 mr-2 ${isActive('/checkout') || isActive('/') || isActive('/about-us')  ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/contact-us') || isActive('/store') ? "text-black/50" : ''} ${isActive('/account') || isActive('/order-details') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? 'text-black/50' : ''}  `} size={30} /> : <IoMdClose className={`hover:text-cyan-500 cursor-pointer duration-300 mr-2 ${isActive('/checkout') || isActive('/') || isActive('/about-us')  ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/contact-us') || isActive('/store') ? "text-black/50" : ''} ${isActive('/account') || isActive('/order-details') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/login') ? 'text-black/50' : ''} `} size={30} /> }
          </div>
        </div>
      </div>

      { isMenu && (
          <div className='w-full h-[200px] duration-300'>
              <ul className='flex flex-col gap-2 justify-center items-center w-full h-full'>
                <Link to='/' exact className={` font-overpass text-lg hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') || isActive('/about-us') ? 'text-white' : ''} ${isActive('/product') || isActive('/cart') || isActive('/account') || isActive('/contact-us') || isActive('/store')|| isActive('/my-orders') || isActive('/order-details') || isActive('/edit-profile') || isActive('/login') ? 'text-black/50' : ''} ${isActive('/') ? 'text-cyan-500' : ''}`}>Home</Link>
                <Link to='/store' className={` font-overpass text-lg hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') ? 'text-white' : ''} ${isActive('/cart') || isActive('/account') || isActive('/contact-us') || isActive('/store') || isActive('/my-orders') || isActive('/order-details') || isActive('/edit-profile') || isActive('/login') ? 'text-black/50' : ''}  ${isActive('/store') || isActive('/product') ? 'text-cyan-500' : ''} ${isActive('/') || isActive('/about-us') ? 'text-white' : ''}`}>Store</Link>
                <Link to='/about-us' className={` font-overpass text-lg hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/account') || isActive('/contact-us') || isActive('/my-orders') || isActive('/store') || isActive('/edit-profile') || isActive('/order-details') || isActive('/login') ? 'text-black/50' : ''} ${isActive('/about-us') ? 'text-cyan-500' : ''}  ${isActive('/') ? 'text-white' : ''}`}>About Us</Link>
                <Link to='/contact-us' className={` font-overpass text-lg hover:text-cyan-500 duration-300 cursor-pointer ${isActive('/checkout') || isActive('/about-us') ? 'text-white' : ''} ${isActive('/cart') || isActive('/product') || isActive('/account') || isActive('/store') || isActive('/my-orders') || isActive('/edit-profile') || isActive('/order-details') || isActive('/login') ? 'text-black/50' : ''}  ${isActive('/contact-us') ? 'text-cyan-500' : ''}  ${isActive('/') ? 'text-white' : ''}`}>Contact Us</Link>
              </ul>
          </div>
        )
      }

      <button 
        onClick={toggleChatbot} 
        className='fixed bottom-4 left-4 bg-cyan-950 p-3 rounded-full'>
        <RiRobot2Fill size={30} className='text-white'/>
      </button>

      {isChatbotVisible && (
        <div className='bg-cyan-950'>
          <div className='relative'>
            <Chatbot onClose={toggleChatbot}/>
          </div>
        </div>
      )}
      {isSmallChatbotVisible && (
              <SmallChatbot
                onClose={handleClose} // Pass handleClose to SmallChatbot
              />
      )}
      {searchResults.length > 0 && (
        <div ref={searchContainerRef} className="absolute top-[80px] left-[50%] translate-x-[-50%] bg-white w-[80%] border rounded-md shadow-lg z-50">
          <ul>
            {searchResults.map((product) => (
              <Link to={`/product/${product.itemID}`} className='flex p-1'>
                <img className='w-14 border-b' src={`https://kmatadmin.worldpos.biz/Uploads/${product.cacheID}.jpg`} alt="" />
                <li key={product.id} className="p-3 border-b w-full hover:bg-gray-100">
                  {product.itemName} 
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Navbar;
