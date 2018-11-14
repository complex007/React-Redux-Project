import {
  ADD_ACTIVITY, EDIT_ACTIVITY, DELETE_ACTIVITY, READ_ACTIVITIES, READ_ACTIVITY
} from './actionsTypes';

export const addActivity = (activity) => ({
  type: ADD_ACTIVITY, activity
});
export const editActivity = (id, activity) => ({
  type: EDIT_ACTIVITY, id, activity
});
export const deleteActivity = (id) => ({
  type: DELETE_ACTIVITY, id
});
export const readActivities = (activities) => ({
  type: READ_ACTIVITIES, activities
});
export const readActivity = (id, activity) => ({
  type: READ_ACTIVITY, id , activity
});
