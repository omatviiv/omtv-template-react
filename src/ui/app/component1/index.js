import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {log} from 'helpers/general';

export class Component1 extends React.Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
  };

  state = {hi: 'ddd'};

  render() {
    const {visible} = this.props;

    return (
      <div onClick={this.click}>
        this is class Test
        <div>
          Is menu visible: <strong>{visible ? 'yes' : 'no'}</strong>
        </div>
      </div>
    );
  }
};

export default connect(
  state => ({
    visible: state.menu.visible,
  }),
)(Component1);
