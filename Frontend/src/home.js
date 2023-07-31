import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Home.css'; 
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userslice';
function Home() {
  const user=useSelector(selectUser)
  const handleAppointmentClick = () => {
    
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
      <h1>SKS HOSPITAL</h1>
      <p>Welcome :{user.username} </p>
      <p>Our team of experienced doctors and nurses is dedicated to your well-being.</p>
      <p>Explore our website to learn more about our services and facilities.</p>


      <Link to="./appointment">
        <button className="appointment-button blinking" onClick={handleAppointmentClick}>
          Make an Appointment
        </button>
      </Link>

      <Footer />
    </div>
  );
}

export default Home;
