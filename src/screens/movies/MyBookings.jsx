

// export default MyBookings;
import React from "react";
import { useLocation } from "react-router-dom";

const MyBookings = () => {
  const location = useLocation();
  const newBooking = location.state;

  // If no bookings yet
  if (!newBooking) {
    return (
      <div className="bookings-container">
        <div className="booking-ticket">
          <h2 className="bookings-title">My Bookings</h2>
          <p className="no-bookings">No bookings yet.</p>
        </div>
      </div>
    );
  }

  // Ensure unique ID for new booking
  const booking = { id: Date.now(), ...newBooking };

  return (
    <div className="bookings-container">
      <div className="booking-ticket">
        <h2 className="bookings-title">My Bookings</h2>
        <div key={booking.id} className="booking-card">
          <img
            src={booking.image}
            alt={booking.title}
            className="booking-img"
          />
          <div className="booking-details">
            <h3>{booking.title}</h3>
            <p>{booking.duration}</p>
            <p className="booking-date">{booking.date}</p>
            <div className="booking-footer">
              <div>
                <p className="price">${booking.price}</p>
                <p>Total Tickets: {booking.totalTickets}</p>
                <p>
                  Seat Number:{" "}
                  <span className="seat">{booking.seats.join(", ")}</span>
                </p>
              </div>
              <button className="pay-btn">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;



