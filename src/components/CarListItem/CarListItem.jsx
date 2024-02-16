import React from 'react';
import { Link } from 'react-router-dom';
import Heart from '../Heart';
import { StyledDiv, Button } from './CarListItem.styled';

const CarListItem = ({
  car,
  id,
  year,
  make,
  model,
  type,
  img,
  addFavorite,
  setFavorite,
  isFavorite,
  functionalities,
  rentalPrice,
  address,
  rentalCompany,
  rentalConditions,
  mileage,
}) => {
  if (!address || !functionalities || !functionalities[0]) {
    return null; 
  }

  const addressParts = address.split(',');
  const functionalitiesParts = functionalities[0].split(' ');
  const removeFavorite = (id) => {
    setFavorite((prevFavorite) => prevFavorite.filter((item) => item.id !== id));
  };

  return (
    <StyledDiv>
      <div>
        <div className="img-warpper">
          <img src={img} alt={`${make} ${model}`} />
          {!isFavorite ? (
            <button type="button" onClick={() => addFavorite(car.id)}>
              <Heart />
            </button>
          ) : (
            <button type="button" onClick={() => removeFavorite(car.id)}>
              <Heart setting={true} />
            </button>
          )}
        </div>
        <div className="title-wrapper">
          <h2>
            <span>{make}</span>, <span>{year}</span>
          </h2>
          <p>{rentalPrice}</p>
        </div>

        <p className="descr">
          {addressParts[1]} | {addressParts[2]} | {rentalCompany} {type} | {id} |{' '}
          {functionalitiesParts[0]} {functionalitiesParts[0]}
        </p>
      </div>
      <Link to={`/car-details/${id}`}>
        <Button type="submit">Learn more</Button>
      </Link>
    </StyledDiv>
  );
};

export default CarListItem;     