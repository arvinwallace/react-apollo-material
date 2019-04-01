import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import RepositoryList from '../RepositoryList';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('RepositoryList', () => {
  
  const defaultProps = {
    repositories: {
      edges:[
       {node:{id:1, object:{history:{totalCount: 3, nodes:[]}},stargazers:{totalCount:23}}},
       {node:{id:2, object:{history:{totalCount: 43, nodes:[]}},stargazers:{totalCount:2}}},
       {node:{id:3, object:{history:{totalCount: 8, nodes:[]}},stargazers:{totalCount:28}}},
      ],
    },
    selectedRepositoryIds: [1,2,3],
    toggleSelectRepository: jest.fn()
}

  function renderComponent() {
    return shallow(<RepositoryList {...defaultProps}/>);
  }
  describe('main content', () => {
    it('renders', () => {
        const wrapper = renderComponent();
        expect(wrapper).toBeDefined();
    });
    it('renders expected # children', () => {
      const wrapper = renderComponent();
      expect(wrapper.find('WithStyles(BadgeBar)').length).toEqual(3);
    });
    it('passes the correct prop for # of commits', () => {
      const wrapper = renderComponent();
      const badge = wrapper.find('WithStyles(BadgeBar)').first();
      expect(badge.props().commits).toEqual(3)
    });
    it('passes the correct prop for # of stars', () => {
      const wrapper = renderComponent();
      const badge = wrapper.find('WithStyles(BadgeBar)').first();
      expect(badge.props().stars).toEqual(23)
    });
  })
});
