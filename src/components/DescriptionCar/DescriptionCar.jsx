import React from 'react';
import { Div , Button} from "./DescriptionCar.styled";

const DescriptionCar = ({ car}) => {
  return (
  <Div>
     
   <div className="img-warpper"><img
        src={car.img }
        alt={car.make}
        
      />
</div> 
<div>
        <h2 className="title">{car.make} <span className="model">{car.model}</span> {car.year}</h2>
        </div>
        <div className="short-info">
        <p className="descr">{car.address} | Id: {car.id} | Type: {car.type}
        Fuel Consumption: {car.fuelConsumption} | Engine Size: {car.engineSize}</p>
        </div>
        <p className="descriptions">{car.description}</p>
        <div   className="accessories">
        <h3> Accessories and Functionalities</h3>
        <ul>
          <li className="descr">{car.accessories}</li>
          <li className="descr">{car.functionalities}</li>
          </ul>
        </div>
        <h3>Rental Conditions</h3>
        <div className="conditions">
        <p className="descr">{car.rentalConditions}
       Mileage: {car.mileage}
       Price: {car.rentalPrice}</p>
        </div>
       

       <Button href="tel:+380730000000"> Rental car</Button>
       </Div>
  );
};

export default DescriptionCar;
