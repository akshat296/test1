import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchEmpLogs: ['fiscalYear', 'limit', 'offset', 'code', 'startDate', 'endDate', 'sortOrder', 'exception'],
  fetchEmpLogsSuccess: ['logs'],
  fetchEmpLogsError: []
});

export const EmpLogsTypes = Types;

export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  logs: []
};

/* ------------- Reducers ------------- */

const fetchEmpLogs = (
  state = INITIAL_STATE,
  { fiscalYear, limit, offset, code, startDate, endDate, sortOrder, exception }
) => {
  return { ...state };
};
const fetchEmpLogsSuccess = (state = INITIAL_STATE, { logs }) => {
  var res = logs.result ? logs.result : [];
  return { ...state, logs: res };
};
const fetchEmpLogsError = (state = INITIAL_STATE) => {
  return { ...state };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [EmpLogsTypes.FETCH_EMP_LOGS]: fetchEmpLogs,
  [EmpLogsTypes.FETCH_EMP_LOGS_SUCCESS]: fetchEmpLogsSuccess,
  [EmpLogsTypes.FETCH_EMP_LOGS_ERROR]: fetchEmpLogsError
});
