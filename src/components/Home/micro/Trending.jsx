import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Trending = () => {
  const sliderRef = useRef(null);
  
  // Trending items data with image URLs
  const trendingItems = [
    { 
      id: 1,
      title: "Colleges",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Top educational institutions in your area"
    },
    { 
      id: 2,
      title: "Hospitals",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Quality healthcare facilities nearby"
    },
    { 
      id: 3,
      title: "Restaurants",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Popular dining spots around you"
    },
    { 
      id: 4,
      title: "Shopping Malls",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Best places for shopping"
    },
    { 
      id: 5,
      title: "Gyms",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Fitness centers with best facilities"
    },
    { 
      id: 6,
      title: "Parks",
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Beautiful outdoor spaces to relax"
    }
  ];

  // const scrollLeft = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  //   }
  // };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="section">
      <div className="container ms-15">
        <div className='ring ring-black p-4  rounded-2xl w-full'>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 inline-flex items-center">
                Trending Searches Near You
                <span className='ml-4 px-2 bg-emerald-600 text-white text-sm rounded'>NEW</span>
              </h2>
              <p className="text-gray-600 mt-1">Stay updated with the latest local trends.</p>
            </div>
            <div className="flex gap-2">
              
              <button 
                onClick={scrollRight}
                className="p-5 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors position-absolute translate-y-30 translate-x-5"
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
                className="flex-shrink-0 bg-white rounded-xl flex justify-between items-center overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer w-96 h-28 position-relative transform "
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-32 h-full object-cover hover:scale-110" 
                  loading="lazy"
                />
                <div className="p-4 flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <a href="#" className="text-blue-600 font-medium text-sm hover:underline">Explore</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;