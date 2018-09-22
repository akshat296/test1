import { createReducer, createActions } from 'reduxsauce';
import { REHYDRATE } from 'redux-persist';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['userData'],
  loginFailed: []
});

export const LoginTypes = Types;

export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  processing: false,
  redirectToReferrer: false,
  userData: {}
  //body:{}
};

/* ------------- Reducers ------------- */

const loginRequest = (state = INITIAL_STATE, { email, password }) => {
  return { ...state, processing: true };
};

const loginFailed = (state = INITIAL_STATE) => {
  return { ...state, password: '', processing: false };
};

const loginSuccess = (state = INITIAL_STATE, { userData }) => {
  return { ...state, userData, processing: false, redirectToReferrer: true };
};

const logoutSuccess = (state = INITIAL_STATE) => {
  return { ...state, redirectToReferrer: false };
};

const rehydrate = (state = INITIAL_STATE) => {
  return { ...state };
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.LOGIN_REQUEST]: loginRequest,
  [LoginTypes.LOGIN_SUCCESS]: loginSuccess,
  [LoginTypes.LOGIN_FAILED]: loginFailed,
  // TODO: Fix this
  ['LOGOUT_SUCCESS']: logoutSuccess, // eslint-disable-line no-useless-computed-key
  [REHYDRATE]: rehydrate
});
