import React from 'react';

const MileageDropdown = ({ minMileage, maxMileage, handleMinMileageChange, handleMaxMileageChange }) => {
  return (
    <div>
        <p>Car mileage / km</p>
      <label>
        <input 
          type="number" 
          value={minMileage} 
          onChange={handleMinMileageChange} 
          placeholder="From" 
        />
      </label>
      <label>
        <input 
          type="number" 
          value={maxMileage} 
          onChange={handleMaxMileageChange} 
          placeholder="To" 
        />
      </label>
    </div>
  );
};

export default MileageDropdown;