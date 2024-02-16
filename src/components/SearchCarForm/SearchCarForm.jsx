import React from 'react';
import CarMakeDropdown from '../CarMakeDropdown';
import RentalPriceDropdown from '../RentalPriceDropdown';
import MileageDropdown from '../MileageDropdown';
import { FormWrapper, Form, SubmitButton  } from './SearchCarForm';
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
    <FormWrapper>
    <Form onSubmit={handleSubmit}> 
      <CarMakeDropdown selectedMake={selectedMake} handleMakeChange={handleMakeChange} />
      <RentalPriceDropdown selectedPrice={selectedPrice} handlePriceChange={handlePriceChange} />
      <MileageDropdown
        minMileage={minMileage}
        maxMileage={maxMileage}
        handleMinMileageChange={handleMinMileageChange}
        handleMaxMileageChange={handleMaxMileageChange}
      />
      <SubmitButton type="submit">Search</SubmitButton> 
    </Form>
  </FormWrapper>
  );
};

export default SearchCarForm;