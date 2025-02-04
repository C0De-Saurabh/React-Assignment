const { createSlice } = require("@reduxjs/toolkit");


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
    },
  });
  

  
const { updateUserData } = userDataSlice.actions;
const store = configureStore({ reducer: { userData: userDataSlice.reducer } });

export default store;
export { updateUserData };