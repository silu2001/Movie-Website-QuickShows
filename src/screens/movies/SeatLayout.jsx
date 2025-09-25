import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const SeatLayout = () => {

  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(decodeURIComponent(date)); // ✅ auto-filled from URL

  console.log("Movie ID:", id);
  console.log("Selected Date:", selectedDate);



  const navigate = useNavigate();
  const location = useLocation(); // ✅ hook at top-level
  const movie = location.state?.movie; // movie details passed from previous page


  const timings = ["08:30 PM", "02:30 PM", "05:30 PM"];

  const rows = [
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"],
    ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"],
    ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9"],
    ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9"],
    ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9"],
    ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9"],
    ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9"],
    ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9"],
    ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9"],
  ];

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleProceed = () => {
    if (!selectedTime || selectedSeats.length === 0) {
      alert("Please select a time slot and at least one seat.");
      return;
    }

    const ticketPrice = 120;

    // booking details with movie info
    const bookingDetails = {
      id: Date.now(),
      title: movie?.title ?? "Unknown Movie",
      duration: movie?.duration ?? "N/A",
      date: `${selectedDate} at ${selectedTime}`,
      price: ticketPrice * selectedSeats.length,
      totalTickets: selectedSeats.length,
      seats: selectedSeats,
      image: movie?.image ?? "https://via.placeholder.com/200x300.png?text=No+Image",
    };

    navigate("/my-bookings", { state: bookingDetails });
  };

  return (
    <div className="seat-selection-container">
      {/* Timings Section */}
      <div className="timings-box">
        <h3>Available Timings</h3>
        {timings.map((time, index) => (
          <p
            key={index}
            className={`time-slot ${selectedTime === time ? "active" : ""}`}
            onClick={() => setSelectedTime(time)}
          >
            <span>
              <IoTimeOutline />
            </span>{" "}
            {time}
          </p>
        ))}
      </div>

      {/* Seat Layout */}
      <div className="seats-section">
        <h2>Select your seat</h2>
        <div className="screen">SCREEN SIDE</div>

        <div className="seat-arrangement">
          {rows.map((row, idx) => (
            <div key={idx} className={`seat-row row-${idx + 1}`}>
              {row.map((seat) => (
                <button
                  key={seat}
                  className={`seat ${selectedSeats.includes(seat) ? "selected" : ""
                    }`}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          ))}
        </div>

        <button className="checkout-btn" onClick={handleProceed}>
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
};

export default SeatLayout;
