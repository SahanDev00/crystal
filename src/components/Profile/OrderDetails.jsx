import React from 'react'
import pic from '../../images/rug4.jpeg'
import { Helmet } from 'react-helmet';

const OrderDetails = () => {

    const orders = [
        {
            product: 'Cow Mat',
            pic: pic,
            quantity: '4',
            price: '$150.00',
            discount: '0',
            total: '$150.00'
          },
          {
            product: 'Rug',
            pic: pic,
            quantity: '1',
            price: '$150.00',
            discount: '0',
            total: '$150.00'
          },
          {
            product: 'Cow Mat 2',
            pic: pic,
            quantity: '4',
            price: '$150.00',
            discount: '$50.00',
            total: '$100.00'
          },
        {
          product: 'Rug 2',
          pic: pic,
          quantity: '1',
          price: '$150.00',
          discount: '0',
          total: '$150.00'
        },
      ];

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
            {orders.map(order => (
              <tr key={order.id}>
                <td className='px-4 py-2 border-b text-left border-gray-200'><img className='w-[60px] inline-block mr-5' src={order.pic} alt="" />{order.product}</td>
                <td className='px-4 py-2 border-b text-left border-gray-200 font-poppins'>{order.quantity}</td>
                <td className='px-4 py-2 border-b text-left border-gray-200 font-poppins'>{order.price}</td>
                <td className='px-4 py-2 border-b text-left border-gray-200 font-poppins'>{order.discount}</td>
                <td className='px-4 py-2 border-b text-left border-gray-200 font-poppins'>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderDetails