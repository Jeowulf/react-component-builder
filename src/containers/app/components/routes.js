import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Radium from 'radium';
import Home from '../../home';
import About from '../../about';
import Lessons from '../../lessons';
import One from '../../lessons/containers/one';

const styles = {
	mainContent: {
		color: 'red',
	},
};

class Routes extends Component {
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
      <main style={styles.mainContent}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/lessons" component={Lessons} />
      </main>
    );
  }
}

export default Radium(Routes);