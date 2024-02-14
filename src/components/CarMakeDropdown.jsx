import React from 'react';

const CarMakeDropdown = ({ selectedMake, handleMakeChange }) => {
  const carMakes = [
    "Buick", "Volvo", "HUMMER", "Subaru", "Mitsubishi", "Nissan", "Lincoln", 
    "GMC", "Hyundai", "MINI", "Bentley", "Mercedes-Benz", "Aston Martin", 
    "Pontiac", "Lamborghini", "Audi", "BMW", "Chevrolet", "Mercedes-Benz", 
    "Chrysler", "Kia", "Land"
  ];

  return (
    <div>
      <label htmlFor="carMake">Choose a car make:</label>
      <select id="carMake" value={selectedMake} onChange={handleMakeChange}>
        <option value="">Enter the text</option>
        {carMakes.map((make, index) => (
          <option key={index} value={make}>
            {make}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CarMakeDropdown;