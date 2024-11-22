import React, { useEffect } from 'react'

const ReturnPolicies = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="w-full h-auto mt-28 font-overpass pb-5">
      <div className="w-[80%] mx-auto">
        <h1 className="text-cyan-600 text-4xl font-semibold mb-6">Return Policies</h1>
        
        <div className="space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ullamcorper sapien, sit amet facilisis libero. Nulla facilisi. Curabitur et felis vel est pharetra gravida.
            </p>
          </section>
          
          {/* Eligibility Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Eligibility for Returns</h2>
            <p className="text-gray-600 leading-relaxed">
              Donec id ultrices purus. Ut faucibus orci ut tristique pharetra. Returns are accepted under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Products must be in original packaging and condition.</li>
              <li>Returns must be initiated within 30 days of purchase.</li>
              <li>Proof of purchase is required.</li>
            </ul>
          </section>
          
          {/* Return Process Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">How to Return an Item</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, libero!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ol>
          </section>
          
          {/* Exceptions Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Exceptions and Non-Returnable Items</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Some items are not eligible for return:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </section>
          
          {/* Footer Section */}
          <section>
            <p className="text-gray-600 leading-relaxed">
              For further assistance, please contact our customer support team at <a href="mailto:support@example.com" className="text-cyan-600 underline">support@example.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ReturnPolicies