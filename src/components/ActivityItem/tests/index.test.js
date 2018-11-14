import React from 'react';
import { mount } from 'enzyme';
import ActivityItem from '../index';

describe('<ActivityItem />', () => {
  it('should render the content passed to it', () => {
    const content = <div>Hello world!</div>;
    const renderedComponent = mount(<ActivityItem item={content} />);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
