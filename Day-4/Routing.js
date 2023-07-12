import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './home'
import { Login } from './Login'
import { Register } from './Register'
import AboutUs from './AboutUs'

function Routing() {
  return (
    <Router>
    <Routes>
    <Route path ='/' element={<Home/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    </Routes>
    </Router>
  )
}

export default Routing