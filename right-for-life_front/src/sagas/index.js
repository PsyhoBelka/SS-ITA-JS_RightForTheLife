import { all } from 'redux-saga/effects';
import { AnimalsActionWatcher } from "./AnimalsDataSaga.js";
import { NewsActionWatcher } from "./NewsSaga.js";

export default function* rootSaga() {
  yield all([
    AnimalsActionWatcher(),
    NewsActionWatcher(),
  ]);
}
