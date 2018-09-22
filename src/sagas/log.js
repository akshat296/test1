// import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import EmpLogsActions from '../redux/log';

export function* fetchEmpLogs(api, { fiscalYear, limit, offset, code, startDate, endDate, exception, sortOrder }) {
  try {
    var sortOrderNum = sortOrder == 'ASC' ? 1 : -1;
    var new_code = code.toString();
    var new_exception = exception.toString();
    const logs = yield api({ fiscalYear, limit, offset, new_code, startDate, endDate, new_exception, sortOrderNum });
    yield put(EmpLogsActions.fetchEmpLogsSuccess(logs));
  } catch (e) {
    yield put({ type: 'FETCH_EMP_LOGS_ERROR' });
  }
}
