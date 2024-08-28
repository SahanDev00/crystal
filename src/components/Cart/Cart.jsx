import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "../../images/logo.PNG";
import pic from '../../images/rug.png'
import pic1 from '../../images/rug1.jpeg'
import pic2 from '../../images/rug3.jpeg'
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: '25.00', quantity: 2, image: pic1 },
    { id: 2, name: 'Product 2', price: '40.00', quantity: 1, image: pic2 },
    { id: 3, name: 'Product 3', price: '60.00', quantity: 3, image: pic },
    { id: 4, name: 'Product 4', price: '15.00', quantity: 4, image: pic1 },
    { id: 5, name: 'Product 5', price: '35.00', quantity: 1, image: pic },
  ]);

  const formatPrice = (price) => {
    const cleanedPrice = price.replace(/[^0-9.]/g, '');
    const num = parseFloat(cleanedPrice);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(formatPrice(item.price)) * item.quantity;
      return total + itemPrice;
    }, 0).toFixed(2);
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Quotation', 14, 28);
    doc.addImage(logo, "PNG", 5, 5, 45, 0); // Add your company logo

    const tableColumn = ['Product', 'Quantity', 'Price', 'Total'];
    const tableRows = [];

    cartItems.forEach(item => {
      const itemData = [
        item.name,
        item.quantity,
        `$${formatPrice(item.price)}`,
        `$${(parseFloat(formatPrice(item.price)) * item.quantity).toFixed(2)}`
      ];
      tableRows.push(itemData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 30 });

    const total = calculateTotal();
    doc.text(`Total: $${total}`, 14, doc.previousAutoTable.finalY + 10);

    doc.save('crystal_quotation.pdf');
  };

  return (
    <div className="w-[95%] mx-auto mt-24 lg:min-h-[600px] xl:min-h-[730px] relative py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black/70 text-center font-poppins">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-black/70 ml-10 md:ml-40 text-sm md:text-xl font-poppins'>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between mb-4 p-4 border-b">
                <div className="flex items-center w-full">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div className='flex items-center justify-between w-full'>
                    <div>
                        <h2 className="sm:text-xl text-cyan-700 font-semibold font-poppins">{item.name}</h2>
                        <p className="text-black/70 font-poppins text-sm sm:text-[16px]">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="bg-gray-600 text-white py-1 px-2 rounded font-poppins text-xs sm:text-[16px]"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2 text-black/70 font-poppins text-sm sm:text-[16px]">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="bg-gray-600 text-white py-1 px-2 rounded font-poppins text-xs sm:text-[16px]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right flex justify-center items-center ml-10">
                  <p className="text-sm sm:text-lg text-black/70 font-semibold font-poppins">${formatPrice(item.price)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end mt-4">
            <p className="text-lg sm:text-xl text-black/70 font-semibold font-poppins mr-4">Total: ${calculateTotal()}</p>
            <Link to='/checkout'>
                <button className="bg-cyan-500 text-white py-2 px-4 rounded font-poppins">Checkout</button>
            </Link>
          </div>
          <div className="flex items-center justify-end mt-4">
            <button onClick={generatePDF} className="bg-green-500 text-white py-2 px-4 rounded font-poppins">Download Quotation</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
