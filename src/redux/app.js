import { createReducer, createActions } from 'reduxsauce';
import { LoginTypes } from './login';

import { Skins } from '../utils/constants';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  logoutRequest: [],
  logoutSuccess: [],
  logoutFailed: [],
  startUp: []
});

export const AppTypes = Types;

export default Creators;

// const getSkin = Skins => {
//   return Skins[window.__INITIAL_DATA__.setting.values['Tenant.Skin'].toUpperCase()];
// };
const getSkin = Skins => {
  return 'BLUE';
};

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  userData: {},
  processing: false,
  skin: Skins['BLUE'],
  dateFormat: 'DD-MM-YYYY',
  leaveType: [
    { name: 'Earned Leave' },
    { name: 'Restricted Holiday' },
    { name: 'Work From Home' },
    { name: 'Compensatory Off' },
    { name: 'Bereavement Leave' },
    { name: 'Maternity Leave' },
    { name: 'Paternity Leave' }
  ],
  totalCount: '12',
  matches: 'sa',
  offset: '0',
  limit: '10',
  sortBy: 'name',
  sortOrder: 'asc',
  department: ['Development'],
  fiscalYear: '2018-2019',
  workplaceId: 226,
  leaveStatusType: {
    rejected: { name: 'Rejected' },
    closed: { name: 'Approved' },
    open: { name: 'In Progress' }
  }
};

const loginSuccess = (state = INITIAL_STATE, { userData }) => {
  return { ...state, userData };
};

const logoutRequest = (state = INITIAL_STATE) => {
  return { ...state, processing: true };
};

const logoutSuccess = (state = INITIAL_STATE) => {
  localStorage.removeItem('accessToken');
  return { ...state, userData: null, processing: false };
};

const logoutFailed = (state = INITIAL_STATE) => {
  return { ...state, processing: false };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [AppTypes.LOGOUT_REQUEST]: logoutRequest,
  [AppTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [AppTypes.LOGOUT_FAILED]: logoutFailed,
  [LoginTypes.LOGIN_SUCCESS]: loginSuccess
});

/* ------------- Helper Methods ------------- */

export const getAppState = state => state.app;
