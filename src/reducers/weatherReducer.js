import initialState from '../store/initialState';
import {
  SET_MONTH, SET_DAY, SET_WEATHER_TEXT
} from '../actions/actionsTypes';

const weatherReducer = (state = initialState.weather, action) => {
    switch (action.type) {
      case SET_MONTH:
        return Object.assign({}, state, { 
            selectedMonth: action.month 
        });
      case SET_DAY:
        return  Object.assign({}, state, { 
            selectedDay: action.day 
        });
      case SET_WEATHER_TEXT:
        return Object.assign({}, state, { 
          weatherText: action.weatherText,
          weatherEvery3hour: action.weatherEvery3hour
      });
      default:
        return state;
    }
  };
  export default weatherReducer;
