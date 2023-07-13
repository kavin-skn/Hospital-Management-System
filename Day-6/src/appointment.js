import React, { useState } from 'react';

const Appointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and submission logic here

    // Display success message or handle errors
  };

  return (
    <div>
      <h2>Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <br></br> <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br></br>
        </label>
        <br />
        <label>
          Email
          <br></br> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br></br>
        </label>
        <br />
        <label>
          Phone Number
          <br></br><input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required /><br></br>
        </label>
        <br />
        <label>
          Appointment Date
          <br></br><input type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required /><br></br>
        </label>
        <br />
        <label>
          Appointment Time
          <br></br><input type="time" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required /><br></br>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Appointment;
