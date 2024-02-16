import React from 'react';
import CarListItem from '../CarListItem/CarListItem';
import { Ul } from './CarList.styled';

const CarList = ({ cars, setFavorite }) => {
  const showCars = Array.isArray(cars) && cars.length;

  return (
    <Ul>
      {showCars &&
        cars.map(car => (
          <CarListItem
            key={car.id}
            car={car}
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
        ))}
    </Ul>
  );
};

export default CarList;