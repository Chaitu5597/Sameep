import React, { useEffect, useRef, useState } from 'react';

const List_movies = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const movies = [
    {
      title: 'Inception',
      year: '2010',
      genre: 'Sci-Fi',
      rating: '8.8',
      language: 'English',
      screenType: 'IMAX',
      image: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
    },
    {
      title: 'The Dark Knight',
      year: '2008',
      genre: 'Action',
      rating: '9.0',
      language: 'English',
      screenType: '2D',
      image: 'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
    },
    {
      title: 'Interstellar',
      year: '2014',
      genre: 'Drama',
      rating: '8.6',
      language: 'English',
      screenType: 'IMAX',
      image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    },
    {
      title: 'Avatar',
      year: '2009',
      genre: 'Adventure',
      rating: '7.8',
      language: 'English',
      screenType: '3D',
      image: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
    },
    {
      title: 'Joker',
      year: '2019',
      genre: 'Crime',
      rating: '8.5',
      language: 'English',
      screenType: '2D',
      image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    },
    {
      title: 'Spider-Man',
      year: '2021',
      genre: 'Action',
      rating: '8.4',
      language: 'Hindi',
      screenType: '3D',
      image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    },
  ];

  useEffect(() => {
    const slider = scrollRef.current;

    const scrollAmount = 220;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    const autoScroll = () => {
      if (!slider || isHovered) return;

      if (slider.scrollLeft >= maxScrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="bg-white py-10 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">🎬 Popular Movies</h2>
        <a href="/movies" className="text-blue-600 text-sm hover:underline">
          More Movies →
        </a>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {movies.map((movie, index) => (
          <div
            key={index}
            className="min-w-[60%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[20%] bg-white rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-64 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-3 space-y-1">
              <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
              <p className="text-sm text-gray-600 truncate">{movie.genre}</p>
              <p className="text-sm text-gray-500">📅 {movie.year} &nbsp; ⭐ {movie.rating}</p>
              <p className="text-xs text-gray-700">🎧 {movie.language} &nbsp; 🎥 {movie.screenType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List_movies;
