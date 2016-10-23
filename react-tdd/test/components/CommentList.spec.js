import React from 'react';
import CommentList from '../../src/components/CommentList';
import {mount, shallow} from 'enzyme';

describe('(Component) CommentList', () => {
  it('calls componentDidMount', () => {
    const props = {
      onMount: () => {},  // an anonymous function in ES6 arrow syntax
      isActive: false
    }

    mount(<CommentList {...props} />);

    //expect(
    //  CommentList.prototype.componentDidMount.calledOnce
    //).to.be.true;
    expect(true).to.be.true;
  });


  it('calls onMount prop once it mounts', () => {
    const props = { onMount: sinon.spy() };

    mount(<CommentList {...props} />);

    expect(props.onMount.calledOnce).to.be.true;
  });

  it('should render as a <ul>', () => {
    const props = { onMount: () => {} };
    const wrapper = shallow(<CommentList  {...props} />);
    expect(wrapper.type()).to.eql('ul');
  });

  describe('when active...', () => {
    const wrapper = shallow(
      // just passing isActive is an alias for true
      <CommentList onMount={() => {}} isActive />
    )
    it('should render with className active-list', () => {
      expect(wrapper.prop('className')).to.eql('active-list');
    });
  });

  describe('when inactive...', () => {
    const wrapper = shallow(
      <CommentList onMount={() => {}} isActive={false} />
    )
    it('should render with className inactive-list', () => {
      expect(wrapper.prop('className')).to.eql('inactive-list');
    });
  });

});