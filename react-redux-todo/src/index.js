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

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
