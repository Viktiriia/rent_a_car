import React from 'react';
import CarListItem from './CarListItem';

const CarList = ({ cars }) => {
  const showCars = Array.isArray(cars) && cars.length;

  return (
    <ul className="postList">
      {showCars &&
        cars.map(car => {
          return (
            <CarListItem
         img={car.img}
         make={car.make} 
         model={car.model} 
         year={car.year}
          />

            
          );
        })}
    </ul>
  );
};
export default CarList;
