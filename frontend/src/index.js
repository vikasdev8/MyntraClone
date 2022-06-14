import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import {positions, transitions, Provider as Alertprovider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const option = {
  timeout: 3000,
  position: positions.TOP_CENTER,
  transition: transitions.FADE,
 
}

ReactDOM.render(
  <Provider store={store}>
    <Alertprovider template={AlertTemplate} {...option}>
    <React.StrictMode >
      <App />
    </React.StrictMode>
    </Alertprovider>
  </Provider>,
  document.getElementById('root')
);
