import { createSlice, configureStore } from '@reduxjs/toolkit';

// Redux Slice for User Data
const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    id: Date.now(),
    name: '',
    address: '',
    email: '',
    phone: '',
  },
  reducers: {
    updateUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    initializeUserData: (state) => {
      state.id = Date.now();
    },
  },
});

// Extract the actions and reducer
export const { updateUserData, initializeUserData } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;

// Configure the Redux store
export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
