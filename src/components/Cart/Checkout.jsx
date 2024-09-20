import React, { useState  } from 'react';
import { useCart } from './CartContext'; // Adjust the path as needed
import Country from './Countries';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';

const Checkout = () => {
  const { cartItems, calculateTotal, clearCart  } = useCart(); // Get your cart data dynamically from CartContext

  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  // Get form data dynamically
  const { firstName, lastName, streetAddress, city, state, postalCode, country } = formData;

  // Calculate order details
  const items = cartItems.length;
  const pieces = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = calculateTotal();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const customerId = Cookies.get('customerId') || sessionStorage.getItem('customerId');
  const handlePlaceOrder = async () => {
    const orderData = {
      orderID: "",  // Populate this with the order ID after placing the order
      customerID: customerId,  // Replace with actual customer ID if available
      customerName: `${firstName} ${lastName}`,
      shipAddressLine1: streetAddress,
      shipAttTo: streetAddress,
      shipCity: city,
      shipState: state,
      shipPostalCode: postalCode,
      shipCountry: country,
      itemCount: items,
      itemTotal: parseFloat(total),
      itemTotalDisplay: parseFloat(total),
      orderStatus: "PD",  // Default status
      remarks: "",  // Optional remarks
      action: {
        OrderActionID: "",
        OrderID: "",  // Populate if needed
        ActionDate: new Date().toISOString(),
        ActionType: "P",
        Remarks: "",
        UserID: ""  // Set this to the logged-in user's ID
      }
    };
    console.log('Order Data:', orderData);
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch('https://extremeadmin.worldpos.biz/Api/Order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'APIKey': apiKey
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Order placed successfully:', result);
        clearCart();
        // Handle successful order placement, e.g., redirect or show a message
      } else {
        console.error('Failed to place order:', response.statusText);
        // Handle failed order placement, e.g., show an error message
      }
    } catch (error) {
      console.error('Error placing order:', error);
      // Handle network errors, e.g., show an error message
    }
  };

  return (
    <div className='w-full mx-auto mt-28'>
      <Helmet>
        <title>Crystal Mats | Checkout</title>
      </Helmet>
      <div className='w-full mx-auto mb-7 md:mb-20'>
        <h1 className='mt-10 md:mt-20 md:mb-5 text-2xl md:text-4xl text-black/80 font-bold text-center font-overpass'>Place Order</h1>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto w-[80%]'>
          <div className='mx-auto w-full'>
            <form className='w-full bg-cyan-400/20 mt-5 md:mt-10 border-white border-4 rounded-xl p-5'>
              <h1 className='text-2xl md:text-3xl font-bold text-center my-2 text-black/70 font-overpass'>Billing Details</h1>
              <div className='flex gap-6 my-6'>
                <input
                  className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='First Name'
                  name='firstName'
                  value={firstName}
                  onChange={handleChange}
                />
                <input
                  className='w-full mx-auto rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='Last Name'
                  name='lastName'
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
              <input
                className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                type="text"
                placeholder='Street Address'
                name='streetAddress'
                value={streetAddress}
                onChange={handleChange}
              />
              <div className='flex gap-6 my-6'>
                <input
                  className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='City'
                  name='city'
                  value={city}
                  onChange={handleChange}
                />
                <input
                  className='w-full mx-auto rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='State'
                  name='state'
                  value={state}
                  onChange={handleChange}
                />
              </div>
              <div className='flex gap-6'>
                <input
                  className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-cyan-500 border-2 mb-2 mt-1'
                  type="text"
                  placeholder='Postal Code'
                  name='postalCode'
                  value={postalCode}
                  onChange={handleChange}
                />
                <Country
                  value={country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                />
              </div>
            </form>
          </div>
          {/* Right Side */}
          <div className='w-full mx-auto'>
            <div className='w-full flex items-center h-full justify-center md:mt-0 mt-5'>
              <div className='w-full md:w-[300px] xl:w-[400px] mx-auto bg-cyan-400/20 rounded-xl p-6 text-white'>
                <h1 className='font-semibold text-2xl mb-1 font-overpass text-black/60'>Your Order</h1>
                <hr className='border border-gray-600 mb-5' />
                <div className='flex justify-between border-b border-cyan-500'>
                  <h1 className='font-semibold text-lg font-overpass text-black/80'>Items</h1>
                  <p className='font-overpass text-black/80'>{items} items, {pieces} pieces</p>
                </div>
                <div className='flex justify-between border-b border-cyan-500 mt-3'>
                  <h1 className='font-semibold text-lg font-overpass text-black/80'>Total</h1>
                  <p className='font-overpass text-black/80'>Rs. {total}</p>
                </div>
                <button 
                  className='w-full bg-cyan-500 py-2 rounded-xl font-overpass mt-7 hover:bg-cyan-400 text-white font-semibold'
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
