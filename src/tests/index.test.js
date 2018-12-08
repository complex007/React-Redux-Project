import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import App from '../App';


describe('<App />', () => {
  it('should render the nav', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find('nav').length).toBe(1);
  });

  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });
});