import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';
import SideNav from './components/sideNav';
import MainMenu from './components/mainMenu';
import Routes from './components/routes';
import { toggleSolutionView, toggleComponent } from '../../actions/toggleActions';
import '../../App.css';

const styles = {
	appBody: {
		width: '100vw',
		height: '100vh',
		backgroundColor: 'lightBlue',
	},
	mainContainer: {
		display: 'flex',
		flexFlow: 'row nowrap',
		height: 'calc(100vh - 48px)',
	},
	mainContent: {
		color: 'red',
	},
};

class App extends Component {
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
			current: 'mail',
			collapsed: true,
		};
		this.handleClick = this.handleClick.bind(this);
  }
	
  handleClick = (e) => {
		const trimmedKey = e.key.substr(e.key.indexOf('$') + 1, e.key.length);
		if (trimmedKey === 'side-nav-hamburger') {
			this.toggleCollapsed();
		} else if (trimmedKey[0] === '/') {
			this.setState({
				current: e.key,
			});
			this.props.push(trimmedKey);
		}	
	}

	toggleCollapsed = (e) => {
		if (e) e.stopPropagation();
    this.setState({
      collapsed: !this.state.collapsed,
		});
	}
	
  render() {
		const { collapsed } = this.state,
			{ componentToggleState, toggleSolutionView, toggleComponent } = this.props;

    return (
			<div style={styles.appBody}>
				<MainMenu
					handleClick={this.handleClick}
					collapsed={collapsed} />
				<div style={styles.mainContainer}>
					<SideNav
						componentToggleState={componentToggleState}
						toggleComponent={toggleComponent}
						toggleSolutionView={toggleSolutionView}
						collapsed={collapsed} />
					<Routes />
				</div>
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

export default withRouter(Radium(connect(
  mapStateToProps,
  mapDispatchToProps
)(App)));

