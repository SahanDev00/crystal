import React from 'react'
import Questions from './Questions'

const AboutUs = () => {
  return (
    <div className='w-full mt-28'>
        <div className='w-[60%] mx-auto'>
            <h1 className='text-gray-700 text-4xl font-bold my-10 font-overpass'>About Us</h1>
            <div className='w-full flex mt-14'>
                <div className='mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>About K-Mat</h1>
                    <p className='text-black/50 w-[95%] text-wrap text-lg font-karla'>Kmat is an unrivaled company for the production and distribution of coconut fiber mats: based in the 2345678911011 of the Country in which those trees are plenty. Here at Kmat, we embrace the natural abundant resource of coconut fiber to make sustainable and quality mats that pass international standards. In addition, our mats are not only affordable and multi-purpose but also help in building a healthy environment – creating biodegradable products.</p>
                    <p className='text-black/50 w-[95%] mt-5 text-wrap text-lg font-karla'>Owning to Sri Lanka’s history of coconut, we are happy to present products that allow people’s imagination and creativity to be turned towards energy conservation and careless design of products. Made industrially or socially useful, durable and resilient-our mats are aesthetically beautiful and long-lasting comfort guaranteed. Kmat aims to blend old world skills with new world technology and Headquartered in Sri Lanka, serve the local and export market.</p>
                    <p className='text-black/50 w-[95%] text-wrap mt-5 text-lg font-karla'>Help us help the world, one mat at a time.</p>
                </div>
            </div>
            <div className='w-full flex mt-14'>
                <div className='mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>What We Produce?</h1>
                    <p className='text-black/50 text-wrap text-lg font-karla'>Kmat is one of the companies that manufacture high-end mats made of 100% natural coir fiber. This product line is diverse in coir mats application and even includes the coir doormats and floor coverings through to heavy duty coir mats for agricultural and erosion control use. Each mat offers a considerate approach of strength, durability and sustainability and is suitable for use indoors or outdoors. Made using eco friendly methods and process, our mats are also disposable and do not harm the environment.</p>
                    <p className='text-black/50 text-wrap text-lg font-karla mt-5'>We assure scope of client attention by providing our customers with functional and long-term products of wearable and beautiful design.</p>
                    <ul className='mt-2'>
                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Doormats</li>
                        <p className='text-lg font-karla w-[90%] text-black/70'>Leave a lasting impression wherever you go. We offer a variety of doormats with different styles, designs and materials such as coir, rubber, jute, polypropylene etc. which are woven, moulded, tufted, printed or hand crafted to suit as the ideal first step in every home.</p>
                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Rugs</li>
                        <p className='text-lg font-karla w-[90%] text-black/70'>Every space deserves some special swag and that is why we have a collection of handmade rugs. Crafted in jute, coir, sisal, wool, seagrass, blends and more designs can incorporate natural elements while remaining stylish. Find out all decoration types including natural or hand-woven, hand-knotted, machine-woven or even custom made, simple or braids, dyed, printed or bordered.</p>
                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Broadloom</li>
                        <p className='text-lg font-karla w-[90%] text-black/70'>Integrate areas using any of our broadlooms as well as wall-to-wall carpets. Materials such as jute, coir, sisal, wool, and seagrass can be used as well as other sustainable blends for elegance that is here to last. Go for a spectrum of heals like natural, handcrafted, machine-made and color to ensure consistency with your interior/decor plans.</p>
                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Eco-Friendly Products</li>
                        <p className='text-lg font-karla w-[90%] text-black/70'>Our range of biodegradable coir and rubber products will help you adopt a more eco-friendly approach to life. We offer a wide range of products like plant pots, grow sticks, garden paths, geo textile and others.</p>
                    </ul>
                </div>
            </div>
            <div className='w-full flex mt-14'>
                <div className='mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>Products that satisfy</h1>
                    <h2 className='text-xl font-semibold text-cyan-600/50 font-overpass'>Art & Science</h2>
                    <p className='text-black/50 text-wrap text-lg w-[95%] font-karla'>KMat fibre defines the quality of its facilities as unsurpassing. I believe our modern facilities with high technology within its reach, are able to carry out processing of the materials from the requirments of inputs to all finish goods production. This minimizes wastage of resources and assures uniformity of sound quality where artisans and machines follow same procedures, working hand in hand. So, industrial health and safety of people is treated with the utmost concern, training is periodically performed to support a culture of quality standards’ compliance. It is irrational to say that best production practices are always practiced. Nevertheless, every Palm Fibre product has a perfect balance of power and precision and it is sustainable.</p>
                </div>
            </div>
            <div className='w-full flex mt-14'>
                <div className='mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>Designs that will knock your socks off</h1>
                    <p className='text-black/50 text-wrap text-lg w-[95%] font-karla'>We ensure that we remain innovative by incorporating international trends and ecological sustainable measures in every product that we make. Outstanding design studio takes these measurements and creates beautiful decor and practical as well as stylish floor coverings.</p>
                </div>
            </div>
            <div className='w-full flex mt-14'>
                <div className='mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>Advanced equipment & facilities</h1>
                    <p className='text-black/50 text-wrap text-lg w-[95%] font-karla'>Our facilities incorporate and exploit the latest technologies with precise processes. This approach perfects the production process and cuts down on wastes while maintaining products of constant high quality and giving appropriate and timely service to overage client expectations and satisfaction.</p>
                </div>
            </div>
        </div>
        <Questions/>
    </div>
  )
}

export default AboutUs