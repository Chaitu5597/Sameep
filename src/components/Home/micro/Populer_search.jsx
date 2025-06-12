import React, { useRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const Populer_search = () => {
  const sliderRef = useRef(null);
  
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
          title: "Shopping Malls",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Best places for shopping"
        },
        { 
          id: 6,
          title: "Shopping Malls",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Best places for shopping"
        },
       
        
      ];


//   const scrollRight = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className='border border-gray-200 p-6 rounded-2xl bg-white shadow-sm'>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 flex items-center">
                Popular Searches
                <span className='ml-3 px-2 bg-emerald-600 text-white text-sm rounded-full'>NEW</span>
              </h1>
              <p className="text-gray-600 mt-2">Stay updated with the latest local trends.</p>
            </div>
            {/* <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-gray-700 text-lg" />
            </button> */}
          </div>
    
          <div 
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto pb-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': { display: 'none' }
            }}
          >
            {trendingItems.map((item) => (
              <div 
                key={item.id}
                className=" w-60 h-70 bg-white rounded-lg border border-gray-200  overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full  object-cover  hover:scale-115 transition-transform"
                  loading="lazy"
                  
                />
                <div className="p-4 flex-1  bg-white-600 hover:bg-blue-100">
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-2 truncate">{item.description}</p>
                  <div className="flex justify-between items-center">
                    {/* <a href="#" className="text-blue-600 text-sm hover:underline">Explore</a> */}
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded   hover:bg-white-700 transition-colors ">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Populer_search;