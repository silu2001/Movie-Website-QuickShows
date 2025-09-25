import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
      <div className="admin-navbar">

        <Link to="/">
          <img src="https://quickshow.vercel.app/assets/logo-BHx-5GOD.svg" alt="logo" />
        </Link>

      </div>
    </>
  )
}

export default AdminNavbar
