import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from '../sagas';
export default initialState => {
  const rootReducer = combineReducers({
    app: require('./app').reducer,
    login: require('./login').reducer,
    router: routerReducer
  });
  return configureStore(initialState, rootReducer, rootSaga);
};
