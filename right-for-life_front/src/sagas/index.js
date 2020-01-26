import { all } from 'redux-saga/effects';
import { AnimalsActionWatcher } from "./AnimalsDataSaga.js";
import { NewsActionWatcher } from "./NewsSaga.js";
import { EmergencyActionWatcher } from "./EmergencyDataSaga.js";

export default function* rootSaga() {
  yield all([
    AnimalsActionWatcher(),
    NewsActionWatcher(),
    EmergencyActionWatcher(),
  ]);
}
