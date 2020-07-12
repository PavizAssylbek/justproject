import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import tasks from "./reducers"
import { Provider } from "react-redux"
import { devToolsEnhancer } from 'redux-devtools-extension';


const store = createStore(tasks, devToolsEnhancer())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

