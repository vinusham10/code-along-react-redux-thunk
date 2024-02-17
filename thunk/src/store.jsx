import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('counter/fetchData', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    users: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;