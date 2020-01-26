import { combineReducers } from "redux";
import animalsData from './AnimalsDataReducer'
import news from './NewsReducer'

export default combineReducers({
  animalsData,
  news,
})