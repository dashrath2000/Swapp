import {takeEvery, put, delay, call, all, fork} from 'redux-saga/effects';
import authSaga from './auth.saga';
// import wording from './wording.saga';
import Getallemail from './Email.saga';

export default function* root() {
  yield fork(Getallemail);
  yield fork(authSaga);
}
