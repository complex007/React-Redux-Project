import {
  ADD_ACTIVITY, EDIT_ACTIVITY, DELETE_ACTIVITY, READ_ACTIVITIES, READ_ACTIVITY
} from '../actions/actionsTypes';

const activitiesMiddleware = () => (next) => (action) => {
  const activitiesString = localStorage.getItem('activities');
  let activities = null;
  let newId = 1;
  switch (action.type) {
    case ADD_ACTIVITY:
      if (activitiesString) {
        activities = JSON.parse(activitiesString);
        if (!Array.isArray(activities)) {
          activities = [];
        }
        newId = activities.length + 1;
      }
      action.activity.id = (new Date()).getTime();
      if (newId === 1) {
        localStorage.setItem('activities', JSON.stringify([action.activity]));
      } else {
        activities.push(action.activity);
        localStorage.setItem('activities', JSON.stringify(activities));
      }
      return next(action);
    case EDIT_ACTIVITY:
      if (activitiesString) {
        activities = JSON.parse(activitiesString);
      }
      if (activities) {
        const activityIndex = activities.findIndex((activity) => activity.id === action.id);
        if (activityIndex !== -1) {
          activities[activityIndex] = action.activity;
          localStorage.setItem('activities', JSON.stringify(activities));
        }
      }
      return next(action);
    case DELETE_ACTIVITY:
      if (activitiesString) {
        activities = JSON.parse(activitiesString);
      }
      if (activities) {
        const activityIndex = activities.findIndex((activity) => activity.id === action.id);
        if (activityIndex !== -1) {
          activities.splice(activityIndex,1);
          localStorage.setItem('activities', JSON.stringify(activities));
        }
      }
      return next(action);
    case READ_ACTIVITIES:
      if (activitiesString) {
        activities = JSON.parse(activitiesString);
      }
      if (!activities) {
        activities = [];
      }
      action.activities = activities;
      return next(action);
    case READ_ACTIVITY:
      if (activitiesString) {
        activities = JSON.parse(activitiesString);
      }
      action.activity = null;
      if (activities) {
        const index = activities.findIndex((activity) => activity.id === action.id);
        if (index !== -1) {
          action.activity = activities[index];
        }
      }
      return next(action);
    default:
      return next(action);
  }
};
export default activitiesMiddleware;
