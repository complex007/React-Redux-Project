import * as actions from '../actionsTypes';
import {replace} from '../routerActions';
import {
  addActivity, readActivities, readActivity, editActivity, deleteActivity
} from '../activitiesActions';
import {
  setMonth, setDay, setWeatherText, findWeather
} from '../weatherActions';

describe('Activities Actions', () => {
  describe('addActivity', () => {
    it('should return the correct type', () => {
      let activity = {id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()};
      const expectedResult = {
        type: actions.ADD_ACTIVITY,
        activity
      };
      expect(addActivity(activity)).toEqual(expectedResult);
    });
  });
  describe('editActivity', () => {
    it('should return the correct type', () => {
      let activity = {id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()};
      const expectedResult = {
        type: actions.EDIT_ACTIVITY,
        id: activity.id,
        activity
      };
      expect(editActivity(activity.id,activity)).toEqual(expectedResult);
    });
  });
  describe('deleteActivity', () => {
    it('should return the correct type', () => {
      let activity = {id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()};
      const expectedResult = {
        type: actions.DELETE_ACTIVITY,
        id: activity.id
      };
      expect(deleteActivity(activity.id)).toEqual(expectedResult);
    });
  });
  describe('readActivity', () => {
    it('should return the correct type', () => {
      let activity = {id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()};
      const expectedResult = {
        type: actions.READ_ACTIVITY,
        id: activity.id
      };
      expect(readActivity(activity.id)).toEqual(expectedResult);
    });
  });
  describe('readActivities', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actions.READ_ACTIVITIES
      };
      expect(readActivities()).toEqual(expectedResult);
    });
  });
});
describe('Router Actions', () => {
  describe('replace', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actions.REPLACE,
        payload: "/test"
      };
      expect(replace("/test")).toEqual(expectedResult);
    });
  });
});
describe('Weather Actions', () => {
  describe('setMonth', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actions.SET_MONTH,
        month: 3
      };
      expect(setMonth(3)).toEqual(expectedResult);
    });
  });
  describe('setDay', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actions.SET_DAY,
        day: 3
      };
      expect(setDay(3)).toEqual(expectedResult);
    });
  });
  describe('setWeatherText', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actions.SET_WEATHER_TEXT,
        weatherText:"TEST",
        weatherEvery3hour:"TEST",
      };
      expect(setWeatherText("TEST","TEST")).toEqual(expectedResult);
    });
  });
  describe('findWeather', () => {
    it('should return the correct type', () => {
      const today = new Date();
      const monthAndDay = {
        selectedMonth: today.getMonth(), 
        selectedDay: today.getDate() 
      }
      const expectedResult = {
        type: actions.SET_WEATHER_TEXT,
        monthAndDay
      };
      // findWeather(monthAndDay)({() => jest.fn()})
      // .then((data)=>{
      //   console.dir(data);

      // })
      // expect(findWeather(monthAndDay)).toEqual(expectedResult);
    });
  });
  
});
