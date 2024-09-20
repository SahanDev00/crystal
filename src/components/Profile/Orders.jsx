import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const customerId = Cookies.get('customerId') || sessionStorage.getItem('customerId');

  useEffect(() => {
    // Fetch order data from API
    const fetchOrders = async () => {
      const api = `https://extremeadmin.worldpos.biz/Api/Order?CustomerID=${customerId}`;
      
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(api,  {
          method: 'GET',
          headers: {
            'APIKey': apiKey,
          },});
        const result = await response.json();
        
        if (response.ok && result.success) {
          setOrders(result.data);
        } else {
          console.error('Error fetching orders:', result.errorMessage);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrders();
  }, [customerId]);

  if (orders.length === 0) {
    return <div className='h-[85vh] w-[80%] mx-auto relative mt-24'>
      <h1 className='font-semibold mt-5'>You Don't Have Orders Yet!!!</h1>
    </div>
  }

  return (
    <div className='w-[90%] md:min-h-[700px] lg:min-h-[650px] xl:min-h-[700px] 2xl:min-h-[800px] relative mx-auto px-4 py-8 mb-5 mt-20'>
        <Helmet>
          <title>Crystal Mats | My Orders</title>
        </Helmet>
      <h1 className='text-2xl font-bold mb-5 text-black/70 font-poppins'>Track My Orders</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-cyan-400/20 text-black/60 border border-gray-200'>
          <thead>
            <tr>
              <th className='px-4 text-left py-2 border-b border-gray-200 font-poppins'>Order ID</th>
              <th className='px-4 text-left py-2 border-b border-gray-200 font-poppins'>Address</th>
              <th className='px-4 text-left py-2 border-b border-gray-200 font-poppins'>Date</th>
              <th className='px-4 text-left py-2 border-b border-gray-200 font-poppins'>Total</th>
              <th className='px-4 text-left py-2 border-b border-gray-200 font-poppins'>Status</th>
              <th className='px-4 text-left py-2 border-b border-gray-200 font-poppins'>Paid Status</th>
              <th className='px-4 text-left py-2 border-b border-gray-200 font-poppins'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.orderId}>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.orderID}</td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.addressDisplay}</td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.orderDateDisplay}</td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.itemTotalDisplay}</td>
                <td className={`px-4 py-2 border-b border-gray-200 font-poppins ${order.orderStatusClass === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {order.orderStatusText}
                </td>
                <td className={`px-4 font-poppins py-2 border-b border-gray-200 ${order.paidStatusClass === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {order.paidStatusText}
                </td>
                <td className='px-4 font-poppins py-2 border-b border-gray-200'>
                    <Link to={`/order-details/${order.orderID}`}>
                        <button className='bg-cyan-500 font-poppins text-white px-4 py-2 rounded hover:bg-cyan-400'>
                            View
                        </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
