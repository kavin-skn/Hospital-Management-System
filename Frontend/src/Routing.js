import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './home'
import { Register } from './Register'
import AboutUs from './AboutUs'
// import ContactUs from './contact'
import Facilities from './facilities'
import Appointment from './appointment'
import Doctors from './doctors'
import PatientRecords from './patient'
import Medicine from './medicine'
import Logink from './Login'
import Feedback from './Feedback'



function Routing() {
  return (
    // <Router>
    <Routes>
    <Route path ='/' element={<Home/>}/>
    <Route path="/login" element ={<Logink/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/about" element={<AboutUs/>}/>

    <Route path="/facilities" element={<Facilities/>}/>
    <Route path="/appointment" element={<Appointment/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/medicine" element={<Medicine/>}/>
    <Route path="/feed" element={<Feedback/>}/>
   

   
 <Route path="/patient" element={<PatientRecords/>}/>
 
    
    
    
    </Routes>
    // </Router>
  )
}

export default Routing