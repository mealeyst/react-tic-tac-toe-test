import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../src/App';

describe("App", () => {

  it("initializes with X playing first", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().player_turn).to.equal('X');
  });

  describe("#handleClickSpace", () => {
    it("xyz", () => {
      const wrapper = shallow(<App />);
      wrapper.instance().handleClickSpace();
      expect(wrapper.state().player_turn).to.equal('O');
    });
  });

});
