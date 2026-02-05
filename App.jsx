import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Services from './Components/Services.jsx';
import ServiceDetails from './Components/ServiceDetails.jsx';
import Blog from './Components/Blog.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Login from './Admin/Login.js';
import Admin from './Admin/Admin.jsx';
import Register from './Admin/Register.jsx';
import Addblog from './Admin/Addblog.jsx';
import Addprojects from './Admin/Addprojects.jsx';

function App() {


  return (
    <>
    <Router>
        <Navbar />
      <Routes>
        {<Route path='/' element={<div><Home/></div>} />}
        {<Route path='/contact' element={<div><Contact/></div>} />}
        {<Route path='/services' element={<div><Services/></div>} />}
        <Route path="/service-details" element={<ServiceDetails />} />
        {<Route path='/blog' element={<div><Blog/></div>} />}
        {<Route path='/portfolio' element={<div><Portfolio/></div>} />}
        {/* {<Route path='/admin' element={<div><Login/></div>} />} */}
        <Route path="/admin" element={<Admin />} />
        {<Route path="login" element={<div><Login/></div>} />}
        {<Route path="/register" element={<div><Register/></div>} />}
        {<Route path="/addblogs" element={<div><Addblog/></div>} />}
        {<Route path='/manageprojects' element={<div><Addprojects/></div>} />}
        </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
