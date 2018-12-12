import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Component1 from './component1';

export const App = ({toggleMenuVisibility}) => (
  <div>
    An empty react app<br/>
    webpack + babel
    <Component1 />
    <button onClick={toggleMenuVisibility}>Show/Hide menu</button>
  </div>
);
App.propTypes = {
  toggleMenuVisibility: PropTypes.func.isRequired,
};

export default connect(
  state => ({
  }),
  dispatch => ({
    toggleMenuVisibility: () => dispatch({type: 'TOGGLE_MENU_VISIBILITY'}),
  }),
)(App);
