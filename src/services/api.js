import axios from 'axios';

const carsInstance = axios.create({
  baseURL: 'https://65cc87d8dd519126b83ecbb0.mockapi.io/',
});

export const fetchCars = async (params) => {
  const { data } = await carsInstance.get('/car', { params });
  
  return data;
};

export default fetchCars;

