import React from "react";
import pic from '../images/product1.jpeg'
import pic2 from '../images/product2.jpeg'
import pic3 from '../images/product3.jpeg'
import pic4 from '../images/rug3.jpeg'
import pic5 from '../images/product5.jpeg'
import pic6 from '../images/product6.jpeg'
import pic7 from '../images/product12.jpeg'
import pic8 from '../images/product8.jpeg'
import pic9 from '../images/rug.png'
import pic10 from '../images/product9.jpeg'

const images = [
  { src: pic, alt: "image 1", colSpan: "col-span-2", rowSpan: "row-span-2"  },
  { src: pic3, alt: "image 3", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: pic2, alt: "image 2", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: pic8, alt: "image 3", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: pic10, alt: "image 3", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: pic4, alt: "image 3", colSpan: "col-span-2", rowSpan: "row-span-1" },
  { src: pic6, alt: "image 3", colSpan: "col-span-2", rowSpan: "row-span-1" },
  { src: pic5, alt: "image 3", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: pic7, alt: "image 3", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: pic9, alt: "image 3", colSpan: "col-span-2", rowSpan: "row-span-1" },
  // add all your images here
];

const Gallery = () => {
  return (
    <div className="w-full mx-auto relative bg-cyan-50">
      <h1 className="text-center text-3xl font-bold font-overpass text-gray-700 mb-10 uppercase">our <span className="text-cyan-600">portfolio</span></h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 grid-auto-rows-[200px] w-[80%] mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.colSpan} ${image.rowSpan} overflow-hidden rounded-lg shadow-lg`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
