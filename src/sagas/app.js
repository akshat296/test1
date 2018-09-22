import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import AppActions from '../redux/app';

export function* logoutRequest(api) {
  yield put(AppActions.logoutSuccess());
  yield put(push('/login'));
}

export function* startup(api) {}
