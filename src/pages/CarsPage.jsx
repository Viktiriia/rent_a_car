import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import CarList from 'components/CarList';
import React, { useEffect, useState } from 'react';
import { fetchCars } from 'services/api';
import SearchCarForm from 'components/SearchCarForm';


const CarsPage = () => {
  const [cars, setCars] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <SearchCarForm />
      <CarList cars={cars} />
    </div>
  );
};

export default CarsPage;   