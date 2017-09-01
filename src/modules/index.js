import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from '../reducers/counter.reducer';
import componentToggleState from '../reducers/componentToggleState.reducer';

export default combineReducers({
  routing: routerReducer,
  counter,
  componentToggleState,
});