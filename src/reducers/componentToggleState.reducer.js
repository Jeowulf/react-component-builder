import {
  SOLUTION_VIEW_TOGGLED,
  TOGGLE_COMPONENT,
} from '../actions/toggleActions/actionTypes';

const initialState = {
  solutionViewEnabled: true,
  componentOne: true,
  componentTwo: true,
  componentThree: true,
  componentFour: true,
  componentFive: true,
  componentSix: true,
  componentSeven: true,
  componentEight: true,
  componentNine: true,
  componentTen: true,
  componentEleven: true,
  componentTwelve: true,
};

const componentToggleState = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case SOLUTION_VIEW_TOGGLED:
      const toggleKeys = Object.keys(state),
        newState = { ...state };
      toggleKeys.forEach(key => newState[key] = !state.solutionViewEnabled);
      return newState;

    case TOGGLE_COMPONENT:
      return {
        ...state,
        [action.component]: !state[action.component],
      }
		default:
      return state;
  }
}

export default componentToggleState;