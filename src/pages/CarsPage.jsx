import React, { useState, useEffect } from 'react';
import CarList from 'components/CarList/CarList';
import SearchCarForm from 'components/SearchCarForm/SearchCarForm.jsx';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import { fetchCars } from 'services/api';
import { ButtonLoadMore} from '../App.styled';

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCars, setVisibleCars] = useState(12); // Початкова кількість видимих машин

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        setIsLoading(true);
        const carsData = await fetchCars();
        setCars(carsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllCars();
  }, []);

  const handleLoadMore = () => {
    // Збільшуємо кількість видимих машин на 12
    setVisibleCars(prevVisibleCars => prevVisibleCars + 12);
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <SearchCarForm />
      <CarList cars={cars.slice(0, visibleCars)} />
      {cars.length > visibleCars && (
        <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
      )}
    </div>
  );
};

export default CarsPage;