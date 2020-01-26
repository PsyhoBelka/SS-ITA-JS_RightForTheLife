import { combineReducers } from "redux";
import animalsData from './AnimalsDataReducer'
import news from './NewsReducer'
import emergencyData from './EmergencyDataReducer.js'


export default combineReducers({
  animalsData,
  news,
  emergencyData,
})