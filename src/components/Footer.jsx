import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-cyan-200 relative py-10 font-overpass'>
      <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between px-6'>
        {/* About Us Section */}
        <div className='mb-8 md:mb-0 w-full md:w-[50%]'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>About Us</h2>
          <p className='text-gray-600 md:w-[70%]'>
            We are a company committed to providing the best quality products to our customers. 
            Our journey began with a vision to deliver exceptional value and service. 
            We believe in customer satisfaction and aim to exceed expectations with every purchase.
          </p>
        </div>
        
        {/* Useful Links */}
        <div className='mb-8 md:mb-0'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Useful Links</h2>
          <ul className='space-y-1'>
            <li><a href='/' className='text-gray-600 hover:text-gray-800'>Contact Us</a></li>
            <li><a href='/' className='text-gray-600 hover:text-gray-800'>Return Policies</a></li>
            <li><a href='/' className='text-gray-600 hover:text-gray-800'>Shipping Info</a></li>
            <li><a href='/' className='text-gray-600 hover:text-gray-800'>FAQs</a></li>
            <li><a href='/' className='text-gray-600 hover:text-gray-800'>Terms of Service</a></li>
            <li><a href='/' className='text-gray-600 hover:text-gray-800'>Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div className='mb-8 md:mb-0'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Contact Us</h2>
          <p className='text-gray-600 mb-1'>
            Email: info@example.com
          </p>
          <p className='text-gray-600 mb-1'>
            Phone: +123 456 7890
          </p>
          <p className='text-gray-600'>
            Address: 123 Main Street, Anytown, USA
          </p>
        </div>
        
        {/* Social Media Links */}
        <div className=''>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Follow Us</h2>
          <div className='flex space-x-4'>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaFacebookF /></a>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaTwitter /></a>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaInstagram /></a>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaLinkedinIn /></a>
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
