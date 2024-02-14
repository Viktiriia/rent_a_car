import React from 'react';
import { Link } from 'react-router-dom';

const CarListItem = ({id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, 
  rentalPrice, address, rentalConditions, mileage }) => {
   return (
    <li>
      <Link to={`/car-details/${id}`}>
      <img
        src={img }
        width={200}
        height={300}
        alt={make}
      />
       
        <h2>{make} {model}, {year}</h2>
        <p>{address} | Id: {id} | Type: {type}
        Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}</p>
        <h3>{description}</h3>
        <h3> Accessories and Functionalities</h3>
        <p>{accessories}{functionalities}</p>
        <h3>Rental Conditions</h3>
        <p>{rentalConditions}
       Mileage: {mileage}
       Price: {rentalPrice}</p>

       <button type='submit'>Rental car</button>
      </Link>
    </li>
  );
};

export default CarListItem;   