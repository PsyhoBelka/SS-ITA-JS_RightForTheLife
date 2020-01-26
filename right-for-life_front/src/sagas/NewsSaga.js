import { GET_NEWS, NEWS_RECEIVED } from "../constants";
import { put, takeLatest } from 'redux-saga/effects';

function* fetchNews() {
  const json = yield fetch('https://raw.githubusercontent.com/protonaby/demo3-animal-shelter/master/db/news.json')
    .then(response => response.json(),);
  yield put({type: NEWS_RECEIVED, json: json,});
}

export function* NewsActionWatcher() {
  yield takeLatest(GET_NEWS, fetchNews);
}
