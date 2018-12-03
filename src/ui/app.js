import React from 'react';
import PropTypes from 'prop-types';
import log from 'helpers/general';

export class Test extends React.Component {
  state = {hi: 'ddd'};

  click = e => log(e.target);

  render() {
    return (<div onClick={this.click}>this is class Test</div>);
  }
}

export const App = () => (
  <div>
    An empty react app<br/>
    webpack + babel
    <Test />
  </div>
);
