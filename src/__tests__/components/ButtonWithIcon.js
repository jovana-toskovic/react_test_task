'use strict';

import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonWithIcon from './../components/ButtonWithIcon'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';


describe('<ButtonWithIcon />', () => {

  let wrapper;

  describe('rendering', () => {

    beforeEach(() => {
      wrapper = shallow(<ButtonWithIcon />)
    });

    it('should render correctly');
    it('should render a button');
    it('should render a <FontAwesomeIcon />', () => {
      expect(wrapper.find('FontAwesomeIcon')).toHaveLength(1);
    });
  });

  describe('interactions', () => {
    describe('clicking the button', () => {
      it('should call the onClick function');
    });
  });
});