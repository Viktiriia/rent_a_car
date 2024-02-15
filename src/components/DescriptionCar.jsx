import React from 'react';

const DescriptionCar = ({ car}) => {
  return (
    <li>
      <img
        src={car.img }
        width={200}
        height={300}
        alt={car.make}
      />

        <h2>{car.make} {car.model}, {car.year}</h2>
        <p>{car.address} | Id: {car.id} | Type: {car.type}
        Fuel Consumption: {car.fuelConsumption} | Engine Size: {car.engineSize}</p>
        <h3>{car.description}</h3>
        <h3> Accessories and Functionalities</h3>
        <p>{car.accessories}{car.functionalities}</p>
        <h3>Rental Conditions</h3>
        <p>{car.rentalConditions}
       Mileage: {car.mileage}
       Price: {car.rentalPrice}</p>

       <button type='submit'>Rental car</button>
    </li>
  );
};

export default DescriptionCar;
