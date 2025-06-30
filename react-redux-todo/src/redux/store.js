import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

import reducer from './reducer';
import middleware from './middleware';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(middleware);