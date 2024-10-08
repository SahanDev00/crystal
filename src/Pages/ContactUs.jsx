import React, { useEffect, useRef } from 'react'
import pic from '../images/heroPic.jpeg'
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_2nmvxuu', // Your EmailJS service ID
      'template_7ccdwzy', // Your EmailJS template ID
      form.current,
      'iJLT9e20sQ1qsdX29' // Your EmailJS user ID
    )
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message, please try again.');
    });
    
    e.target.reset(); // Reset the form after submission
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full mt-20 font-overpass'>
        <Helmet>
          <title>K-Mats | Contact Us</title>
        </Helmet>
      <div className=' h-full w-full relative  grid justify-center grid-cols-1 md:grid-cols-2 mt-10 sm:mt-10 md:mt-16'>
        {/* Form */}
        <div className='mt-10'>
          <div className='mx-auto w-[80%]'>
            <h1 className='text-4xl font-bold mb-3 text-black/80 underline '>Send Us a Message</h1>
            <form ref={form} onSubmit={sendEmail} className='space-y-5 mt-10'>
              <div>
                <input id="name" name="from_name" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' type="text" placeholder='Name' required />
              </div>
              <div>
                <input id="email" name="email" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' type="email" placeholder='Email' required />
              </div>
              <div>
                <input id="phone" name="number" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' type="number" placeholder='Phone Number' required />
              </div>
              <div>
                <textarea id="message" name="message" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' placeholder='Message' rows="4" required></textarea>
              </div>
              <button type='submit' className='mt-4 px-4 py-2 bg-cyan-600 text-white font-semibold border duration-200 rounded-md w-[150px] hover:bg-cyan-600/80'>Send Message</button>
            </form>
          </div>
        </div>

        {/* Details */}
        <div className='mt-16 md:mt-0 relative bg-black'>
          <img src={pic} alt="" className='w-full h-[550px] object-cover bg-black opacity-60'/>
          <div className='mx-auto w-[80%] absolute top-0 left-5 mt-10'>
            <h1 className='text-4xl font-bold mb-5 text-cyan-200 underline'>Our Company</h1>
            <div className='w-full'>
              <div>
                <h1 className='text-cyan-200 text-2xl font-semibold'>Address</h1>
                <p className='text-white mt-2 text-lg font-semibold font-karla'>Lorem, ipsum dolor.<br/>Lorem, ipsum.<br/>lorem</p>
              </div>
              <div className='text-white mt-8 md:mt-4'>
                <h1 className='text-cyan-200 text-2xl font-semibold mb-2'>Customer Hotlines</h1>
                <p className='text-lg font-semibold font-karla'>HotLine: 0712-345-678</p>
                <p className='text-lg font-semibold font-karla'>Showroom: 071-234-5678</p> 
                <p className='text-lg font-semibold font-karla'>Workshop: 071-234-5678 / 071-234-5678</p>
                <p className='text-lg font-semibold font-karla'>Email: email@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs