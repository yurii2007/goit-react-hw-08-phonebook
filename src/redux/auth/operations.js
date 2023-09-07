import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// зберегти токен
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// видалити токен
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', user);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_,thunkAPI)=>{
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if(token === null) return thunkAPI.rejectWithValue('Shit happens');

  try {
    setAuthHeader(token);
    const res = await axios.get('/users/current');
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});
