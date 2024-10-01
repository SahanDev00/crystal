import React from 'react';
import { useCart } from './CartContext'; // Adjust the path as needed
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "../../images/logo.PNG";
import { Helmet } from 'react-helmet';
import { useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, calculateTotal, removeFromCart } = useCart();

  // Ensure cartItems is an array and log its structure
  console.log(cartItems); // Ensure full product data is logged, not just quantity


  const formatPrice = (price) => parseFloat(price).toFixed(2);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Quotation', 14, 28);
    doc.addImage(logo, "PNG", 5, 5, 45, 0); // Add your company logo

    const tableColumn = ['Product', 'Quantity', 'Price', 'Total'];
    const tableRows = [];

    cartItems.forEach(item => {
      // Ensure that each item has necessary properties
      if (item.itemName && item.retailPrice && item.quantity) {
        const itemData = [
          item.itemName,
          item.quantity,
          `$${formatPrice(item.retailPrice)}`,
          `$${(parseFloat(item.retailPrice) * item.quantity).toFixed(2)}`
        ];
        tableRows.push(itemData);
      }
    });

    doc.autoTable(tableColumn, tableRows, { startY: 30 });

    const total = calculateTotal();
    doc.text(`Total: $${formatPrice(total)}`, 14, doc.previousAutoTable.finalY + 10);

    doc.save('quotation.pdf');
  };

      // Function to check if the user is logged in
      const isLoggedIn = () => {
        const customerDetails = Cookies.get('customerId') || sessionStorage.getItem('customerId');
        return !!customerDetails;
      };

  const handleCheckout = () => {
    if (isLoggedIn()) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="w-[95%] mx-auto mt-24 lg:min-h-[600px] xl:min-h-[730px] relative py-10">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black/70 text-center font-overpass">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-black/70 ml-10 md:ml-40 text-sm md:text-xl font-overpass'>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.itemID} className="flex justify-between mb-4 p-4 border-b">
                <div className="flex items-center w-full">
                  <img src={`https://kmatadmin.worldpos.biz/Uploads/${item.cacheID}.jpg`} alt={item.itemName} className="w-16 h-16 object-cover mr-4" />
                  <div className='flex items-center justify-between w-full'>
                    <div>
                      <h2 className="sm:text-xl text-cyan-700 font-semibold font-overpass">{item.itemName}</h2>
                      <p className="text-black/70 font-overpass text-sm sm:text-[16px]">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.itemID, -1)}
                        className="bg-gray-600 text-white py-1 px-2 rounded font-overpass text-xs sm:text-[16px]"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2 text-black/70 font-overpass text-sm sm:text-[16px]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.itemID, 1)}
                        className="bg-gray-600 text-white py-1 px-2 rounded font-overpass text-xs sm:text-[16px]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right flex justify-center items-center ml-10">
                  <p className="text-sm sm:text-lg text-black/70 font-semibold font-overpass">${formatPrice(item.retailPrice)}</p>
                </div>
                <div className="text-right ml-4 flex items-center">
                  <button
                    onClick={() => removeFromCart(item.itemID)}
                    className="bg-red-500 text-white py-1 px-2 rounded font-overpass text-xs sm:text-[16px]"
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end mt-4">
            <p className="text-lg sm:text-xl text-black/70 font-semibold font-overpass mr-4">Total: ${formatPrice(calculateTotal())}</p>
          </div>
          <div onClick={handleCheckout} className="flex items-center justify-end mt-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded font-overpass">Check Out</button>
          </div>
          <div className="flex items-center justify-end mt-4">
            <button onClick={generatePDF} className="bg-green-500 text-white py-2 px-4 rounded font-overpass">Download Quotation</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
