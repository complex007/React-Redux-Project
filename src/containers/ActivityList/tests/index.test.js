import React from 'react';
import { shallow, mount } from 'enzyme';
import ActivityItem from '../../../components/ActivityItem';
import { ActivityList } from '../ActivityList';
describe.only('<ActivityList />', () => {
  let activities;
  beforeEach(() => {
    let oneActivity = {id: 12389343712300,title: 'testActivity',description: 'for test',date:new Date()};
    activities = [oneActivity];
  });
  it('should render a ActivityItem', () => {
    const readSpy = jest.fn();
    const renderedComponent = shallow(<ActivityList activities={activities} onReadActivities={readSpy} />);
    expect(renderedComponent.find(ActivityItem).length).toBe(1);
  });
  it('should render fetch activity on mount if a id exists', () => {
    const readSpy = jest.fn();
    mount(<ActivityList activities={activities} onReadActivities={readSpy}/>);
    expect(readSpy).toHaveBeenCalled();
  });
  it('should display title of ActivityItem', () => {
    const readSpy = jest.fn();
    const renderedComponent = mount(<ActivityList activities={activities}  onReadActivities={readSpy}/>);    
    expect(renderedComponent.find('span.title').length).toBe(1);
  });
  it('should display dateInfo of ActivityItem', () => {
    const readSpy = jest.fn();
    const renderedComponent = mount(<ActivityList activities={activities} onReadActivities={readSpy} />);    
    expect(renderedComponent.find('span.dateInfo').length).toBe(1);
  });
});
