
import { useParams, Link, NavLink } from "react-router-dom";
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
        image: "https://image.tmdb.org/t/p/original/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg",
        language: "English",
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
        image: "https://image.tmdb.org/t/p/original/bsrhm3rlE4Wzv9f5ZTxcNxaMz29.jpg",
        language: "English",
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
        id: 3,
        title: "Mission: Impossible - The Final",
        year: 2025,
        genre: "Action | Adventure",
        duration: "2h 50m",
        rating: 7.2,
        image: "https://image.tmdb.org/t/p/original/aEG09hZZEDZ23Y9WYI701W6Gwnb.jpg",
        language: "English",
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
        id: 4,
        title: "STRAW",
        year: 2025,
        genre: "Thriller | Drama",
        duration: "1h 45m",
        rating: 8.3,
        image: "https://image.tmdb.org/t/p/original/wvr3Nh8TALWbmATrnlNg5Vhf6d3.jpg",
        language: "English",
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
        id: 5,
        title: "Final Destination Bloodlines",
        year: 2025,
        genre: "Action | Sci-Fi",
        duration: "3h 2m",
        rating: 9.0,
        image: "https://image.tmdb.org/t/p/original/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
        language: "English",
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
        id: 6,
        title: "The Accountant²",
        year: 2025,
        genre: "Animation | Family",
        duration: "1h 58m",
        rating: 8.1,
        image: "https://image.tmdb.org/t/p/original/yBDvgpyynDsbMyK21FoQu1c2wYR.jpg",
        language: "English",
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
        id: 7,
        title: "Sinners",
        year: 2025,
        genre: "Romance | Family",
        duration: "1h 59m",
        rating: 8.4,
        image: "https://image.tmdb.org/t/p/original/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
        language: "English",
        description:
            "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
        cast: [
            { name: "Mason Thames", img: "https://i.ibb.co/QKmbJ2g/actor1.jpg" },
            { name: "Nico Parker", img: "https://i.ibb.co/fHxxGn2/actor2.jpg" },
            { name: "Gerard Butler", img: "https://i.ibb.co/wJfBgDn/actor3.jpg" },
            { name: "Nick Frost", img: "https://i.ibb.co/vkq8dxZ/actor4.jpg" },
        ],
    },
];




const dates = [
    { day: 11, month: "Nov" },
    { day: 10, month: "Nov" },
    { day: 9, month: "Nov" },
    { day: 8, month: "Nov" },
    { day: 7, month: "Nov" },
];

const MovieDetail = () => {
    const { id } = useParams();
    const movie = moviesData.find((m) => m.id === parseInt(id));

    if (!movie) return <h2>Movie not found!</h2>;

    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        if (startIndex > 0) setStartIndex(startIndex - 1);
    };

    const handleNext = () => {
        if (startIndex < dates.length - 2) setStartIndex(startIndex + 1);
    };


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

    const handleScrollToBooking = (e) => {
        e.preventDefault();
        const bookingSection = document.getElementById("booking");
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);

    // const onBookHandler = (date) => {
    //     // Use the argument if passed, otherwise fallback to state
    //     const bookingDate = date || selectedDate;

    //     if (!bookingDate) {
    //         return alert("Please select a date");
    //     }

    //     navigate(`/movies/${movie.id}/${bookingDate}`, { state: { movie } });

    //     // Scroll to top after navigation
    //     window.scrollTo(0, 0);

    // };
    const onBookHandler = (date) => {
        const bookingDate = date || selectedDate;

        if (!bookingDate) {
            return alert("Please select a date");
        }

        navigate(`/movies/${movie.id}/${bookingDate}`, { state: { movie } });

        window.scrollTo(0, 0);
    };


    return (
        <>
            <section className="movie-detail">
                <div className="movie-box">
                    <div className="movie-poster">
                        <img src={movie.image} alt={movie.title} />
                    </div>

                    <div className="movie-info">
                        <p className="movie-lang">{movie.language}</p>
                        <h1>{movie.title}</h1>
                        <p className="movie-rating">⭐ {movie.rating} User Rating</p>
                        <p className="movie-desc">{movie.description}</p>
                        <p className="movie-meta">
                            {movie.duration} • {movie.genre} • {movie.year}
                        </p>
                        <div className="movie-buttons">
                            <button className="btn watch">▶ Watch Trailer</button>
                            <a href="#booking" onClick={handleScrollToBooking}>
                                <button className="btn buy">🎟 Buy Tickets</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Cast Section (only if movie has cast) */}
                {movie.cast && (
                    <div className="movie-cast">
                        <h2>Your Favorite Cast</h2>
                        <div className="cast-list">
                            {movie.cast.map((actor, index) => (
                                <div key={index} className="cast-card">
                                    <img src={actor.img} alt={actor.name} />
                                    <p>{actor.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="back-link">
                    <Link to="/">⬅ Back to Movies</Link>
                </div>
            </section>
            <section className="booking-container" id="booking">
                <div className="booking-info">
                    <h3 className="booking-title">Choose Date</h3>

                    <div className="booking-box">

                        <div className="date-list">
                            <button className="arrow-btn" onClick={handlePrev}>
                                &#8249;
                            </button>
                            {dates.slice(startIndex, startIndex + 2).map((date, idx) => (
                                <div key={idx} className={`date-card ${selectedDate === date.day ? " selected bg-primary text-white" : ''}`} onClick={() => setSelectedDate(`${date.day} ${date.month} 2025`)}
                                >
                                    <span className="day">{date.day}</span>
                                    <span className="month">{date.month}</span>
                                </div>


                            ))}
                            <button className="arrow-btn" onClick={handleNext}>
                                &#8250;
                            </button>
                        </div>

                        <button onClick={() => onBookHandler(selectedDate)} className="book-btn">Book Now</button>
                    </div>
                </div>
            </section>
            <section className="now-showing">
                <div className="header">
                    <h2>You May Also Like</h2>
                    <button className="view-all" onClick={handleViewAll}>
                        View All →
                    </button>
                </div>

                <div className="cards-container">
                    {moviesData.slice(0, visibleCount).map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <img onClick={() => { navigate(`/movies/${movie.id}`) }}
                                src={movie.image} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>
                                {movie.year} · {movie.genre} · {movie.duration}
                            </p>
                            <div className="card-footer">
                                <button className="ticket-btn" onClick={() =>
                                    navigate(`/movies/${movie.id}/${selectedDate}`, { state: { movie } })}>Buy Tickets</button>


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
    );
};

export default MovieDetail;
