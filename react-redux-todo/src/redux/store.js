import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

import reducer from "./reducer";
import middleware from "./middleware";

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(middleware);
