import initialState from '../store/initialState';
import {REPLACE} from '../actions/actionsTypes';

const routerReducer = (state = initialState.router, action) => {
  switch (action.type) {
    case REPLACE:
      state.pathname = action.payload
      return state;
    default:
      return state;
  }
};

export default routerReducer;
