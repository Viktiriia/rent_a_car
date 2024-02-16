import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestCarDetails } from 'redux/carDetailReducer';
import { toast } from 'react-toastify';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import DescriptionCar from 'components/DescriptionCar/DescriptionCar'; 

const CarDetailsPage = () => {
  const { carId } = useParams();
  const carDetails = useSelector(state => state.carDetails.carDetailsData);
  const isLoading = useSelector(state => state.carDetails.isLoading);
  const error = useSelector(state => state.carDetails.error);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!carId) return;

    dispatch(requestCarDetails(carId))
      .unwrap()
      .then(() => {
        toast.success('Hi! Car details was successfully fetched!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  }, [carId, dispatch]);

  return (
    <div>
      <Link to="/catalog">Go Back</Link>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {carDetails !== null && (
  <div>
    {carDetails.map(car => (
      <DescriptionCar key={car.id} car={car} />
    ))}
  </div>
)}
        
    </div>
  );
};

export default CarDetailsPage;




// <DescriptionCar
       
//        id={carDetails.id}
//        year={carDetails.year}
//        make={carDetails.make}
//        model={carDetails.model}
//        type={carDetails.type}
//        img={carDetails.img}
//        description={carDetails.description}
//        fuelConsumption={carDetails.fuelConsumption}
//        engineSize={carDetails.engineSize}
//        accessories={carDetails.accessories}
//        functionalities={carDetails.functionalities}
//        rentalPrice={carDetails.rentalPrice}
//        address={carDetails.address}
//        rentalConditions={carDetails.rentalConditions}
//        mileage={carDetails.mileage}
    
//     />