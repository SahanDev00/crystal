import React, { useEffect, useState  } from 'react';
import { useCart } from './CartContext'; // Adjust the path as needed
import Country from './Countries';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Checkout = () => {
  const { cartItems, calculateTotal, clearCart  } = useCart(); // Get your cart data dynamically from CartContext
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      orderStatus: "P",  // Default status
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
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch('https://kmatadmin.worldpos.biz/Api/Order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'APIKey': apiKey
        },
        body: JSON.stringify(orderData),
      });

      

      if (response.ok) {
        const responseData = await response.json(); // Parse the JSON response
        const orderID = responseData.data.orderID; // Get the order ID from the response

        for (const item of cartItems) {
          const orderItemData = {
            orderID: orderID,
            itemID: item.itemID, // Use the item ID from your cart item
            remarks: "", // Any optional remarks
            itemPrice: parseFloat(item.retailPrice),
            itemDiscount: 0,  // Set this if applicable
            itemQty: parseInt(item.quantity, 10),
            paymentStatus: "NP",  // Customize as needed
            transaction: "", // Customize as needed
            returnURL: "", // Customize the return URL
            itemCode: item.itemCode, // Add the item code if available
            itemName: item.name, // Item name from your cart item
            lineTotal: parseFloat(item.retailPrice) * parseInt(item.quantity, 10),
            itemPriceDisplay: item.retailPrice,
            itemDiscountDisplay: "-",
            remarksDisplay: "",
            lineTotalDisplay: (parseFloat(item.retailPrice) * parseInt(item.quantity, 10)).toFixed(2)
          };
                    // Send each item to the OrderItem API
                    const orderItemResponse = await fetch('https://kmatadmin.worldpos.biz/Api/OrderItem', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'APIKey': apiKey
                      },
                      body: JSON.stringify(orderItemData)
                    });
            
            
                    if (!orderItemResponse.ok) {
                      alert(`Failed to place order item: ${item.name}`);
                    }
        }

      // Send email using EmailJS
        const emailData = {
          to_name: `${firstName} ${lastName}`, // recipient's name
          from_name: 'Extreme Computers', // your name or your business name
          order_id: orderID // order ID from the response
        };

        emailjs.send('service_2nmvxuu', 'template_7ccdwzy', emailData, "iJLT9e20sQ1qsdX29")

        toast.success('Order placed successfully!', {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          clearCart();
          navigate('/')
        }, 2000);
        // Handle successful order placement, e.g., redirect or show a message
      } else {
        toast.error('Failed to place order!', {
          position: "top-right",
          autoClose: 2000,
        });
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
        <title>K-Mats | Checkout</title>
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
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Checkout;
