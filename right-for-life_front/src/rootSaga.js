import { all } from 'redux-saga/effects';
import { fetchDataWatcher } from './hoc/withFetchDataIndicators';
import { AnimalsActionWatcher } from "./sagas/AnimalsDataSaga.js";
import { EmergencyActionWatcher } from "./sagas/EmergencyDataSaga.js";

export function* rootSaga() {
  yield all([
    fetchDataWatcher(),
    AnimalsActionWatcher(),
    EmergencyActionWatcher(),
  ]);
}
