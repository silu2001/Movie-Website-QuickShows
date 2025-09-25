
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaThLarge, FaPlus, FaListUl, FaClipboardList } from "react-icons/fa";


const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="admin-sidebar">
      {/* Profile Section */}
      <div className="sidebar-profile">
        <div className="profile-pic">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Admin"
          />
        </div>
        <h3 className="profile-name">Admin User</h3>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-menu">
        <Link
          to="/admin"
          className={`menu-item ${
            location.pathname === "/admin" ? "active" : ""
          }`}
        >
          <FaThLarge className="icon" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/admin/add-shows"
          className={`menu-item ${
            location.pathname === "/admin/add-shows" ? "active" : ""
          }`}
        >
          <FaPlus className="icon" />
          <span>Add Shows</span>
        </Link>

        <Link
          to="/admin/list-shows"
          className={`menu-item ${
            location.pathname === "/admin/list-shows" ? "active" : ""
          }`}
        >
          <FaListUl className="icon" />
          <span>List Shows</span>
        </Link>

        <Link
          to="/admin/list-bookings"
          className={`menu-item ${
            location.pathname === "/admin/list-bookings" ? "active" : ""
          }`}
        >
          <FaClipboardList className="icon" />
          <span>List Bookings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

