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
            key={car.id}
              img={car.img}
              make={car.make}
              model={car.model}
              year={car.year}
              rentalPrice={car.rentalPrice}
              address={car.address}
              rentalCompany={car.rentalCompany}
              type={car.type}
              id={car.id}
              functionalities={car.functionalities}
            />
          );
        })}
    </ul>
  );
};
export default CarList;
