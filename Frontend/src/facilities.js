import React from 'react';
import Navbar from './Navbar';

const Facilities = () => {
  // Hospital facilities with additional details
  const facilities = [
    {
      name: 'Emergency Services',
      description: '24/7 emergency care with trained medical staff',
      additionalInfo: 'Available for immediate medical assistance'
    },
    {
      name: 'Surgery',
      description: 'State-of-the-art operating rooms and skilled surgeons',
      additionalInfo: 'Specialized surgical procedures performed'
    },
    {
      name: 'Intensive Care Unit',
      description: 'Specialized care for critically ill patients',
      additionalInfo: 'Advanced monitoring and life support systems'
    },
    {
      name: 'Laboratory',
      description: 'Diagnostic tests and analysis',
      additionalInfo: 'Highly accurate and efficient lab services'
    },
    {
      name: 'Radiology',
      description: 'Imaging services (X-ray, MRI, CT scan)',
      additionalInfo: 'Detailed and precise imaging results'
    },
    {
      name: 'Pharmacy',
      description: 'Medication dispensing and consultation',
      additionalInfo: 'Wide range of quality pharmaceuticals'
    },
    {
      name: 'Maternity Ward',
      description: 'Specialized care for expectant mothers',
      additionalInfo: 'Comfortable and safe environment for delivery'
    },
    {
      name: 'Pediatrics',
      description: 'Child healthcare services',
      additionalInfo: 'Dedicated team of pediatricians'
    },
    {
      name: 'Rehabilitation Services',
      description: 'Physical and occupational therapy',
      additionalInfo: 'Tailored programs for recovery and rehabilitation'
    },
    {
      name: 'Cafeteria',
      description: 'Food services for patients and visitors',
      additionalInfo: 'Variety of healthy and nutritious meals'
    },
    {
      name: 'Parking',
      description: 'Large parking space for patients and visitors',
      additionalInfo: 'Convenient parking facilities'
    },
  ];

  return (
    <div> 
    <Navbar/>
    
    <br></br>
    <br></br>
    <br></br>
    
      <h2>Facilities</h2>
      <div className="facility-list">
        {facilities.map((facility, index) => (
          <div className="facility" key={index}>
            <h3>{facility.name}</h3>
            <p>{facility.description}</p>
            <p>{facility.additionalInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
