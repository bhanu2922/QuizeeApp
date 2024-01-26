import { combineReducers } from 'redux';
import authReducer from './authSlice';
import buttonReducer from './buttonSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  button : buttonReducer, 
});

export default rootReducer;
