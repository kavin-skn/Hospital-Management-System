import React from 'react';
import Navbar from './Navbar';
const AboutUs = () => {
  return (
    <div>
    <Navbar/>
    <div  className='about'>
      <h1>About Us</h1>
      <p>
        Welcome to our hospital! We are committed to providing the highest quality healthcare
        services to our patients. Our dedicated team of healthcare professionals, including
        doctors, nurses, and support staff, work tirelessly to ensure the well-being and
        satisfaction of our patients.
      </p>
      <p>
        Our hospital is equipped with state-of-the-art facilities and advanced medical technology.
        We offer a wide range of medical services, including diagnosis, treatment, and prevention
        of various medical conditions. Our goal is to deliver personalized and compassionate care
        to each and every patient who walks through our doors.
      </p>
      <p>
        We strive to create a comfortable and welcoming environment for our patients and their
        families. Our commitment to excellence and continuous improvement drives us to stay updated
        with the latest advancements in medical science and technology.
      </p>
      <p>
        Thank you for choosing our hospital. We look forward to serving you and providing the
        best possible healthcare experience.
      </p>
    </div>
    
    </div>
  );
};

export default AboutUs;
