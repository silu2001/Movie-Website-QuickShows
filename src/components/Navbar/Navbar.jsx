import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useUser, useClerk, UserButton } from '@clerk/clerk-react';
import { LuTicketPlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-q"><img src="https://quickshow.vercel.app/assets/logo-BHx-5GOD.svg" alt="logo" /></span>
      </div>



      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}  >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/theaters" className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}>
            Theaters
          </NavLink>
        </li>
        <li>
          <NavLink to="/releases" className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}>
            Releases
          </NavLink>
        </li>
      </ul>

      {/* Right Side */}
      <div className="right-side">
        <FaSearch className="search-icon" />
        {
          !user ? (
            <button className="login-btn" onClick={openSignIn}>Login</button>

          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<LuTicketPlus />}
                  onClick={() => navigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          )

        }

      </div>
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
