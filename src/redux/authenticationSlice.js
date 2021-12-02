import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoading: false,
  error:"",
}


const authenticationSlice = createSlice({
    name:"authentication",
    initialState,
    reducers: {
          pending: (state) => {
              state.isLoading = true;
          },
          success: (state, action) => {
            state.user = action.payload;
            state.isLoading = true;
            state.error = "";
          },
          error: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          },
        }
})



  export const { pending, success, error } = authenticationSlice.actions;
  export const authenticationReducer = authenticationSlice.reducer;