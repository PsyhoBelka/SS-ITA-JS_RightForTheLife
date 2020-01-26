import {
  GET_ANIMALS_DATA,
  GET_EMERGENCY_DATA,
  GET_NEWS,
} from '../constants'

export function getAnimalsData() {
  return {
    type: GET_ANIMALS_DATA,
  }
}

export function getEmergencyData() {
  return {
    type: GET_EMERGENCY_DATA,
  }
}

export function getNews() {
  return {
    type: GET_NEWS,
  }
}