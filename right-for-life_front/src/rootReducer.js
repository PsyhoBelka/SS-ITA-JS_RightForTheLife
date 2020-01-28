import { combineReducers } from 'redux';
import { fetchDataReducer } from './hoc/withFetchDataIndicators';
import animalsData from "./reducers/AnimalsDataReducer.js";
import emergencyData from "./reducers/EmergencyDataReducer.js";

export const rootReducer = combineReducers({
  fetchDataReducer,
  animalsData,
  emergencyData,
});
