import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './home'
import { Login } from './Login'
import { Register } from './Register'
import AboutUs from './AboutUs'
import ContactUs from './contact'
import Facilities from './facilities'
import Appointment from './appointment'
import Doctors from './doctors'

function Routing() {
  return (
    <Router>
    <Routes>
    <Route path ='/' element={<Home/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/facilities" element={<Facilities/>}/>
    <Route path="/appointment" element={<Appointment/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    
    
    
    </Routes>
    </Router>
  )
}

export default Routing