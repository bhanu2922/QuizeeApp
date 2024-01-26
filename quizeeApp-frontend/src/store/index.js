import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import authReducer from "./slices/authSlice";
import quizReducer from "./slices/quizSlice";

const store = configureStore({
  reducer: {
    authReducer,
    quizReducer,
  },
});

export default store;
