// import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import LeftSideBarActions from '../redux/leftSideBar';

export function* leftSideBarRequest(api) {
  try {
    const sideBarMenu = yield api();
    yield put(LeftSideBarActions.leftSideBarSuccess(sideBarMenu));
  } catch (e) {
    yield put({ type: 'LEFT_SIDE_BAR_FAILED' });
  }
}
