import {
  addActivity, readActivities, readActivity, editActivity, deleteActivity
} from '../../actions/activitiesActions';
import activitiesReducer from '../activitiesReducer';

describe('activitiesReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      activities: []
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state.activities;
    expect(activitiesReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the readActivities action correctly', () => {
    state.activities = [{id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()}];
    const expectedResult = state.activities;
    expect(activitiesReducer(state.activities, readActivities(state.activities))).toEqual(expectedResult);
  });
  it('should handle the readActivity action correctly', () => {
    state.activities = [
      {id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()},
      {id: 12389343712302,title: 'testActivity',description: 'for test',date:new Date()}
    ];
    const expectedResult = [state.activities[0]];
    expect(activitiesReducer(state.activities, readActivity(12389343712300,state.activities[0]))).toEqual(expectedResult);
  });
  it('should handle the editActivity action correctly', () => {
    state.activities = [
      {id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()},
      {id: 12389343712302,title: 'testActivity',description: 'for test',date:new Date()}
    ];
    const id = 12389343712300;
    const activity = {id: 12389343712300,title: 'testActivity 2',description: 'for test2',date:new Date()};

    const expectedResult = [activity,state.activities[1]];
    expect(activitiesReducer(state.activities, editActivity(id,activity))).toEqual(expectedResult);
  });
  it('should handle the addActivity action correctly', () => {
    state.activities = [];
    const activity = {title: 'testActivity 2',description: 'for test2',date:new Date()};
    const newActivity = Object.assign({id:activity.date.getTime()}, activity);
    const expectedResult = [newActivity];
    expect(activitiesReducer(state.activities, addActivity(newActivity))).toEqual(expectedResult);
  });
  it('should handle the deleteActivity action correctly', () => {
    state.activities = [
      {id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()},
      {id: 12389343712302,title: 'testActivity',description: 'for test',date:new Date()}
    ];
    const id = 12389343712300;
    const expectedResult = [state.activities[1]];
    expect(activitiesReducer(state.activities, deleteActivity(id))).toEqual(expectedResult);
  });
});
