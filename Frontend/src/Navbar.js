import { AppBar, Button
  , Toolbar } from '@mui/material'
import React from 'react';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
//import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Login from '../login';
// import { Link } from 'react-router-dom';
import "./navbar.css";

function Navbar() {
  return (
    <>
    <AppBar>
<br></br>
    <Toolbar className='NavBar'>
    
    <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>

    <Button color='inherit' className>
  <Link to='/' style={{ color: 'black' }}>
    Home
  </Link>
</Button>
    
   
    <Button color='inherit' className>
  <Link to="/feed" style={{ color: 'black' }}>
    Contact Us
  </Link>
</Button>
 
<Button color='inherit' className>
<Link to="/about" style={{ color: 'black' }}>
  About Us
</Link>
</Button>

<Button color='inherit' className>
<Link to="/doctors" style={{ color: 'black' }}>
  Doctors
</Link>
</Button>

<Button color='inherit' className>
<Link to="/patient" style={{ color: 'black' }}>
  Patient Records
</Link>
</Button>

<Button color='inherit' className>
<Link to="/facilities" style={{ color: 'black' }}>
  Facilities
</Link>
</Button>

<Button color='inherit' className>
<Link to="/medicine" style={{ color: 'black' }}>
  Medicine AND Billing
</Link>
</Button>
   
   

    <AccountCircleRoundedIcon fontSize='large' color='white' className='Account'/>


    <Link to='/login'>
    <Button color='inherit' className='navbutton' style={{ color: 'white' }}>
      Login
    </Button>
  </Link>

  
    <Button type='button' className='navbutton'><h1 style={{color:"light blue",fontSize:"13px"}}>Logout</h1></Button>
    </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar