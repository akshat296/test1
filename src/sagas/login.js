import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

export function* login(api, { email, password }) {
  try {
    let body = yield api({ email, password });
    // localStorage.setItem('accessToken', body.accessToken);
    // localStorage.setItem('refreshToken', body.refreshToken);
    // let userData = parseJwt(body.accessToken);
    localStorage.setItem('accessToken', body.result.accessToken);
    localStorage.setItem('refreshToken', body.result.refreshToken);
    let userData = parseJwt(body.result.accessToken);
    yield put({ type: 'LOGIN_SUCCESS', userData });
    // yield put(LeftSideBarActions.leftSideBarRequest());
  } catch (e) {
    toast.error('Login Failed !', {
      position: toast.POSITION.TOP_CENTER
    });
    yield put({ type: 'LOGIN_ERROR' });
    // yield call('LOGIN_FAILED');
  }
}
function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}
