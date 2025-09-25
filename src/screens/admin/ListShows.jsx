import React from 'react'
// Assuming you import the CSS file for styling
import Title from '../../components/admin/Title'
// import './ShowsTable.css' 

const showData = [
  // ... (Your showData array remains the same)
  { movieName: 'Mission: Impossible - The Final Reckoning', showTime: 'Mon, November 10 at 2:30 PM', totalBookings: 62, earnings: 1488 },
  { movieName: 'How to Train Your Dragon', showTime: 'Mon, November 10 at 2:30 PM', totalBookings: 35, earnings: 875 },
  { movieName: 'K.O.', showTime: 'Mon, November 10 at 2:30 PM', totalBookings: 66, earnings: 1518 },
  { movieName: 'How to Train Your Dragon', showTime: 'Mon, November 10 at 5:30 PM', totalBookings: 16, earnings: 400 },
  { movieName: 'K.O.', showTime: 'Mon, November 10 at 5:30 PM', totalBookings: 23, earnings: 529 },
  { movieName: 'Mission: Impossible - The Final Reckoning', showTime: 'Mon, November 10 at 5:30 PM', totalBookings: 38, earnings: 912 },
  { movieName: 'How to Train Your Dragon', showTime: 'Mon, November 10 at 8:30 PM', totalBookings: 5, earnings: 125 },
  { movieName: 'K.O.', showTime: 'Mon, November 10 at 8:30 PM', totalBookings: 23, earnings: 529 },
  { movieName: 'Mission: Impossible - The Final Reckoning', showTime: 'Mon, November 10 at 8:30 PM', totalBookings: 24, earnings: 576 },
  { movieName: 'How to Train Your Dragon', showTime: 'Tue, November 11 at 1:30 AM', totalBookings: 14, earnings: 350 },
  { movieName: 'How to Train Your Dragon', showTime: 'Tue, November 11 at 2:30 PM', totalBookings: 9, earnings: 225 },
  { movieName: 'STRAW', showTime: 'Tue, November 11 at 2:30 PM', totalBookings: 6, earnings: 126 },
  { movieName: 'Mission: Impossible - The Final Reckoning', showTime: 'Tue, November 11 at 2:30 PM', totalBookings: 30, earnings: 720 },
  { movieName: 'K.O.', showTime: 'Tue, November 11 at 2:30 PM', totalBookings: 36, earnings: 828 },
  { movieName: 'The Accountant®', showTime: 'Tue, November 11 at 2:30 PM', totalBookings: 6, earnings: 174 },
  { movieName: 'K.O.', showTime: 'Tue, November 11 at 5:30 PM', totalBookings: 46, earnings: 1058 },
  { movieName: 'Mission: Impossible - The Final Reckoning', showTime: 'Tue, November 11 at 5:30 PM', totalBookings: 33, earnings: 792 },
  { movieName: 'STRAW', showTime: 'Tue, November 11 at 5:30 PM', totalBookings: 12, earnings: 252 },
];

const ListShows = () => {
  return (
    <div className="list-shows-container">
      <div className="list-header">
      <Title text1="List" text2="Shows" />
      </div>
      <div className="list-shows-container1"> {/* This is the scrolling container */}
        
        {/* Table structure for desktop/larger screens */}
        <table className="shows-table desktop-view">
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Show Time</th>
              <th>Total Bookings</th>
              <th>Earnings</th>
            </tr>
          </thead>
          <tbody>
            {showData.map((show, index) => (
              <tr key={index}>
                <td className="movie-name">{show.movieName}</td>
                <td>{show.showTime}</td>
                <td>{show.totalBookings}</td>
                <td className="earnings">${show.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Card/List structure for mobile/smaller screens (max-width: 800px and 488px) */}
        <div className="shows-list mobile-view">
          {showData.map((show, index) => (
            <div key={index} className="show-card">
              {/* ... (Mobile card content) ... */}
              <div className="show-detail movie-name-detail">
                <span className="label">Movie Name:</span>
                <span className="value movie-name">{show.movieName}</span>
              </div>
              <div className="show-detail show-time-detail">
                <span className="label">Show Time:</span>
                <span className="value">{show.showTime}</span>
              </div>
              <div className="show-detail total-bookings-detail">
                <span className="label">Total Bookings:</span>
                <span className="value">{show.totalBookings}</span>
              </div>
              <div className="show-detail earnings-detail">
                <span className="label">Earnings:</span>
                <span className="value earnings">${show.earnings}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListShows;