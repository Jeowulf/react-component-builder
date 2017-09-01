import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Radium from 'radium';

class SolutionEleven extends Component {
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
       solution Eleven
      </div>
    );
  }
}

export default Radium(SolutionEleven);