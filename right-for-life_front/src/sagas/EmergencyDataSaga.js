import { EMERGENCY_DATA_RECEIVED, GET_EMERGENCY_DATA } from "../constants";
import { put, takeLatest } from 'redux-saga/effects';


function* fetchData() {
  const json = yield fetch('/api/emergency')
    .then(response => response.json(),);
  yield put({type: EMERGENCY_DATA_RECEIVED, json: json,});
}

export function* EmergencyActionWatcher() {
  yield takeLatest(GET_EMERGENCY_DATA, fetchData);
}