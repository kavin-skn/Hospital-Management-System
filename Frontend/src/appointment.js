import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const Appointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [appointmentdate, setAppointmentdate] = useState('');
  const [appointmenttime, setAppointmenttime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const integ = {
      name: name,
      email: email,
      phonenumber: phonenumber,
      appointmentdate: appointmentdate,
      appointmenttime: appointmenttime,
    };

    try {
      await axios.post('http://127.0.0.1:8080/post', integ);

      toast.success('Appointment confirmed!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, 
      });
    } catch (error) {
      
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div>
    
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h2>Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <br />{' '}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
        </label>
        <br />
        <label>
          Email
          <br />{' '}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
        </label>
        <br />
        <label>
          Phone Number
          <br />
          <input
            type="tel"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            required
          />
          <br />
        </label>
        <br />
        <label>
          Appointment Date
          <br />
          <input
            type="date"
            value={appointmentdate}
            onChange={(e) => setAppointmentdate(e.target.value)}
            required
          />
          <br />
        </label>
        <br />
        <label>
          Appointment Time
          <br />
          <input
            type="time"
            value={appointmenttime}
            onChange={(e) => setAppointmenttime(e.target.value)}
            required
          />
          <br />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer /> {/* Render the toast notifications */}
    </div>
  );
};

export default Appointment;
