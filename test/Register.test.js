import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { Register } from '../src/features/event/Register';

Enzyme.configure({ adapter: new Adapter() });

describe('<Register />', () => {
  it('should render title correctly', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('.title').text()).to.contains(
      'Master React Redux Form'
    );
  });
});
