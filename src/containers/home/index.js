import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../actions/counterActions';
import Radium from 'radium';

class Home extends Component {
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

  render() {
    const props = this.props;

    const oldHomeStuff = (
      <div>
        <h1>Home</h1>
        <p>Count: {props.count}</p>

        <p>
          <Button onClick={props.increment} disabled={props.isIncrementing}>Increment</Button>
          <Button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</Button>
        </p>

        <p>
          <Button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</Button>
          <Button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</Button>
        </p>

        <p><Button onClick={() => props.changePage()}>Go to about page via redux</Button></p>
      </div>
    );

    const newHomeStuff = (
      <div>Home Screen no designs yet</div>
    );

    const homeStuff = newHomeStuff;

    return (
      <div>{homeStuff}</div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us'),
}, dispatch);

export default Radium(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));