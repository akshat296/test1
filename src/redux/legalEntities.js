import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  legalRequest: [],
  legalRequestSuccess: ['legalEntities'],
  legalRequestFailed: [],

  addEntityRequest: ['orgId', 'name'],
  addEntitySuccess: ['addedEntity'],
  addEntityFailed: [],

  deleteEntityRequest: ['legalEntityId'],
  deleteEntitySuccess: [],
  deleteEntityFailed: []
});

export const LegalTypes = Types;

export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  legalEntities: [],
  addedEntity: {}
};

/* ------------- Reducers ------------- */

const legalRequest = (state = INITIAL_STATE) => {
  return { ...state };
};

const legalRequestSuccess = (state = INITIAL_STATE, { legalEntities }) => {
  return { ...state, legalEntities };
};

const legalRequestFailed = (state = INITIAL_STATE) => {
  return { ...state };
};

const addEntityRequest = (state = INITIAL_STATE, { orgId, name }) => {
  return { ...state };
};

const addEntitySuccess = (state = INITIAL_STATE, { addedEntity }) => {
  return { ...state, addedEntity };
};

const addEntityFailed = (state = INITIAL_STATE) => {
  return { ...state };
};

const deleteEntityRequest = (state = INITIAL_STATE, { legalEntityId }) => {
  return { ...state };
};

const deleteEntitySuccess = (state = INITIAL_STATE) => {
  return { ...state };
};

const deleteEntityFailed = (state = INITIAL_STATE) => {
  return { ...state };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [LegalTypes.LEGAL_REQUEST]: legalRequest,
  [LegalTypes.LEGAL_REQUEST_SUCCESS]: legalRequestSuccess,
  [LegalTypes.LEGAL_REQUEST_FAILED]: legalRequestFailed,

  [LegalTypes.ADD_ENTITY_REQUEST]: addEntityRequest,
  [LegalTypes.ADD_ENTITY_SUCCESS]: addEntitySuccess,
  [LegalTypes.ADD_ENTITY_FAILED]: addEntityFailed,

  [LegalTypes.DELETE_ENTITY_REQUEST]: deleteEntityRequest,
  [LegalTypes.DELETE_ENTITY_SUCCESS]: deleteEntitySuccess,
  [LegalTypes.DELETE_ENTITY_FAILED]: deleteEntityFailed
});
