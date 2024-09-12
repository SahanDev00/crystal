import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';

const OrderDetails = () => {

  const [orderItems, setOrderItems] = useState([]);
  const orderId = 'ORD00001'; // You can pass this dynamically if needed

  useEffect(() => {
    const fetchOrderItems = async () => {
      const api = `http://admin.extreme.exesmart.com/Api/OrderItem?Page=0&OrderID=${orderId}`;
      
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(api, {
          method: 'GET',
          headers: {
            'APIKey': apiKey,
          },
        });
        const result = await response.json();
        
        if (response.ok && result.success) {
          setOrderItems(result.data);
        } else {
          console.error('Error fetching order items:', result.errorMessage);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrderItems();
  }, [orderId]);

  if (orderItems.length === 0) {
    return <div className='text-white'>No order details available</div>;
  }

  return (
    <div className='w-[90%] min-h-[750px] mb-5 mx-auto relative mt-24'>
        <Helmet>
          <title>Crystal Mats | Order Details</title>
        </Helmet>
        <h1 className='text-3xl text-center my-8 font-bold text-black/70 font-poppins'>Order Details : 0987643</h1>
        <div className='overflow-x-auto container mx-auto'>
        <table className='min-w-full bg-cyan-400/20 text-black/60 border border-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-2 border-b border-gray-200 text-left font-poppins'>Product</th>
              <th className='px-4 py-2 border-b border-gray-200 text-left font-poppins'>Quantity</th>
              <th className='px-4 py-2 border-b border-gray-200 text-left font-poppins'>Price</th>
              <th className='px-4 py-2 border-b border-gray-200 text-left font-poppins'>Discount</th>
              <th className='px-4 py-2 border-b border-gray-200 text-left font-poppins'>Total</th>
            </tr>
          </thead>
          <tbody>
          {orderItems.map(item => (
              <tr key={item.orderItemID}>
                <td className='px-4 py-2 border-b border-gray-200'>
                  <img className='w-[60px] inline-block mr-5' src={`http://extreme.exesmart.com/Uploads/${item.itemID}.jpg`} alt={item.itemName} />
                  {item.itemName}
                </td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{item.itemQty}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{item.itemPriceDisplay}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{item.itemDiscountDisplay}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{item.lineTotalDisplay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderDetails