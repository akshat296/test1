import { takeLatest, all } from 'redux-saga/effects';
import { EmpLogsTypes } from '../redux/log';
import {
  // loginService,
  getLeftSideBarMenu,
  legalEntities,
  EmpLogs
} from '../services';
import { loginService } from '../services/abpServices';

// Types
import { AppTypes } from '../redux/app';
import { LoginTypes } from '../redux/login';

import { logoutRequest, startup } from './app';

// Sagas
import { login } from './login';

import { fetchEmpLogs } from './log';

import { leftSideBarRequest } from './leftSideBar';

export default function* root() {
  yield all([
    // App
    takeLatest(AppTypes.LOGOUT_REQUEST, logoutRequest, null),
    takeLatest(AppTypes.START_UP, startup, null),

    // Login
    // takeLatest(LoginTypes.LOGIN_REQUEST, login, loginService),

    // ABP Login
    takeLatest(LoginTypes.LOGIN_REQUEST, login, loginService)

    //Logs Api
    //takeLatest(EmpLogsTypes.FETCH_EMP_LOGS, fetchEmpLogs, EmpLogs),

    //get sidebar menu
    //takeLatest(LeftSideBarTypes.LEFT_SIDE_BAR_REQUEST, leftSideBarRequest, getLeftSideBarMenu),
  ]);
}
