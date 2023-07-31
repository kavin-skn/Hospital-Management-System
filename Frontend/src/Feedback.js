import React, { useState } from 'react';
// import './Contactus.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Navbar';
const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


  const handleSubmit = async(e) => {
    e.preventDefault(); 
      const reg={"name":name,"email":email, "message":message};
      console.log(reg);
    const result=await axios.post("http://localhost:8002/feedback/addf",reg);
    console.log(result.data);
    toast.success("Message sent Succesfully!",{
      theme:"",
    });
    window.location.reload();
  }
  return (
    
    <div className="contact-form-container" style={{ backgroundImage: "url()" }}>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <br></br>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
            />
      </form>
      <p>Phone: <strong>123-456-7890</strong></p>
      <p>Email: <strong>skn@hospital.com</strong></p>
    </div>
  );
};

export default Feedback;