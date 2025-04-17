import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full bg-cyan-200 relative py-10 font-overpass'>
      <div className='w-[90%] 2lg:w-[95%] 3lg:w-[90%] mx-auto flex flex-col md:flex-row justify-between px-6'>
        {/* About Us Section */}
        <div className='mb-8 md:mb-0 w-full md:w-[50%]'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>About Us</h2>
          <p className='text-gray-600 md:w-[70%]'>
          At K-Mats, we are a leading exporter of premium rubber mats, supplying high-quality, ISO-certified products to over 70 countries worldwide. Headquartered in Brisbane, Australia, our manufacturing operations in Sri Lanka and India ensure superior craftsmanship and durability
          <Link to='/about-us'>
            <span className='font-medium hover:font-semibold cursor-pointer text-cyan-700'> ...See more</span>
          </Link>
          </p>
        </div>
        
        {/* Useful Links */}
        <div className='mb-8 md:mb-0 pr-7'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Useful Links</h2>
          <ul className='space-y-1'>
            <Link to='/contact-us'>
              <li className='text-gray-600 hover:text-gray-800'>Contact Us</li>
            </Link>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div className='mb-8 md:mb-0'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Contact Us</h2>
          <p className='text-gray-600 mb-1'>
            Email: sales@kmat-au.com
          </p>
          <p className='text-gray-600'>
            Address: Brisbane
          </p>
          <p className='text-gray-600 mb-1'>
            Australia: 0061403370767
          </p>
          <p className='text-gray-600 mt-3'>
            Address: Sri Lanka
          </p>
          <p className='text-gray-600 mb-1'>
            Sri Lanka: 0716616471
          </p>
          
        </div>
        
        {/* Social Media Links */}
        <div className=''>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Follow Us</h2>
          <div className='flex space-x-4'>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaFacebookF /></a>
            {/*<a href='/' className='text-gray-600 hover:text-gray-800'><FaTwitter /></a>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaInstagram /></a>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaLinkedinIn /></a>*/}
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className='border-t border-gray-300 mt-8 pt-4'>
        <p className='text-center text-gray-600 text-sm font-karla'>
          © 2024 K-Mats. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
