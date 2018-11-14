import initialState from '../store/initialState';
import {
  ADD_ACTIVITY, EDIT_ACTIVITY, DELETE_ACTIVITY, READ_ACTIVITIES, READ_ACTIVITY
} from '../actions/actionsTypes';

const activitiesReducer = (state = initialState.activities, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return state.concat([action.activity]);
    case EDIT_ACTIVITY:
      const activityIndex = state.findIndex((activity) => activity.id === action.id);
      state[activityIndex] = action.activity;
      return state;
    case DELETE_ACTIVITY:
      return state.filter((activity) => activity.id !== action.id);
    case READ_ACTIVITIES:
      state = action.activities;
      return state;
    case READ_ACTIVITY:
      state = [action.activity];
      return state;
    default:
      return state;
  }
};
export default activitiesReducer;
