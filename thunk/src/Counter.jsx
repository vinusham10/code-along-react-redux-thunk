import React, { useState } from 'react';
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch, useSelector, Provider } from 'react-redux';
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

export default function Counter() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <h4>{item.email}</h4>
          </div>
          <hr></hr>
        </div>
      ))}
      <button onClick={() => dispatch(fetchData())}>Fetch Data</button>
    </div>
  );
}