import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';

class ContainerName extends Component {
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

const mapStateToProps = state => ({
  someName: state.someProp,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  someFunc,
  someOtherFunc,
}, dispatch);

export default Radium(connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerName));