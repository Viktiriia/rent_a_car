import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findCarById} from 'services/api';

export const requestCarDetails = createAsyncThunk(
  'carDetails/get',
  async (carId, thunkAPI) => {
    try {
      const carData = await findCarById(carId);

      return carData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  carDetailsData: null,
  isLoading: false,
  error: null,
};

const carDetailsSlice = createSlice({
  // Ім'я слайсу
  name: 'carDetails',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder.addCase(requestCarDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(requestCarDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carDetailsData = action.payload;
    })
    .addCase(requestCarDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
});

export const carDetailsReducer = carDetailsSlice.reducer;        