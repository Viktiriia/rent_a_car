import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { filterCarsByMake, filterCarsByRentalPrice, filterCarsByMileage } from 'services/api';

// Створюємо асинхронний thunk для запиту відфільтрованих автомобілів
export const requestFilteredCars = createAsyncThunk(
  'cars/filter',
  async (filters, thunkAPI) => {
    try {
      const { make, price, mileage } = filters; // Отримуємо параметри фільтрів: марку, ціну і пробіг
      let filteredCars = []; // Ініціалізуємо змінну для збереження відфільтрованих автомобілів

      // Фільтрація за маркою
      if (make) {
        const carsFilteredByMake = await filterCarsByMake(make); // Викликаємо функцію фільтрації за маркою
        filteredCars = carsFilteredByMake; // Зберігаємо відфільтровані автомобілі
      }

      // Фільтрація за ціною оренди
      if (price) {
        const carsFilteredByPrice = await filterCarsByRentalPrice(price); // Викликаємо функцію фільтрації за ціною оренди
        // Якщо вже є відфільтровані автомобілі, то фільтруємо за ціною серед вже відфільтрованих, інакше фільтруємо всі автомобілі
        filteredCars = filteredCars.length ? filteredCars.filter(car => carsFilteredByPrice.includes(car)) : carsFilteredByPrice;
      }

      // Фільтрація за пробігом
      if (mileage) {
        const carsFilteredByMileage = await filterCarsByMileage(mileage); // Викликаємо функцію фільтрації за пробігом
        // Якщо вже є відфільтровані автомобілі, то фільтруємо за пробігом серед вже відфільтрованих, інакше фільтруємо всі автомобілі
        filteredCars = filteredCars.length ? filteredCars.filter(car => carsFilteredByMileage.includes(car)) : carsFilteredByMileage;
      }

      return filteredCars; // Повертаємо список відфільтрованих автомобілів
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Якщо виникає помилка, відхиляємо thunk з помилкою
    }
  }
);

// Початковий стан редуктора
const INITIAL_STATE = {
  filteredCars: [], // Список відфільтрованих автомобілів
  isLoading: false, // Прапорець, що показує, чи йде завантаження
  error: null, // Помилка, якщо щось пішло не так при завантаженні
};

// Створюємо slice для редуктора автомобілів
const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      // Обробляємо статус "pending" для запиту відфільтрованих автомобілів
      .addCase(requestFilteredCars.pending, (state) => {
        state.isLoading = true; // Позначаємо, що завантаження триває
        state.error = null; // Очищаємо попередню помилку, якщо вона була
      })
      // Обробляємо статус "fulfilled" для запиту відфільтрованих автомобілів
      .addCase(requestFilteredCars.fulfilled, (state, action) => {
        state.isLoading = false; // Позначаємо, що завантаження завершено
        state.filteredCars = action.payload; // Зберігаємо список відфільтрованих автомобілів
      })
      // Обробляємо статус "rejected" для запиту відфільтрованих автомобілів
      .addCase(requestFilteredCars.rejected, (state, action) => {
        state.isLoading = false; // Позначаємо, що завантаження завершено
        state.error = action.payload; // Зберігаємо помилку
      });
  },
});

// Експортуємо редуктор slice
export const carsReducer  = carsSlice.reducer;