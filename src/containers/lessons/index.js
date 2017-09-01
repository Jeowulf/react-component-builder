import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';
import { toggleSolutionView, toggleComponent } from '../../actions/toggleActions';
import One from './containers/one';
import Two from './containers/two';
import Three from './containers/three';
import Four from './containers/four';
import Five from './containers/five';
import Six from './containers/six';
import Seven from './containers/seven';
import Eight from './containers/eight';
import Nine from './containers/nine';
import Ten from './containers/ten';
import Eleven from './containers/eleven';
import Twelve from './containers/twelve';

class Lessons extends Component {
  static propTypes = {
    toggleSolutionView: PropTypes.func,
    componentToggleState: PropTypes.object,
		toggleComponent: PropTypes.func,
		push: PropTypes.func,
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
    const { componentToggleState } = this.props,
      { 
        componentOne,
        componentTwo,
        componentThree,
        componentFour,
        componentFive,
        componentSix,
        componentSeven,
        componentEight,
        componentNine,
        componentTen,
        componentEleven,
        componentTwelve,
      } = componentToggleState;
    return (
      <div>
       <One
        useMaster={componentOne} />
       <Two
        useMaster={componentTwo} />
       <Three
        useMaster={componentThree} />
       <Four
        useMaster={componentFour} />
       <Five
        useMaster={componentFive} />
       <Six
        useMaster={componentSix} />
       <Seven
        useMaster={componentSeven} />
       <Eight
        useMaster={componentEight} />
       <Nine
        useMaster={componentNine} />
       <Ten
        useMaster={componentTen} />
       <Eleven
        useMaster={componentEleven} />
       <Twelve
        useMaster={componentTwelve} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  componentToggleState: state.componentToggleState,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleSolutionView,
	toggleComponent,
	push,
}, dispatch);

export default Radium(connect(
  mapStateToProps,
  mapDispatchToProps
)(Lessons));