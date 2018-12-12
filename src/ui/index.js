import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './app';
import reducer from './redux';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
