import React from 'react'
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <Outlet />
    </>
  )
}

export default Layout