import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


function renderComponent(props) {
  return shallow(<App/>);
}

describe('app renders', () => {
  it('renders', () => {
      const wrapper = renderComponent();
      expect(wrapper).toBeDefined();
  });
});