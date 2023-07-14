import React from 'react';
import Navbar from './Navbar';

const Doctors = () => {
  // Doctor details
  const doctors = [
    {
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      education: 'MBBS, MD',
      experience: '10+ years of experience',
      location: 'Cardiology Department, Building A',
    },
   {
      name: 'Dr. Jane Smith',
      specialty: 'Pediatrics',
      education: 'MBBS, DCH',
      experience: '8+ years of experience',
      location: 'Pediatrics Department, Building B',
    },
    {
      name: 'Dr. Michael Johnson',
      specialty: 'Dermatology',
      education: 'MBBS, MD',
      experience: '12+ years of experience',
      location: 'Dermatology Department, Building C',
    },
    {
      name: 'Dr. Emily Davis',
      specialty: 'Internal Medicine',
      education: 'MBBS, MD',
      experience: '15+ years of experience',
      location: 'Internal Medicine Department, Building D',
    },
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Obstetrics and Gynecology',
      education: 'MBBS, MD',
      experience: '10+ years of experience',
      location: 'Obstetrics and Gynecology Department,BuildingE',
    },
    {
      name: 'Dr. Robert Davis',
      specialty: 'Orthopedic Surgery',
      education: 'MBBS, MS',
      experience: '12+ years of experience',
      location: 'Orthopedic Surgery Department, Building F',
    },
  ];

  return (
    <div>
      <Navbar />
     
      <br />
      <br />
      <br />
      <h2>Our Doctors</h2>
      <div className="doctor-list">
        {doctors.map((doctor, index) => (
          <div className="doctor" key={index}>
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <p>Education: {doctor.education}</p>
            <p>Experience: {doctor.experience}</p>
            <p>Location: {doctor.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
