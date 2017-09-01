import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Radium from 'radium';
const { SubMenu, Item } = Menu;

const styles = {
	mainContainer: {
		height: '100%',
	},
	menu: {
		height: '100%',
	},
};

class MainMenu extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    handleClick: PropTypes.func,
  };
  static classVars = {
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    const { collapsed, handleClick } = this.props;
    return (
      <Menu
        onClick={(e) => handleClick(e)}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <Item key="side-nav-hamburger">
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Item>
        <Item key="/">
          <span><Icon type="home" />Home</span>
        </Item>
        <Item key="/about-us">
          <span><Icon type="info" />About</span>
        </Item>		
        <Item key="/lessons">
          <Icon type="layout" />Lessons
        </Item>
        <Item key="ant-design">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer"><Icon type="code-o" />ANT DESIGN</a>
        </Item>
        <SubMenu title={<span><Icon type="global" />Extrenal Libraries Docs</span>}>
          <Item key="numeral">
            <a href="http://numeraljs.com" target="_blank" rel="noopener noreferrer">
              Numeral.js
            </a>
          </Item>
          <Item key="immutable">
            <a href="https://facebook.github.io/immutable-js/" target="_blank" rel="noopener noreferrer">
              Immutable.js
            </a>
          </Item>
          <Item key="moment">
            <a href="https://momentjs.com/" target="_blank" rel="noopener noreferrer">
              Moment.js
            </a>
          </Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Radium(MainMenu);




