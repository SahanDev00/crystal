import React, { useEffect } from 'react'

const ShippingInfo = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="w-full h-auto mt-28 font-overpass pb-5">
      <div className="w-[80%] mx-auto">
        <h1 className="text-cyan-600 text-4xl font-semibold mb-6">Shipping Information</h1>
        
        <div className="space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our shipping policies ensure fast, reliable, and safe delivery of your orders. Please review the details below to understand our processes better.
            </p>
          </section>
          
          {/* Delivery Time Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Delivery Times</h2>
            <p className="text-gray-600 leading-relaxed">
              Phasellus at elit semper, vestibulum est sit amet, accumsan eros. Estimated delivery times:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Standard Shipping: 5-7 business days</li>
              <li>Express Shipping: 2-3 business days</li>
              <li>International Shipping: 10-15 business days</li>
            </ul>
          </section>
          
          {/* Shipping Charges Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Shipping Charges</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Shipping fees depend on the type of shipping and order value:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Free shipping on orders over $50</li>
              <li>Standard shipping: $5.99</li>
              <li>Express shipping: $15.99</li>
              <li>International shipping: Calculated at checkout</li>
            </ul>
          </section>
          
          {/* Tracking Information Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Order Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              Maecenas ac felis et nisi volutpat convallis. Once your order is shipped, you will receive an email with a tracking number. Use the tracking link provided to monitor your shipment.
            </p>
          </section>
          
          {/* Exceptions and Delays Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Exceptions and Delays</h2>
            <p className="text-gray-600 leading-relaxed">
              Sed tempor ipsum nec massa molestie, et faucibus tortor efficitur. Please note the following exceptions:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Delivery delays due to weather or carrier issues</li>
              <li>Remote areas may take longer to deliver</li>
              <li>Pre-orders and custom items may have extended shipping times</li>
            </ul>
          </section>
          
          {/* Footer Section */}
          <section>
            <p className="text-gray-600 leading-relaxed">
              For further assistance, please contact our support team at <a href="mailto:shipping@example.com" className="text-cyan-600 underline">shipping@example.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  
  )
}

export default ShippingInfo