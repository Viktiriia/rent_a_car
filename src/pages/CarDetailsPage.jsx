import React, { useEffect, useRef } from 'react';
import {
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import CarListItem from 'components/CarListItem';
import { requestCarDetails } from 'redux/carDetailReducer';
import { toast } from 'react-toastify';


const CarDetailsPage = () => {
  const { carId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const carDetails = useSelector(state => state.carDetails.carDetailsData);
  const isLoading = useSelector(state => state.carDetails.isLoading);
  const error = useSelector(state => state.carDetails.error);
  const dispatch = useDispatch();

  useEffect(() => {
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
      <Link to={backLinkHref.current}>Go Back</Link>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {carDetails !== null && (
        <div>
        <CarListItem />
        </div>
      )}

    </div>
  );
};

export default CarDetailsPage;