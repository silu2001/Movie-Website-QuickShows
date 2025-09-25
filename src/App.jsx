import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

import Footer from './components/Footer/footer'

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './screens/home/Home'
import Movies from './screens/movies/Movies'
import MovieDetail from './screens/movies/MovieDetail'
import SeatLayout from './screens/movies/SeatLayout'
import Theaters from './screens/theaters/Theaters'
import Releases from './screens/releases/Releases'
import MyBookings from './screens/movies/MyBookings'

import AddShows from './screens/admin/AddShows'
import Dashboard from './screens/admin/Dashboard'
import Layout from './screens/admin/Layout'
import ListShows from './screens/admin/ListShows'
import ListBookings from './screens/admin/ListBookings'


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/theaters" element={<Theaters />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/admin/*" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />
          
        </Route>

      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
