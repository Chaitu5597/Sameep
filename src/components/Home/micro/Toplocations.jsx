import React, { useRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const TopLocations = () => {
  const sliderRef = useRef(null);

  const trendingItems = [
    {
      id: 1,
      title: "Taj Mahal, Agra",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Iconic white marble mausoleum and UNESCO World Heritage Site"
    },
    {
      id: 2,
      title: "Jaipur, Rajasthan",
      image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "The Pink City with palaces, forts, and vibrant culture"
    },
    {
      id: 3,
      title: "Goa Beaches",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Sun, sand, and Portuguese-influenced coastal paradise"
    },
    {
      id: 4,
      title: "Varanasi, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Spiritual capital with ghats along the Ganges River"
    },
    {
      id: 5,
      title: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1580103514797-324a6b1ef6ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Serene network of lagoons and canals"
    },
    {
      id: 6,
      title: "Leh-Ladakh, Jammu & Kashmir",
      image: "https://images.unsplash.com/photo-1581772136273-b4c1c47c4e59?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "High-altitude desert with stunning landscapes"
    },
    {
      id: 7,
      title: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1581852017103-68e8119e1d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Bollywood, Gateway of India, and bustling city life"
    },
    {
      id: 8,
      title: "Hampi, Karnataka",
      image: "https://images.unsplash.com/photo-1584811644727-6e706d5359e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Ancient ruins of the Vijayanagara Empire"
    }
  ];

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="section">
      <div className="container ms-15">
        <div className="relative ring ring-black p-4  rounded-2xl">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 inline-flex items-center">
              Top locations
              <span className="ml-4 px-2 bg-emerald-600 text-white text-sm rounded">NEW</span>
            </h2>
            <p className="text-gray-600 mt-1">Stay updated with the latest local trends.</p>
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
                  className="w-32 h-full object-cover hover:scale-110 transition-transform duration-300"
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

          {/* Right Scroll Button */}
          <button
  onClick={scrollRight}
  className="absolute top-1/2 right-2 -translate-x-1/5 -translate-y-1/30 px-3 py-4 rounded-md bg-gray-100 hover:bg-gray-300 transition-colors shadow"
  aria-label="Scroll right"
>
  <FiChevronRight className="text-gray-700 text-lg" />
</button>

        </div>
      </div>
    </div>
  );
};

export default TopLocations;
