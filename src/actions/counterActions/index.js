import {
	INCREMENT,
	INCREMENT_REQUESTED,
	DECREMENT,
	DECREMENT_REQUESTED,
} from './actionTypes';

function increment() {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    dispatch({
      type: INCREMENT
    });
  };
};

function incrementAsync() {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 3000);
  };
};

function decrement() {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    dispatch({
      type: DECREMENT
    });
  };
};

function decrementAsync() {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  };
};

export {
	decrement,
	decrementAsync,
	increment,
	incrementAsync,
}