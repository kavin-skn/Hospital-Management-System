import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
  const handleAppointmentClick = () => {
    // Handle appointment button click logic
  };

  return (
    <div className='back'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Navbar />
      <h1>WELCOME TO OUR HOSPITAL</h1>
      <p>Our team of experienced doctors and nurses is dedicated to your well-being.</p>
      <p>Explore our website to learn more about our services and facilities.</p>
      <Link to="./appointment"><button className="appointment-button" onClick={handleAppointmentClick}>
              Make an Appointment 
      </button></Link>
      <Footer />
    </div>
  );
}

export default Home;
