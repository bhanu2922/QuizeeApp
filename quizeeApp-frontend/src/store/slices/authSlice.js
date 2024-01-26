
import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../actions/api"; // Import API functions

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state , action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const LoginUser = (email, password) => async (dispatch) => {
  try {
    const user = await login(email, password);
    dispatch(setUser(user));
  } catch (error) {
    console.error("Login failed:", error);
    // Handle login failure (dispatch an action, show a toast, etc.)
  }
};

export const SignupUser = ( username , email, password) => async (dispatch) => {
  try {
    const user = await signup(username , email, password);
    dispatch(setUser(user));
  } catch (error) {
    console.error("Signup failed:", error);
    // Handle signup failure (dispatch an action, show a toast, etc.)
  }
};


// // import {
// //   LOGIN_SUCCESS,
// //   SIGNUP_SUCCESS,
// //   SIGNUP_FAIL,
// //   LOGIN_FAIL,
// //   LOGOUT_SUCCESS,
// // } from "../actions/types";

// const initialState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//     case SIGNUP_SUCCESS:
//       return {
//         ...state,
//         user: action.payload.user,
//         token: action.payload.token,
//         isAuthenticated: true,
//       };
//     case LOGIN_FAIL:
//     case SIGNUP_FAIL:
//       return {
//         ...state,
//         isAuthenticated: false,
//         error: action.payload.error,
//       };
//     case LOGOUT_SUCCESS:
//       return {
//         user: null,
//         isAuthenticated: false,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;

// authSlice.js