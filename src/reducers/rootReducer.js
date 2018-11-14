import { combineReducers } from 'redux';
import activities from './activitiesReducer';
import router from './routerReducer';
import weather from './weatherReducer';

const rootReducer = combineReducers({
  activities,
  router,
  weather
});

export default rootReducer;
