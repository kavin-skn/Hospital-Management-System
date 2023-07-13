import React from 'react';

const ContactUs = () => {
  // Hospital contact details
  const hospitalName = 'SK HOSPITAL';
  const hospitalAddress = '43a golden Street, Coimbatore, Tamil nadu, INDIA';
  const hospitalPhone = '+123-456-7890';
  const hospitalEmail = 'skn20@hospital.com';

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Hospital Name: {hospitalName}</p>
      <p>Address: {hospitalAddress}</p>
      <p>Phone: {hospitalPhone}</p>
      <p>Email: {hospitalEmail}</p>
    </div>
  );
};

export default ContactUs;
