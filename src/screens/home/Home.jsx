import React, { useState } from "react";
import bgImage from '../../assets/bgImage.png';
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


const trailers = [
    // ...existing code...
    {
        id: 1,
        title: "Ironheart | Official Trailer",
        thumbnail: "https://i.ytimg.com/vi_webp/WpW36ldAqnM/maxresdefault.webp",
        videoUrl: "https://www.youtube.com/embed/WpW36ldAqnM",
    },
    // ...existing code...
    {
        id: 2,
        title: "Thunderbolts | Official Trailer",
        thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
        id: 3,
        title: "Loki Season 2 | Official Trailer",
        thumbnail: "https://img.youtube.com/vi/UBhlqe2OTt4/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/UBhlqe2OTt4",
    },
    {
        id: 4,
        title: "What If...? | Official Trailer",
        thumbnail: "https://img.youtube.com/vi/x9D0uUKJ5KI/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/x9D0uUKJ5KI",
    },
];

const Home = () => {

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

    const [currentVideo, setCurrentVideo] = useState(null);
    const [currentThumbnail, setCurrentThumbnail] = useState(trailers[0].thumbnail);

    const handlePlayVideo = (videoUrl, thumbnail) => {
        setCurrentVideo(videoUrl + "?autoplay=1");
        setCurrentThumbnail(thumbnail);
    };

    const Navigate = useNavigate();

    return (
        <>
            <section
                className="hero-section"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="overlay">
                    <div className="hero-content">
                        <img
                            src="https://quickshow.vercel.app/assets/marvelLogo-D2PF-9pQ.svg"
                            alt="Marvel Studios"
                            className="marvel-logo"
                        />

                        <h1 className="hero-title">Guardians of the Galaxy</h1>

                        <div className="hero-meta">
                            <span>Action</span>
                            <span>|</span>
                            <span>Adventure</span>
                            <span>|</span>
                            <span>Sci-Fi</span>
                            <span>|</span>
                            <span>2018</span>
                            <span>|</span>
                            <span>2h 8m</span>
                        </div>

                        <p className="hero-description">
                            In a post-apocalyptic world where cities ride on wheels and consume
                            each other to survive, two people meet in London and try to stop a
                            conspiracy.
                        </p>

                        <button className="explore-btn">Explore Movies →</button>
                    </div>
                </div>
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
                            <img onClick={() => { Navigate(`/movies/${movie.id}`) }}
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

            <section className="trailer-section">
                <h2 className="section-title">Trailers</h2>

                {/* Main Video / Thumbnail */}
                <div className="main-video">
                    {currentVideo ? (
                        <iframe
                            src={currentVideo}
                            title="YouTube trailer"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div
                            className="thumbnail-wrapper"
                            onClick={() =>
                                handlePlayVideo(trailers[0].videoUrl, trailers[0].thumbnail)
                            }
                        >
                            <img src={currentThumbnail} alt="Main trailer thumbnail" />
                            <div className="main-play-icon">▶</div>
                        </div>
                    )}
                </div>

                {/* Sub Videos */}
                <div className="sub-videos">
                    {trailers.map((trailer) => (
                        <div
                            key={trailer.id}
                            className="sub-video"
                            onClick={() => handlePlayVideo(trailer.videoUrl, trailer.thumbnail)}
                        >
                            <img src={trailer.thumbnail} alt={trailer.title} />
                            <div className="play-icon">▶</div>
                            <p>{trailer.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home