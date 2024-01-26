import axios from "axios";
import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_FAIL,
  
} from "./types";

// Example API endpoints, replace with your actual endpoints
const API_URL = "http://your-api-url";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: response.data.user,
        token: response.data.token,
      },
    });
  } catch (error) {
    console.error("Login failed:", error);
    dispatch({
      type: LOGIN_FAIL,
      payload: {
        error: "Login failed. Please check your information and try again.",
      },
    });
  }
};

export const signup = (username, email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      username,
      email,
      password,
    });
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: {
        user: response.data.user,
        token: response.data.token,
      },
    });
  } catch (error) {
    console.error("Signup failed:", error);
    dispatch({
      type: SIGNUP_FAIL,
      payload: {
        error: "Signup failed. Please check your information and try again.",
      },
    });
  }
};
