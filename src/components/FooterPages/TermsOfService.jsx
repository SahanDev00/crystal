import React, { useEffect } from 'react'

const TermsOfService = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


  return (
    <div className="w-full h-auto mt-28 font-overpass pb-5">
      <div className="w-[80%] mx-auto">
        <h1 className="text-cyan-600 text-4xl font-semibold mb-6">Terms of Services</h1>
        
        <div className="space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. These Terms of Services govern your use of our website and services. By accessing our site, you agree to comply with these terms.
            </p>
          </section>
          
          {/* User Responsibilities Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              Phasellus vitae eros dignissim, tempus ipsum at, bibendum nisi. As a user of our services, you agree to the following:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Provide accurate and complete information during registration.</li>
              <li>Use the website for lawful purposes only.</li>
              <li>Refrain from sharing account details with others.</li>
            </ul>
          </section>
          
          {/* Intellectual Property Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              Donec feugiat ligula ac nisl efficitur, et commodo orci bibendum. All content, trademarks, and materials on this site are the intellectual property of the company and are protected by copyright laws.
            </p>
          </section>
          
          {/* Limitations of Liability Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Limitations of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Morbi quis lacus vehicula, consectetur nisi at, malesuada velit. We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>
          
          {/* Termination Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Termination of Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Proin fermentum turpis nec lectus venenatis, ut gravida risus consequat. We reserve the right to terminate your access to our services at any time for violations of these terms.
            </p>
          </section>
          
          {/* Governing Law Section */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. These terms are governed by and construed in accordance with the laws of your jurisdiction.
            </p>
          </section>
          
          {/* Footer Section */}
          <section>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Services, please contact us at <a href="mailto:terms@example.com" className="text-cyan-600 underline">terms@example.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
      
  )
}

export default TermsOfService