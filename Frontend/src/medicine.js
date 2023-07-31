import React, { useState } from 'react';
import Navbar from './Navbar';
// import axios from 'axios';

const Medicine = () => {
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [billingAddress, setBillingAddress] = useState('');


  const medicineOptions = [
    {
      name: 'Paracetamol',
      pricePerUnit: 10,
      uses: 'This medicine helps reduce fever and provide relief from common cold symptoms',
      additionalInfo: 'Relief from fever and cold.',
    },
    {
      name: 'Medicine B',
      pricePerUnit: 15,
      uses: 'This medicine is used for Z.',
      additionalInfo: 'Some additional information about Medicine B.',
    },
    {
      name: 'Medicine C',
      pricePerUnit: 12,
      uses: 'This medicine treats A, B, and C.',
      additionalInfo: 'Some additional information about Medicine C.',
    },
    // Add more medicine objects as needed
  ];

  const handleMedicineNameChange = (event) => {
    setMedicineName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleBillingAddressChange = (event) => {
    setBillingAddress(event.target.value);
  };
  
      //  const integ = {
      //   medicineName: medicineName,
      //   quantity: quantity,
      //   totalPrice: totalPrice,
      //   billingAddress: billingAddress,
      // };
        
      // axios.post('http://127.0.0.1:8080/api/medicine', integ);


  const handleBuy = () => {
    // Find the selected medicine from the options array
    const selectedMedicine = medicineOptions.find(
      (medicine) => medicine.name === medicineName
      );

    if (selectedMedicine) {
      // Calculate total price based on selected medicine and quantity
      const total = selectedMedicine.pricePerUnit * quantity;
      setTotalPrice(total);

      setMedicineName('');
      setQuantity(1);
      setBillingAddress('');
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);


  };

  return (
    <div>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h2>Medicine Buying</h2>
      <label>
        Medicine Name:
        <select value={medicineName} onChange={handleMedicineNameChange}>
          <option value="">Select a medicine</option>
          {medicineOptions.map((medicine, index) => (
            <option key={index} value={medicine.name}>
              {medicine.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <br />
      {medicineName && (
        <div>
          <h3>Medicine Details</h3>
          <p>Uses: {medicineOptions.find((medicine) => medicine.name === medicineName).uses}</p>
          <p>
            Additional Information:{' '}
            {medicineOptions.find((medicine) => medicine.name === medicineName).additionalInfo}
          </p>
        </div>
      )}
      <label>
        Billing Address:
        <textarea value={billingAddress} onChange={handleBillingAddressChange} />
      </label>
      <br />
      <button onClick={handleBuy}>Buy</button>
      <h3>Total Price: {formatPrice(totalPrice)}</h3>
    </div>
  );
};

export default Medicine;
