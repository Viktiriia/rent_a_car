import React from 'react';
import CarMakeDropdown from './CarMakeDropdown';
import RentalPriceDropdown from './RentalPriceDropdown';
import MileageDropdown from './MileageDropdown';

const SearchCarForm = ({
  selectedMake,
  handleMakeChange,
  selectedPrice,
  handlePriceChange,
  minMileage,
  maxMileage,
  handleMinMileageChange,
  handleMaxMileageChange,
  handleSubmit, 
}) => {
  return (
    <form onSubmit={handleSubmit}> 
      <CarMakeDropdown selectedMake={selectedMake} handleMakeChange={handleMakeChange} />
      <RentalPriceDropdown selectedPrice={selectedPrice} handlePriceChange={handlePriceChange} />
      <MileageDropdown
        minMileage={minMileage}
        maxMileage={maxMileage}
        handleMinMileageChange={handleMinMileageChange}
        handleMaxMileageChange={handleMaxMileageChange}
      />
      <button type="submit">Search</button> 
    </form>
  );
};

export default SearchCarForm;