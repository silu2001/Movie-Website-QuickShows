import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const moviesData = [


  {

    id: 1,
    title: "How to Train Your Dragon",
    year: 2025,
    genre: "Action | Family",
    duration: "2h 5m",
    rating: 7.6,
    image:
      "https://image.tmdb.org/t/p/original/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg",

    language: "English",
    // poster: "https://i.ibb.co/ZLxTw7X/dragon.jpg",
    description:
      "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
    cast: [
      { name: "Mason Thames", img: "https://i.ibb.co/QKmbJ2g/actor1.jpg" },
      { name: "Nico Parker", img: "https://i.ibb.co/fHxxGn2/actor2.jpg" },
      { name: "Gerard Butler", img: "https://i.ibb.co/wJfBgDn/actor3.jpg" },
      { name: "Nick Frost", img: "https://i.ibb.co/vkq8dxZ/actor4.jpg" },
    ],
  },

  {
    id: 2,
    title: "K.O.",
    year: 2025,
    genre: "Action | Drama",
    duration: "1h 24m",
    rating: 7.4,
    image:
      "https://image.tmdb.org/t/p/original/bsrhm3rlE4Wzv9f5ZTxcNxaMz29.jpg",
  },
  {
    id: 3,
    title: "Mission: Impossible - The Final",
    year: 2025,
    genre: "Action | Adventure",
    duration: "2h 50m",
    rating: 7.2,
    image:
      "https://image.tmdb.org/t/p/original/aEG09hZZEDZ23Y9WYI701W6Gwnb.jpg",
  },
  {
    id: 4,
    title: "STRAW",
    year: 2025,
    genre: "Thriller | Drama",
    duration: "1h 45m",
    rating: 8.3,
    image:
      "https://image.tmdb.org/t/p/original/wvr3Nh8TALWbmATrnlNg5Vhf6d3.jpg",
  },
  {
    id: 5,
    title: "Final Destination Bloodlines",
    year: 2025,
    genre: "Action | Sci-Fi",
    duration: "3h 2m",
    rating: 9.0,
    image:
      "https://image.tmdb.org/t/p/original/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
  },
  {
    id: 6,
    title: "The Accountant²",
    year: 2025,
    genre: "Animation | Family",
    duration: "1h 58m",
    rating: 8.1,
    image: "https://image.tmdb.org/t/p/original/yBDvgpyynDsbMyK21FoQu1c2wYR.jpg",
  },
  {
    id: 7,
    title: "Sinners",
    year: 2025,
    genre: "Romance | Family",
    duration: "1h 59m",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/original/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
  },
];
const Movies = () => {

  const [visibleCount, setVisibleCount] = useState(4);

  // const handleShowMore = () => {
  //     setVisibleCount((prev) => prev + 2); // load 2 more cards each time
  // };
  const handleShowMore = () => {
    setVisibleCount(moviesData.length);
  };

  const handleViewAll = () => {
    setVisibleCount(moviesData.length); // show all movies
  };
  const Navigate = useNavigate();
  return (
    <>
      <section className="movie-hero-section">
      </section>

      <section className="now-showing">
        <div className="header">
          <h2>Now Showing</h2>
          <button className="view-all" onClick={handleViewAll}>
            View All →
          </button>
        </div>

        <div className="cards-container">
          {moviesData.slice(0, visibleCount).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img onClick={() => { Navigate(`/movies/${movie.id}`); window.scrollTo(0, 0); }}
                src={movie.image} alt={movie.title} />

              <h3>{movie.title}</h3>
              <p>
                {movie.year} · {movie.genre} · {movie.duration}
              </p>
              <div className="card-footer">
                <button className="ticket-btn" onClick={() => { Navigate(`/movies/${movie.id}`) }}>Buy Tickets</button>
                <span className="rating">⭐ {movie.rating}</span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < moviesData.length && (
          <div className="show-more">
            <button onClick={handleShowMore}>Show more</button>
          </div>
        )}
      </section>
    </>
  )
}

export default Movies