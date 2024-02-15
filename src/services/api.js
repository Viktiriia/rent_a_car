import axios from 'axios';

const carsInstance = axios.create({
  baseURL: 'https://65cc87d8dd519126b83ecbb0.mockapi.io/',
});


export const fetchCars = async () => {
  const { data } = await carsInstance.get('/car');
  return data;
};

export const findCarById = async carId => {
  const { data } = await carsInstance.get(`/car/?id=${carId}`);
  return data;
};

// Функція для фільтрації автомобілів за маркою
export const filterCarsByMake = async (make) => {
  const { data } = await carsInstance.get(`/car?make=${make}`);
  return data;
};

// Функція для фільтрації автомобілів за ціною за годину оренди
export const filterCarsByRentalPrice = async (price) => {
  const { data } = await carsInstance.get(`/car?rentalPrice=${price}`);
  return data;
};

// Функція для фільтрації автомобілів за пробігом
export const filterCarsByMileage = async (mileage) => {
  const { data } = await carsInstance.get(`/car?mileage=${mileage}`);
  return data;
};

