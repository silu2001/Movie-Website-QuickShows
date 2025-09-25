import React from 'react'
import Title from '../../components/admin/Title'

const AddShows = () => {
  const movies = [
  {
    title: "Demon Slayer",
    rating: 7.8,
    votes: 352,
    date: "2025-07-18",
    image: "https://image.tmdb.org/t/p/original/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
  },
  {
    title: "Aztec Batman",
    rating: 8.2,
    votes: 66,
    date: "2025-09-18",
    image: "https://image.tmdb.org/t/p/original/s0Mlo5w4INp3bUdsJo3RaSSMXWz.jpg",
  },
    {
    title: "Demon Slayer",
    rating: 7.8,
    votes: 352,
    date: "2025-07-18",
    image: "https://image.tmdb.org/t/p/original/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
  },
  {
    title: "Aztec Batman",
    rating: 8.2,
    votes: 66,
    date: "2025-09-18",
    image: "https://image.tmdb.org/t/p/original/s0Mlo5w4INp3bUdsJo3RaSSMXWz.jpg",
  },
    {
    title: "Demon Slayer",
    rating: 7.8,
    votes: 352,
    date: "2025-07-18",
    image: "https://image.tmdb.org/t/p/original/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
  },
  {
    title: "Aztec Batman",
    rating: 8.2,
    votes: 66,
    date: "2025-09-18",
    image: "https://image.tmdb.org/t/p/original/s0Mlo5w4INp3bUdsJo3RaSSMXWz.jpg",
  },
    {
    title: "Demon Slayer",
    rating: 7.8,
    votes: 352,
    date: "2025-07-18",
    image: "https://image.tmdb.org/t/p/original/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
  },
  {
    title: "Aztec Batman",
    rating: 8.2,
    votes: 66,
    date: "2025-09-18",
    image: "https://image.tmdb.org/t/p/original/s0Mlo5w4INp3bUdsJo3RaSSMXWz.jpg",
  },
];
  return (
    <>
     <div className="add-shows-container">
      <h2 className="add-shows-title">
       <Title text1="Add" text2="Shows" />
      </h2>

      {/* Movies Row */}
      <h3 className="section-heading">Now Playing Movies</h3>
      <div className="movies-scroll">
        {movies.map((movie, index) => (
          <div className="movie-card1" key={index}>
            <img src={movie.image} alt={movie.title} className="movie-poster" />
            <div className="movie-info1">
              <p className="rating">⭐ {movie.rating}</p>
              <p className="votes">{movie.votes} Votes</p>
              <h4 className="title">{movie.title}</h4>
              <p className="date">{movie.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="form-section">
        <label className="form-label">Show Price</label>
        <input
          type="number"
          placeholder="Enter show price"
          className="form-input"
        />

        <label className="form-label">Select Date and Time</label>
        <div className="date-time-row">
          <input
            type="datetime-local"
            className="form-input"
          />
          <button className="btn-secondary">Add Time</button>
        </div>

        <button className="btn-primary">Add Show</button>
      </div>
    </div>
    </>
  )
}

export default AddShows
