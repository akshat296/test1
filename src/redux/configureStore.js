import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const persistConfig = {
  key: 'tsweb',
  storage,
  whitelist: ['app']
};

export default (initialState, rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Logger Middleware ------------- */
  middleware.push(logger);

  /* ------------- History Middleware ------------- */
  const history = createHistory();
  const routeMiddleware = routerMiddleware(history);
  middleware.push(routeMiddleware);

  /* ------------- Assemble Middlewares ------------- */
  enhancers.push(applyMiddleware(...middleware));

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, initialState, compose(...enhancers));

  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor, history };
};
