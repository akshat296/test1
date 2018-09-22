import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  leftSideBarRequest: [],
  leftSideBarSuccess: ['sideBarMenu'],
  leftSideBarFailed: []
});

export const LeftSideBarTypes = Types;

export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  sideBarMenu: {},
  processingSummary: false
};

/* ------------- Reducers ------------- */

const leftSideBarRequest = (state = INITIAL_STATE) => {
  return { ...state, processingSummary: true };
};
const leftSideBarSuccess = (state = INITIAL_STATE, { sideBarMenu }) => {
  return { ...state, sideBarMenu, processingSummary: false };
};
const leftSideBarFailed = (state = INITIAL_STATE) => {
  return { ...state };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [LeftSideBarTypes.LEFT_SIDE_BAR_REQUEST]: leftSideBarRequest,
  [LeftSideBarTypes.LEFT_SIDE_BAR_SUCCESS]: leftSideBarSuccess,
  [LeftSideBarTypes.LEFT_SIDE_BAR_FAILED]: leftSideBarFailed
});
