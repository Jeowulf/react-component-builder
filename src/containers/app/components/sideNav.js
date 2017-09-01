import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Button, Switch } from 'antd';
import Radium from 'radium';
const { SubMenu, Item, Divider } = Menu;

const styles = {
	mainContainer: {
		height: '100%',
	},
	menu: {
		height: '100%',
	},
};

class SideNav extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    componentToggleState: PropTypes.object,
    toggleSolutionView: PropTypes.func,
    toggleComponent: PropTypes.func,
  };
  static classVars = {
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  toggleClickHandler = (e) => {
    const { toggleSolutionView, toggleComponent } = this.props,
      key = e.key.substr(e.key.indexOf('$') + 1, e.key.length);
    if (key === 'masterSwitch') toggleSolutionView(); else toggleComponent(key);
  }

  render() {
    const { collapsed, toggleSolutionView, componentToggleState } = this.props,
      { 
        solutionViewEnabled,
      } = componentToggleState,
      navStyle = { width: '240px' },
      components = Object.keys(componentToggleState);

    if (collapsed) delete navStyle.width; navStyle.maxWidth = '240px';
    components.shift();
    
    console.log(this.state.activeKey);
    const componentToggleSwitches = components.map((c, idx) =>
      <Item key={`${c}`}>
        <Switch
          value={c}
          size={collapsed ? 'small' : 'large'}
          checked={!componentToggleState[c]}
          unCheckedChildren={collapsed ? '' : (<Icon type="solution" />)}
          checkedChildren={collapsed ? '' : (<Icon type="user" />)} />
        <span style={{ marginLeft: '15px' }}>Toggle {c}</span>
      </Item>
    );

    return (
      <div style={{ ...styles.mainContainer, ...navStyle }}>
        <Menu
          selectable={false}
					style={styles.menu}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onClick={this.toggleClickHandler}
        >
          <Item key="masterSwitch">
            <Switch
              size={collapsed ? 'small' : 'large'}
              checked={!solutionViewEnabled}
              unCheckedChildren={collapsed ? '' : (<Icon type="solution" />)}
              checkedChildren={collapsed ? '' : (<Icon type="user" />)} />
            <span style={{ marginLeft: '15px' }}>Toggle Master</span>
          </Item>
          <Divider />
          {componentToggleSwitches}
        </Menu>
      </div>
    );
  }
}

export default Radium(SideNav);
