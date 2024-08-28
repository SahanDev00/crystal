import React, { useState } from 'react';
import Country from './Countries';

const Checkout = () => {
  // State to manage form inputs
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  // Example cart data
  const cartItems = [
    { id: 1, name: 'Product 1', price: 2500, quantity: 2 },
    { id: 2, name: 'Product 2', price: 4000, quantity: 1 },
  ];

  // Calculate order details
  const items = cartItems.length;
  const pieces = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className='w-full mx-auto mt-28'>
      <div className='w-full mx-auto mb-7 md:mb-20'>
        <h1 className='mt-10 md:mt-20 md:mb-5 text-2xl md:text-4xl text-black/80 font-bold text-center font-poppins'>Place Order</h1>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto w-[80%]'>
          <div className='mx-auto w-full'>
            <form className='w-full bg-cyan-400/20 mt-5 md:mt-10 border-white border-4 rounded-xl p-5'>
              <h1 className='text-2xl md:text-3xl font-bold text-center my-2 text-black/70 font-poppins'>Billing Details</h1>
              <div className='flex gap-6 my-6'>
                <input
                  className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='First Name'
                  name='firstName'
                  value={form.firstName}
                  onChange={handleInputChange}
                />
                <input
                  className='w-full mx-auto rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='Last Name'
                  name='lastName'
                  value={form.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <input
                className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                type="text"
                placeholder='Street Address'
                name='streetAddress'
                value={form.streetAddress}
                onChange={handleInputChange}
              />
              <div className='flex gap-6 my-6'>
                <input
                  className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='City'
                  name='city'
                  value={form.city}
                  onChange={handleInputChange}
                />
                <input
                  className='w-full mx-auto rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='State'
                  name='state'
                  value={form.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex gap-6'>
                <input
                  className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='Postal Code'
                  name='postalCode'
                  value={form.postalCode}
                  onChange={handleInputChange}
                />
                <Country
                  value={form.country}
                  onChange={(country) => setForm({ ...form, country })}
                />
              </div>
            </form>
          </div>
          {/* Right Side */}
          <div className='w-full mx-auto'>
            <div className='w-full flex items-center h-full justify-center md:mt-0 mt-5'>
              <div className='w-full md:w-[300px ] xl:w-[400px] mx-auto bg-cyan-400/20 rounded-xl p-6 text-white'>
                <h1 className='font-semibold text-2xl mb-1 font-poppins text-black/60'>Your Order</h1>
                <hr className='border border-gray-600 mb-5' />
                <div className='flex justify-between border-b border-cyan-500'>
                  <h1 className='font-semibold text-lg font-poppins text-black/80'>Items</h1>
                  <p className='font-poppins text-black/80'>{items} items, {pieces} pieces</p>
                </div>
                <div className='flex justify-between border-b border-cyan-500 mt-3'>
                  <h1 className='font-semibold text-lg font-poppins text-black/80'>Total</h1>
                  <p className='font-poppins text-black/80'>Rs. {total}</p>
                </div>
                <button className='w-full bg-cyan-500 py-2 rounded-xl font-poppins mt-7 hover:bg-cyan-400 text-white font-semibold'>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
