import {
  SOLUTION_VIEW_TOGGLED,
  TOGGLE_COMPONENT,
} from './actionTypes';

function toggleSolutionView() {
  return dispatch => {
    dispatch({
      type: SOLUTION_VIEW_TOGGLED
    });
  };
};

function toggleComponent(component) {
  return dispatch => {
    dispatch({
      type: TOGGLE_COMPONENT,
      component,
    });
  };
};

export {
  toggleSolutionView,
  toggleComponent,
}