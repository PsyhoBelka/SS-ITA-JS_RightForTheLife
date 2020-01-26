import { ANIMALS_DATA_RECEIVED, GET_ANIMALS_DATA } from "../constants";
import { put, takeLatest } from 'redux-saga/effects';


function* fetchAnimalsData() {
  const json = yield fetch('https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/animals.json')
    .then(response => response.json(),);
  yield put({type: ANIMALS_DATA_RECEIVED, json: json,});
}

export function* AnimalsActionWatcher() {
  yield takeLatest(GET_ANIMALS_DATA, fetchAnimalsData);
}