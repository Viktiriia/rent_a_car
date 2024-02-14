import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carDetailsReducer } from './carDetailReducer';
import { carsReducer } from './carsReducer';

export const rootReducer = combineReducers({
  carDetails: carDetailsReducer,
  carData: carsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});