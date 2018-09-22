import { put } from 'redux-saga/effects';

import LegalActions from '../redux/legalEntities';

export function* fetchLegalList(api) {
  try {
    const legalEntities = yield api();
    yield put(LegalActions.legalRequestSuccess(legalEntities));
  } catch (e) {
    yield put({ type: 'LEGAL_REQUEST_FAILED' });
  }
}

export function* addLegalEntity(api, params) {
  try {
    var num = Number(params.orgId);
    const legalEntities = yield api(num, params.name);
    yield put(LegalActions.addEntitySuccess(legalEntities));
  } catch (e) {
    yield put({ type: 'ADD_ENTITY_FAILED' });
  }
}

export function* deleteLegalEntity(api, { legalEntityId }) {
  try {
    const legalEntityDelete = yield api(legalEntityId);
    yield put(LegalActions.deleteEntitySuccess(legalEntityDelete));
  } catch (e) {
    yield put({ type: 'DELETE_ENTITY_FAILED' });
  }
}
