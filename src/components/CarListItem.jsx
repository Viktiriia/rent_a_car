import React from 'react';
import { Link } from 'react-router-dom';

const CarListItem = ({
  car,
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  address,
  rentalCompany,
  rentalConditions,
  mileage,
}) => {
  return (
   
    <li>
      <img src={img} width={200} height={300} alt={make} />

      <h2>
        {make} {model}, {year} {rentalPrice}
      </h2>
      <p>
        {address} | {rentalCompany}
        {type} | {id} | {functionalities}
      </p>
      <Link to={`/car-details/${id}`}>
        <button type="submit">learn more</button>
      </Link>
    </li>
  );
};

export default CarListItem;

