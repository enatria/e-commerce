import { createSlice } from '@reduxjs/toolkit';
import { authenticate } from '../config/authService';
import { setTokens } from '../config/tokenCreator';

const initialState = {
    isProcessingRequest: false,
    accessToken : "",
}


const authenticationSlice = createSlice({
    name:"authentication",
    initialState,
    reducers: {
        start: (state) => {
            return {
              ...state,
              isProcessingRequest: true,
            };
          },
          success: (state, action) => {
            return {
              ...state,
              isProcessingRequest: false,
            };
          },
          error: (state, action) => {
            return {
              ...state,
              isProcessingRequest: false,
            };
          },
        }
})

export const authenticateUser = (userData) => async (dispatch) => {

    try {
      const authData = await authenticate(
       userData
      );
      if (userData.status === true) {
        setTokens(authData.data);
        dispatch(success(authData));
      } else {
        dispatch(error());
      }
    } catch (err) {
      dispatch(error(err));
    }
  };


  export const { start, success, error } = authenticationSlice.actions;
  export const selectAuthentication = (state) => state.authentication;
  export const authenticationReducer = authenticationSlice.reducer;