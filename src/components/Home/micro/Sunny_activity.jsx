import React, { useRef } from 'react';
import { FiChevronRight } from 'react-icons/fi'; // Added import

const Sunny_activity = () => {
  const sliderRef = useRef(null);

  const trendingItems = [ 
    {
      id: 1,
      title: "Colleges",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    //   description: "Top educational institutions in your area"
    },
    {
      id: 2,
      title: "Colleges",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    //   description: "Top educational institutions in your area"
    },
    {
      id: 3,
      title: "Colleges",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    //   description: "Top educational institutions in your area"
    },
    {
      id: 4,
      title: "Colleges",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    //   description: "Top educational institutions in your area"
    },

   ]; // Your existing data

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="section">
      <div className="container ms-15 mb-8">
        <div className='ring ring-black p-5  rounded-2xl'>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 inline-flex items-center">
                Sunny Day Essentials
                <span className='ml-4 px-2 bg-emerald-600 text-white text-sm rounded'>Seasonal</span>
              </h2>
              <p className="text-gray-600 mt-1">Stay updated with the latest local trends.</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={scrollRight}
                className="p-5 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Scroll right"
              >
                <FiChevronRight className="text-gray-700 text-lg" />
              </button>
            </div>
          </div>
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-1"
            style={{ scrollbarWidth: 'none' }}
          >
            {trendingItems.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 bg-white rounded-xl flex justify-between items-center overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer w-96 h-28"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-32 h-full object-cover hover:scale-110" 
                  loading="lazy"
                />
                <div className="p-4 flex-1">
                  <h1 className="text-3xl font-semibold text-gray-800">{item.title}</h1>
                  {/* <p className="text-sm text-gray-600 mb-2">{item.description}</p> */}
                  <a href="#" className="text-blue-600 font-medium text-xl hover:underline">Explore </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sunny_activity;