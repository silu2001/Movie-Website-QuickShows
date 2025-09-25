import React from 'react'
const bookingData = [
  { userName: 'GreatStack', movieName: 'In the Lost Lands', showTime: 'Mon, June 30 at 8:00 AM', seats: 'D1, D2', amount: 98 },
  { userName: 'GreatStack', movieName: 'In the Lost Lands', showTime: 'Mon, June 30 at 8:00 AM', seats: 'A1', amount: 49 },
  { userName: 'GreatStack', movieName: 'In the Lost Lands', showTime: 'Mon, June 30 at 8:00 AM', seats: 'A1, A2, A3', amount: 147 },
];

const ListBookings = () => {
  return (
    <>
      <div className="list-bookings-container">
      <div className="list-header">
        <h1 className="list-heading">List</h1>
        <h2 className="bookings-heading">Bookings</h2>
      </div>

      {/* Table structure for desktop/larger screens */}
      <table className="bookings-table desktop-view">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Movie Name</th>
            <th>Show Time</th>
            <th>Seats</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking, index) => (
            <tr key={index}>
              <td>{booking.userName}</td>
              <td className="movie-name-cell">{booking.movieName}</td>
              <td>{booking.showTime}</td>
              <td>{booking.seats}</td>
              <td className="amount-cell">${booking.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Card/List structure for mobile/smaller screens */}
      <div className="bookings-list mobile-view">
        {bookingData.map((booking, index) => (
          <div key={index} className="booking-card">
            <div className="booking-detail">
              <span className="label">User Name:</span>
              <span className="value">{booking.userName}</span>
            </div>
            <div className="booking-detail movie-name-detail">
              <span className="label">Movie Name:</span>
              <span className="value movie-name-value">{booking.movieName}</span>
            </div>
            <div className="booking-detail">
              <span className="label">Show Time:</span>
              <span className="value">{booking.showTime}</span>
            </div>
            <div className="booking-detail">
              <span className="label">Seats:</span>
              <span className="value">{booking.seats}</span>
            </div>
            <div className="booking-detail">
              <span className="label">Amount:</span>
              <span className="value amount-value">${booking.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </>
  )
}

export default ListBookings
