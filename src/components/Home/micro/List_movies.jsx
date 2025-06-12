import React from 'react';

const List_movies = () => {
  const movies = [
    {
      title: "Inception",
      year: "2010",
      genre: "Sci-Fi, Thriller",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      link: "#"
    },
    {
      title: "The Dark Knight",
      year: "2008",
      genre: "Action, Crime",
      description: "Batman faces the Joker in Gotham's darkest night.",
      image: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      link: "#"
    },
    {
      title: "Interstellar",
      year: "2014",
      genre: "Sci-Fi, Drama",
      description: "Explorers travel through a wormhole in space in an attempt to save humanity.",
      image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      link: "#"
    },
    {
      title: "The Matrix",
      year: "1999",
      genre: "Sci-Fi, Action",
      description: "A computer hacker learns about the true nature of his reality.",
      image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      link: "#"
    },
    {
      title: "Avatar",
      year: "2009",
      genre: "Sci-Fi, Adventure",
      description: "A marine on an alien planet becomes torn between duty and conscience.",
      image: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
      link: "#"
    },
    {
      title: "Titanic",
      year: "1997",
      genre: "Drama, Romance",
      description: "A romance blooms aboard the ill-fated R.M.S. Titanic.",
      image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      link: "#"
    },
    {
      title: "Gladiator",
      year: "2000",
      genre: "Action, Drama",
      description: "A former Roman General seeks revenge for his family’s murder.",
      image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      link: "#"
    },
    {
      title: "The Lord of the Rings",
      year: "2001",
      genre: "Fantasy, Adventure",
      description: "A hobbit sets out to destroy a powerful ring.",
      image: "https://image.tmdb.org/t/p/w500/56zTpe2xvaA4alU51sRWPoKPYZy.jpg",
      link: "#"
    },
    {
      title: "Avengers: Endgame",
      year: "2019",
      genre: "Action, Sci-Fi",
      description: "The Avengers unite for a final stand against Thanos.",
      image: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      link: "#"
    },
    {
      title: "Joker",
      year: "2019",
      genre: "Drama, Crime",
      description: "A mentally troubled comedian descends into madness.",
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      link: "#"
    },
    {
      title: "Black Panther",
      year: "2018",
      genre: "Action, Sci-Fi",
      description: "T'Challa returns home to claim his place as king of Wakanda.",
      image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      link: "#"
    },
    {
      title: "Iron Man",
      year: "2008",
      genre: "Action, Sci-Fi",
      description: "Tony Stark builds a high-tech suit and becomes Iron Man.",
      image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
      link: "#"
    },
    {
      title: "Doctor Strange",
      year: "2016",
      genre: "Action, Fantasy",
      description: "A neurosurgeon discovers a hidden world of magic and alternate dimensions.",
      image: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
      link: "#"
    },
    {
      title: "Spider-Man: No Way Home",
      year: "2021",
      genre: "Action, Adventure",
      description: "Peter Parker's identity is revealed and his life is turned upside down.",
      image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      link: "#"
    },
    {
      title: "Dune",
      year: "2021",
      genre: "Sci-Fi, Adventure",
      description: "A noble family's son must protect the most valuable resource in the galaxy.",
      image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      link: "#"
    }
  ];

  const MovieCard = ({ title, year, genre, description, image, link }) => (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow max-w-xs text-white">
      <a href={link} className="block overflow-hidden rounded-t-lg">
        <img
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-4">
        <h5 className="text-lg font-semibold">{title} <span className="text-sm text-gray-400">({year})</span></h5>
        <p className="text-sm italic text-gray-400">{genre}</p>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <a
          href={link}
          className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );

  return (
    <section className=" pb-10 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default List_movies;
