import React, { useState } from 'react';
import Navbar from './Navbar';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and submission logic here

    // Display success message or handle errors

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Message:
          <br />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Contact the hospital for assistance:</p>
      <p>Phone: <strong>123-456-7890</strong></p>
      <p>Email: <strong>info@hospital.com</strong></p>
    </div>
  );
};

export default ContactUs;
