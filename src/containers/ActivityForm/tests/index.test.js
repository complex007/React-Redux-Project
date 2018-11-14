import React from 'react';
import { shallow, mount } from 'enzyme';
import { addActivity, deleteActivity, editActivity,readActivity } from '../../../actions/activitiesActions';
import { replace } from '../../../actions/routerActions';
import { ActivityForm, mapDispatchToProps } from '../ActivityForm';

describe.only('<ActivityForm />', () => {
  let activities;
  beforeEach(() => {
    let oneActivity = {id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()};
    activities = [oneActivity];
  });
  it('should not render a delete button for creating new activity ', () => {
    let match = {params:{}};
    const renderedComponent = shallow(<ActivityForm activities={activities} match={match}/>);
    expect(renderedComponent.find('[type="delete"]').length).toBe(0);
  });
  it('should render a delete button for editing activity ', () => {
    let match = {params:{id:"12389343712300"}};
    const readSpy = jest.fn();
    const renderedComponent = shallow(<ActivityForm activities={activities} onReadActivity={readSpy} match={match}/>);
    expect(renderedComponent.find('[type="delete"]').length).toBe(1);
  });
  it('should have title', () => {
    const readSpy = jest.fn();
    const match = {params:{}};
    const renderedComponent = shallow(<ActivityForm activities={activities}  onReadActivity={readSpy} match={match}/>);    
    expect(renderedComponent.find('#title input').length).toBe(1);
  });
  it('should have date', () => {
    const readSpy = jest.fn();
    const match = {params:{}};
    const renderedComponent = shallow(<ActivityForm activities={activities} onReadActivity={readSpy} match={match} />);    
    expect(renderedComponent.find('#date input').length).toBe(1);
  });
  it('should have description', () => {
    const readSpy = jest.fn();
    const match = {params:{}};
    const renderedComponent = shallow(<ActivityForm activities={activities} onReadActivity={readSpy} match={match} />);    
    expect(renderedComponent.find('#desc input').length).toBe(1);
  });
  it('should render fetch activity on mount if a id exists', () => {
    const readSpy = jest.fn();
    let match = {params:{id:"12389343712300"}};
    mount(<ActivityForm activities={activities} onReadActivity={readSpy} match={match}/>);
    expect(readSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onSubmit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmit).toBeDefined();
      });
      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const event = { preventDefault };
        result.onSubmit(event);
        expect(preventDefault).toHaveBeenCalledWith();
      });
      it('create new activity', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const match = {params:{}};
        const preventDefault = jest.fn();
        const event = { preventDefault };
        let activity = {title: 'test2',description: 'test 2 desccription',date:new Date()};
        result.onSubmit(event, match.params, activity.title, activity.description, activity.date);
        expect(dispatch).toHaveBeenCalledWith(addActivity(activity));
        expect(dispatch).toHaveBeenCalledWith(replace('/activity'));
      });
      it('edit activity', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const match = {params:{id:"12389343712300"}};
        const preventDefault = jest.fn();
        const event = { preventDefault };
        let activity = {id: 12389343712300,title: 'testActivity 2',description: 'for test 2',date:new Date()};
        result.onSubmit(event, match.params, activity.title, activity.description, activity.date);
        expect(dispatch).toHaveBeenCalledWith(editActivity(activity.id,activity));
        expect(dispatch).toHaveBeenCalledWith(replace('/activity'));
      });
    });
    describe('onReadActivity', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onReadActivity).toBeDefined();
      });
      it('should get activity when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        let id = 12389343712300;
        result.onReadActivity(id);
        expect(dispatch).toHaveBeenCalledWith(readActivity(id));
      });
    });
    describe('onDeleteActivity', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onDeleteActivity).toBeDefined();
      });
      it('should delete activity when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        let id = 12389343712300;
        result.onDeleteActivity(id);
        expect(dispatch).toHaveBeenCalledWith(deleteActivity(id));
      });
    });
  });
});