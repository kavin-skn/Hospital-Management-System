import React, { useState } from 'react';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function PatientRecords() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const patientData = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      details: details,
    };

    axios.post('http://127.0.0.1:8080/patients', patientData)
      .then(() => {
        toast.success('Successfully patient records added', {
          position: toast.POSITION.TOP_CENTER,
        });
        setFirstName('');
        setLastName('');
        setAge('');
        setDetails('');
      })
      .catch((error) => {
        console.error('Error adding patient:', error);
        toast.error('Failed to add patient records. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Add Patient Records</h2>
      { /* The toast container */}
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <br />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name
          <br />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Age
          <br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Details
          <br />
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default PatientRecords;
