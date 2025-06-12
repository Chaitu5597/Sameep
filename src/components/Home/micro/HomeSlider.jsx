import React, { useState, useEffect } from 'react';
import room from '../../../assets/room.Png';
import room2 from '../../../assets/room2.Png';
import room3 from '../../../assets/room3.Png';

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [room, room2, room3, room, room2];
  const captions = [
    "Deluxe Suite",
    "Executive Room",
    "Presidential Suite",
    "Family Room",
    "Honeymoon Suite"
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Room card data
  const roomCards = [
    { type: "Standard", price: "$120/night", img: room },
    { type: "Deluxe", price: "$180/night", img: room2 },
    { type: "Suite", price: "$250/night", img: room3 },
    { type: "Executive", price: "$300/night", img: room2 }, 
    { type: "Presidential", price: "$500/night", img: room },
  ];

  return (
    <section className='container  mx-auto px-5 mb-10'>
      <div className='flex flex-col lg:flex-row gap-6 mt-8'>
        {/* Slider Section */}
        <div className="  lg:w-2/3 relative rounded-xl overflow-hidden shadow-lg" style={{ height: '300px' , width: '40%' }}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <img src={image} alt={`Room ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">{captions[index]}</h3>
                <p className="text-white/90 mt-1">Starting from $199/night</p>
              </div>
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute  left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-amber-200 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute bg-blue-400 right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-amber-200 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Vertical Room Cards */}
        <div className="w-lg  lg:w-2/3 flex flex-row gap-4" style={{ height: '300px' }}>
          {roomCards.slice(0,4).map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            >
              <img src={room.img} alt={room.type} className="w-full h-40 object-cover hover:scale-120" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">{room.type}</h4>
                <p className="text-blue-600 font-medium">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
