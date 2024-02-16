import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv, Button } from './CarListItem.styled';

const CarListItem = ({
  car,
  id,
  year,
  make,
  model,
  type,
  img,
  functionalities,
  rentalPrice,
  address,
  rentalCompany,
}) => {
  const [isFavorite, setIsFavorite] = useState(
    () => JSON.parse(localStorage.getItem('cars'))?.includes(id) ?? false
  );

  const toggleFavorite = () => {
    const updatedFavorites = JSON.parse(localStorage.getItem('cars')) || [];
    if (isFavorite) {
      const index = updatedFavorites.indexOf(id);
      if (index !== -1) {
        updatedFavorites.splice(index, 1);
        localStorage.setItem('cars', JSON.stringify(updatedFavorites));
        setIsFavorite(false);
      }
    } else {
      updatedFavorites.push(id);
      localStorage.setItem('cars', JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  // Перевірка наявності властивості address
  const addressToShow = address ? address.split(',')[1] || '' : '';

  return (
    <StyledDiv>
      <div>
        <div className="img-warpper">
          <img src={img} alt={`${make} ${model}`} />

          <button type="button" onClick={toggleFavorite}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className={isFavorite ? 'heart favored' : 'heart'}
            >
              <path
                d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="title-wrapper">
          <h3>
            <span>{make}</span>, <span>{year}</span>
          </h3>
          <h3>{rentalPrice}</h3>
        </div>

        <p className="descr">
          {addressToShow} | {rentalCompany} {type} | {id} |{' '}
          {functionalities && functionalities.length > 0 ? functionalities[0].split(' ')[0] + ' ' + functionalities[0].split(' ')[1] : ''}
        </p>
      </div>
      <Link to={`/car-details/${id}`}>
        <Button type="submit">Learn more</Button>
      </Link>
    </StyledDiv>
  );
};

export default CarListItem;