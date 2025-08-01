import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import { store } from "./redux/store";
import ConnectedApp from "./app";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>
);
