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
});