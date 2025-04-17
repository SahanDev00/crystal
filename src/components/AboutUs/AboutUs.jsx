import React, { useEffect } from 'react'
import Questions from './Questions'

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='w-full mt-28 2lg:mt-20 3lg:mt-24'>
        <div className='w-[90%] md:w-[70%] lg:w-[60%] mx-auto'>
            <h1 className='text-gray-700 text-4xl font-bold md:my-10 2lg:my-0 3lg:my-10 pt-5 font-overpass'>About Us</h1>
            <div className='w-full flex mt-5 md:mt-14 2lg:mt-3 3lg:mt-10'>
                <div className='mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>About K-Mat</h1>
                    <p className='text-black/50 w-[95%] text-wrap text-lg font-karla'>At K-Mats, we are a leading exporter of premium rubber mats, supplying high-quality, ISO-certified products to over 70 countries worldwide. Headquartered in Brisbane, Australia, our manufacturing operations in Sri Lanka and India ensure superior craftsmanship and durability.</p>
                    <p className='text-black/50 w-[95%] mt-5 text-wrap text-lg font-karla'>We specialize in a diverse range of mats, including livestock mats, horse mats, cow mats, commercial mats, industrial mats, and entrance mats, designed to meet the highest industry standards. With a commitment to innovation, reliability, and global reach, K-Mats is your trusted partner for durable, high-performance rubber mat solutions.</p>
                </div>
            </div>
            <div className='w-full flex mt-5 md:mt-10'>
                <div className='mx-auto flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>What We Produce?</h1>
                    <p className='text-black/50 text-wrap text-lg font-karla'>Kmat is one of the companies that manufacture high-end mats made of 100% natural coir fiber. This product line is diverse in coir mats application and even includes the coir doormats and floor coverings through to heavy duty coir mats for agricultural and erosion control use. Each mat offers a considerate approach of strength, durability and sustainability and is suitable for use indoors or outdoors. Made using eco friendly methods and process, our mats are also disposable and do not harm the environment.</p>
                    <p className='text-black/50 text-wrap text-lg font-karla mt-5'>We assure scope of client attention by providing our customers with functional and long-term products of wearable and beautiful design.</p>
                    <ul className='mt-2'>
                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Livestock Mats</li>
                        <p className='text-lg font-karla w-[90%] text-black/50'>Whether you are raising dairy cows, managing a busy stable, or operating a mixed-animal farm, we, at K-MATS, deliver <strong>livestock matting solutions</strong> that meet real-world demands. Our <strong>cow mats, horse mats,</strong> and <strong>barn mats for animals</strong> are more than just flooring. They are a long-term investment in animal welfare, farm hygiene, and daily efficiency as they offer  enhanced joint protection, reducing strain on animals while ensuring a non-slip surface for improved safety. Made from non-porous rubber, these mats promote better hygiene by preventing moisture buildup and simplifying maintenance. They also offer insulation against cold and damp surfaces, keeping livestock comfortable year-round. Built to last, our mats reduce bedding costs and serve as a cost-effective investment for farms, enhancing both efficiency and animal welfare.</p>
                        <p className='text-lg font-karla w-[90%] text-black/50 pt-3'>Designed for performance in both <strong>Australian and American</strong> agricultural conditions, K-MATS is the name farmers trust when it comes to <strong>rubber livestock flooring</strong> that works as hard as they do.</p>
                        
                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Cow Mats</li>
                        <p className='text-lg font-karla w-[90%] text-black/50'>Ensure the comfort, safety, and productivity of your dairy and cattle operations with <strong>K-MATS Cow Mats.</strong> Designed for barns, stalls, and feeding areas, these <strong>heavy-duty rubber mats</strong> help reduce joint stress, prevent slipping, and promote a more hygienic environment for livestock. K-MATS Cow Mats also provide insulation from cold concrete, supporting animal health and helping to maximize milk yield. Trusted by farmers across Australia and the USA, our mats are durable, easy to clean, and built to handle the demands of modern dairy farming.</p>
                        <p className='text-lg font-karla w-[90%] text-black/50 pt-3'>Whether you are outfitting a single stall or an entire barn, our cow stall mats and rubber barn flooring solutions are built to last and provide reliable comfort and protection. Designed with both comfort and practicality in mind, these <strong>dairy cow mats</strong> reduce fatigue, promote cleaner conditions, and help prevent slips and injuries. For farmers seeking long-lasting <strong>cattle comfort mats</strong> that deliver real results, K-MATS provides dependable, <strong>anti-slip cattle mats</strong> that perform in all types of agricultural settings.</p>
                        <p className='text-lg font-karla w-[90%] text-black/50 pt-3'>We offer two key cow mat products with Straight Edge and Interlock Edge under K-MATS Cow Mats so that you can what fits best for the space of your farm. </p>
                        
                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Horse Mats</li>
                        <p className='text-lg font-karla w-[90%] text-black/50'>​K-MATS <strong>Horse Mats</strong> are expertly designed to enhance equine comfort and safety in stables, wash bays, grooming areas, and horse trailers. These premium <strong>rubber horse stall mats</strong> provide a cushioned, non-slip surface that reduces joint stress and minimizes injury risks. By insulating against cold, hard flooring, they promote better health and reduce fatigue. Additionally, their non-porous design resists moisture and odors, ensuring a hygienic environment that is easy to clean. Trusted by equine professionals across <strong>Australia</strong> and the <strong>USA, K-MATS Horse Mats</strong> are a durable, cost-effective solution for maintaining optimal horse welfare.​</p>

                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Industrial Mats</li>
                        <p className='text-lg font-karla w-[90%] text-black/50'>K-MATS <strong>Industrial Mats</strong> are the perfect solution for warehouses, factories, workshops, and construction zones. Designed to withstand heavy foot traffic, machinery, and tough working conditions, these mats provide superior grip, shock absorption, and fatigue reduction. Whether you are dealing with oily surfaces or heavy machinery, our industrial mats help enhance workplace safety and improve employee comfort. Trusted by industries across Australia and the USA, K-MATS Industrial Mats are durable, easy to maintain, and designed to perform in the most demanding environments. Whether you need reliable <strong>anti-fatigue mats</strong> for your team or durable <strong>rubber flooring</strong> for a high-traffic area, our mats are built to last and help improve workplace productivity and safety.​</p>

                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Commercial Mats</li>
                        <p className='text-lg font-karla w-[90%] text-black/50'>Enhance the functionality and safety of your business spaces with <strong>K-MATS Commercial Mats.</strong> Perfect for <strong>commercial entrance mats, rubber floor mats for businesses,</strong> and <strong>high-traffic areas</strong> like retail stores, offices, restaurants, schools, and public buildings, our mats help manage dirt, moisture, and slips. Designed to provide superior <strong>anti-slip protection,</strong> these mats improve overall <strong>foot comfort</strong> and reduce accidents in busy environments.</p>
                        <p className='text-lg font-karla w-[90%] text-black/50 pt-3'>K-MATS Commercial Mats are built to withstand the rigors of <strong>high-traffic entryways</strong> and interior spaces. Their <strong>durable, low-maintenance design</strong> ensures long-lasting performance, making them ideal for businesses looking for <strong>xreliable public area mats.</strong> Whether you are willing to outfit a storefront or upgrade office floors, our <strong>office floor mats</strong> are a practical and efficient solution trusted by numerous businesses across <strong>Australia and the USA.</strong></p>

                        <li className='text-2xl mt-5 font-semibold font-overpass text-cyan-700 ml-5'>• Entrance Mats</li>
                        <p className='text-lg font-karla w-[90%] text-black/50'>​Level up your property's entrance with <strong>K-MATS Entrance Mats</strong>, expertly designed to provide superior dirt and moisture control while elevating aesthetic appeal. </p>
                        <p className='text-lg font-karla w-[90%] text-black/50 pt-3'>Our comprehensive line-up of entrance mats includes:​</p>
                        <li className='text-xl mt-5 font-semibold font-overpass text-cyan-600 ml-7'>• Scraper Rubber Mats</li>
                        <p className='text-lg font-karla w-[90%] text-black/50 ml-7'>Engineered with durable rubber bristles, these mats effectively remove dirt and debris from footwear, ensuring cleaner indoor spaces. <strong>K-MATS Scraper Rubber Mats</strong> are ideal for high-traffic areas, as they offer excellent <strong>slip resistance </strong>and are easy-to-maintain.​</p>
                        <li className='text-xl mt-5 font-semibold font-overpass text-cyan-600 ml-7'>• Drainage Rubber Mats</li>
                        <p className='text-lg font-karla w-[90%] text-black/50 ml-7'>Featuring perforated designs, K-MATS Drainage Rubber Mats allow water and liquids to drain through, keeping surfaces dry and safe. Perfect for outdoor entrances or areas prone to wet conditions, offering a <strong>non-slip surface</strong> that enhances safety.​​</p>
                        <li className='text-xl mt-5 font-semibold font-overpass text-cyan-600 ml-7'>• Coco Mats / PVC Coir Mats</li>
                        <p className='text-lg font-karla w-[90%] text-black/50 ml-7'>Manufactured from natural coconut husk fibers embedded into a PVC vinyl backing, these <strong>eco-friendly mats</strong> excel at trapping dirt and moisture. The coarse texture of K-MATS Coco Mats offers effective scraping action, while the sturdy backing ensures longevity.​
                        ​​</p>
                    </ul>
                    <div className='w-full flex mt-5 md:mt-10'>
                        <div className='w-full mx-auto flex flex-col justify-center'>
                            <h1 className='text-3xl font-semibold text-cyan-600/60 my-4 font-overpass'>Our Specialties</h1>
                            <h2 className='text-xl font-semibold text-cyan-600 font-overpass'>• Sustainability Focus </h2>
                            <p className='text-black/50 text-wrap text-lg w-[95%] font-karla'>We are committed to environmentally responsible manufacturing, ensuring minimal waste and energy efficiency in our processes.</p>
                            <h2 className='text-xl font-semibold text-cyan-600 font-overpass mt-3'>• Eco-Friendly Products </h2>
                            <p className='text-black/50 text-wrap text-lg w-[95%] font-karla'>Our mats are manufactured from sustainable materials, offering durable and safe solutions while reducing environmental impact and carbon footprint.</p>
                        </div>
                    </div>
                    <p className='text-black/50 text-wrap text-lg font-karla mt-5'>By incorporating <strong>K-MATS Entrance Mats</strong> into your entryways, you not only enhance the visual appeal but also promote cleanliness and safety. Our mats are designed to withstand heavy foot traffic, making them a reliable choice for both residential and commercial settings especially in <strong>Australia and the USA.</strong></p>
                </div>
            </div>
            {/* 
            <div className='w-full flex mt-5 md:mt-14'>
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
            */}
        </div>
        <Questions/>
    </div>
  )
}

export default AboutUs