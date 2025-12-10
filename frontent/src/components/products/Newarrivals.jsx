import React, { useState } from 'react'
import one from "../../assets/images/woman3.jpg"
import two from "../../assets/images/woman1.jpg"
import three from "../../assets/images/woman8.jpg"
import four from "../../assets/images/woman6.webp"
import five from "../../assets/images/woman4.jpeg"
import six from "../../assets/images/woman2.png"
import seven from "../../assets/images/woman1.jpg"
import eight from "../../assets/images/woman5.webp"
import "preline"; 
const Newarrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 4; // number of images shown at a time

  const nextSlide = () => {
    if (currentIndex + visibleSlides < slides.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

const slides=[

    {
        image:one,
        name:"Korean fit"
    },
    {
       image:two,
        name:"casual wear" 
    },
       {
        image:three,
        name:"Korean fit"
    },
    {
       image:four,
        name:"casual wear" 
    },
     {
        image:five,
        name:"Korean fit"
    },
    {
       image:six,
        name:"casual wear" 
    },
       {
        image:seven,
        name:"Korean fit"
    },
    {
       image:eight,
        name:"casual wear" 
    },
    
]


  return (
    <div className='mt-10'>
<div className='text-center flex flex-col justify-center items-center'>
            <h3 className='text-center font-semibold text-3xl'>New Arrivals</h3>
        <p className='text-sm md:text-lg  w-2/4 text-gray-600 mb-8 w-'>Discovet the latest styles straight off the runway,freshly added to keep your wardrobe on the cutting edge of fashion</p>
</div>
    <div className="relative w-full max-w-6xl mx-auto p-4">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-2/4 sm:w-1/4 p-2 hover:scale-102 transform transition-transform duration-200" // 1/4 = 4 images per row
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2 text-center bg-gray-100">
                  <p className="text-gray-800 font-medium">{slide.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        disabled={currentIndex === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        disabled={currentIndex + visibleSlides >= slides.length}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

      
    </div>
  )
}

export default Newarrivals
