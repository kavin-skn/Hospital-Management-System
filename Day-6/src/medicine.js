import React from 'react';
import ReactDOM from 'react-dom';

const MedicineDetails = ({ medicine }) => {
  return (
    <div>
      <h2>Medicine Details</h2>
      <h3>{medicine.name}</h3>
      <p>Manufacturer: {medicine.manufacturer}</p>
      <p>Generic Name: {medicine.genericName}</p>
      <p>Strength: {medicine.strength}</p>
      <p>Description: {medicine.description}</p>
      <p>Side Effects: {medicine.sideEffects}</p>
      <p>Usage Instructions: {medicine.usageInstructions}</p>
    </div>
  );
};

const MedicinePage = () => {
  const medicine = {
    name: 'Medicine A',
    manufacturer: 'Manufacturer XYZ',
    genericName: 'Generic Name',
    strength: '500mg',
    description: 'This medicine is used to...',
    sideEffects: 'Common side effects include...',
    usageInstructions: 'Take one tablet daily...',
  };

  return (
    <div>
      <h1>Medicine Page</h1>
      <MedicineDetails medicine={medicine} />
    </div>
  );
};

ReactDOM.render(<MedicinePage />, document.getElementById('root'));
