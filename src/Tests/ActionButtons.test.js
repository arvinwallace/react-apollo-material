import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import {ActionButton} from '../ActionButtons';
import Adapter from 'enzyme-adapter-react-16';
import Fab from '@material-ui/core/Fab';


configure({ adapter: new Adapter() });

describe('ActionButton', () => {
  const defaultProps = {
    classes: {},
    selected: true,
    star: false

  }
  function renderComponent() {
    return mount(<ActionButton {...defaultProps} />);
  }
  it('renders', () => {
    const wrapper = renderComponent();
    expect(wrapper).toBeDefined();
  });
  it('receives the selected prop', () => {
    const wrapper = renderComponent();
    expect(wrapper.props().selected).toEqual(true);
  });
  it('receives the star prop', () => {
    const wrapper = renderComponent();
    expect(wrapper.props().star).toEqual(false);
  });
})