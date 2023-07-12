import { AppBar, Button,  IconButton, Toolbar } from '@mui/material'
import React from 'react';
// import "../Css/navbar.css";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Login from '../login';
// import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  return (
    <>
    <AppBar>
    <h2>HOSPITAL MANAGEMENT SYSTEM</h2>
    <Toolbar className='NavBar'>
    <IconButton>
    <MenuIcon fontSize='large' className='menu'/></IconButton>
    <Button color='inherit' className><Link to={'navbutton'}>Home</Link></Button>
    
    <Button color='inherit' className><Link to={'navbutton'}>Contact</Link></Button>
    <Button color='inherit' className><Link to={'navbutton'}>About Us</Link></Button>
    
    <AccountCircleRoundedIcon fontSize='large' color='white' className='Account'/>
    <Link to='/login'><Button color='inherit' className='navbutton'> Login</Button></Link>
    <Button type='button' className='navbutton'>Logout</Button>
    </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar