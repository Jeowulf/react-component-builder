import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import UserBuilt from './userComponents';
import Master from './masterComponents';

class Five extends Component {
  static propTypes = {
    useMaster: PropTypes.bool,
  };
  static classVars = {
  };
  constructor(props) {
    super(props);
    this.state = {
    };
    // Bind your non-life-cycle functions here to preserve the scope of 'this'
  }
	// React lifecycle functions followed by class methods here
  render() {
    const { useMaster } = this.props,
      mainComponent = useMaster ? <Master /> : <UserBuilt />;

    return (
      <div>
        {mainComponent}
      </div>
    );
  }
}

export default Radium(Five);