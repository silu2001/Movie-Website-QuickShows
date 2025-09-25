import React from 'react'
import Title from '../../components/admin/Title'
import { FaUsers, FaDollarSign, FaPlayCircle, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { label: "Total Bookings", value: 19, icon: <FaChartLine /> },
    { label: "Total Revenue", value: "$818", icon: <FaDollarSign /> },
    { label: "Active Shows", value: 37, icon: <FaPlayCircle /> },
    { label: "Total Users", value: 80, icon: <FaUsers /> },
  ];

  const shows = [
    {
      title: "Sinners",
      price: "$22",
      rating: "7.5",
      date: "Sun, June 7 at 8:51 PM",
      image: "https://image.tmdb.org/t/p/original/yqsCU5XOP2mkbFamzAqbqntmfav.jpg",
    },
    {
      title: "Final Destination Bloodlines",
      price: "$39",
      rating: "7.0",
      date: "Thu, December 11 at 2:30 AM",
      image: "https://image.tmdb.org/t/p/original/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
    },
    {
      title: "The Accountant²",
      price: "$29",
      rating: "7.1",
      date: "Tue, November 11 at 2:30 PM",
      image: "https://image.tmdb.org/t/p/original/kMDUS7VmFhb2coRfVBoGLR8ADBt.jpg",
    },
    {
      title: "The Accountant²",
      price: "$29",
      rating: "7.1",
      date: "Tue, November 11 at 5:30 PM",
      image: "https://image.tmdb.org/t/p/original/kMDUS7VmFhb2coRfVBoGLR8ADBt.jpg",
    },
  ];
  return (
    <>

      <div className="admin-dashboard">
        <Title text1="Admin" text2="Dashboard" />

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Active Shows */}
        <h3 className="section-title">Active Shows</h3>
        <div className="shows-grid">
          {shows.map((show, index) => (
            <div className="show-card" key={index}>
              <img src={show.image} alt={show.title} />
              <div className="show-info">
                <h4>{show.title}</h4>
                <p className="price">{show.price}</p>
                <p className="rating">⭐ {show.rating}</p>
                <p className="date">{show.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default Dashboard
