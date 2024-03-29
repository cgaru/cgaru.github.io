import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import { Store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} timeout={3000} offset='10px'>
      <Provider store={Store}>
        <App />
      </Provider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
