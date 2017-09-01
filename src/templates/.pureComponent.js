import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Radium from 'radium';
// this component is almost identical to the Component template
// the difference is that behind the scenes it will always do a shallow compare on
// state and props to determine whether or not to update
class PureComponentName extends PureComponent {
  static propTypes = {
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
    return (
      <div>
       JSX goes here
      </div>
    );
  }
}

export default Radium(PureComponentName);