import React, { useEffect } from 'react'
import pic from '../images/heroPic.jpeg'
import { Helmet } from 'react-helmet';

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full mt-20'>
        <Helmet>
          <title>Crystal Mats | Contact Us</title>
        </Helmet>
      <div className=' h-full w-full relative  grid justify-center grid-cols-1 md:grid-cols-2 mt-10 sm:mt-10 md:mt-16'>
        {/* Form */}
        <div className='border-r-2 mt-10'>
          <div className='mx-auto w-[80%]'>
            <h1 className='text-4xl font-bold mb-3 text-black/80 underline '>Send Us a Message</h1>
            <form className='space-y-5 mt-10'>
              <div>
                <input id="name" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' type="text" placeholder='Name' required />
              </div>
              <div>
                <input id="email" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' type="email" placeholder='Email' required />
              </div>
              <div>
                <input id="phone" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' type="number" placeholder='Phone Number' required />
              </div>
              <div>
                <textarea id="message" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' placeholder='Message' rows="4" required></textarea>
              </div>
              <button type='submit' className='mt-4 px-4 py-2 bg-cyan-600 text-white font-semibold border duration-200 rounded-md w-[150px] hover:bg-cyan-600/80'>Send Message</button>
            </form>
          </div>
        </div>

        {/* Details */}
        <div className='mt-16 md:mt-0 relative bg-black'>
          <img src={pic} alt="" className='w-full h-[550px] object-cover bg-black opacity-60'/>
          <div className='mx-auto w-[80%] absolute top-0 left-5 mt-10'>
            <h1 className='text-4xl font-bold mb-5 text-cyan-100 underline'>Our Company</h1>
            <div className='w-full'>
              <div>
                <h1 className='text-cyan-200 text-2xl font-semibold'>Address</h1>
                <p className='text-white mt-2 text-lg font-semibold'>Lorem, ipsum dolor.<br/>Lorem, ipsum.<br/>lorem</p>
              </div>
              <div className='text-white mt-8 md:mt-4'>
                <h1 className='text-cyan-200 text-2xl font-semibold mb-2'>Customer Hotlines</h1>
                <p className='text-lg font-semibold'>HotLine: 0712-345-678</p>
                <p className='text-lg font-semibold'>Showroom: 071-234-5678</p> 
                <p className='text-lg font-semibold'>Workshop: 071-234-5678 / 071-234-5678</p>
                <p className='text-lg font-semibold'>Email: email@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs