import React from 'react';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import  {App}  from '../src/app/components/App';
import {initialState as baseReducerInitialState} from '../src/app/reducers/base';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

const setTextAsync = jest.fn();
const setTextSync = jest.fn();

const actionsMock = {
  setTextSync,
  setTextAsync
};
const setup = (props = {}) => ({
  ...props,
  actions: actionsMock,
  ...baseReducerInitialState
});

describe('<App />', () => {
  const props = setup();
  let app = shallow(<App {...props}  />);
  
  
  describe('basic', () => {
    it('render', () => {
      expect(App).toMatchSnapshot();
    });

    it('initialized `state`', () => {
      expect(app.state()).toEqual({});
    });

    it('initialized props', () => {
      const { actions, text } = app.instance().props;
      expect(text).toEqual(null);
      expect(actions).toEqual(actionsMock);
    });
  });

  describe('buttons', () => {
    beforeEach(() => {
      app.setProps({
        text: null
      })
    });

    it('test setTextSync', () => {
      app.find('#SetTextSyncButton').simulate('click');
      expect(actionsMock.setTextSync).toBeCalled();
    });

    it('test setTextAsync', () => {
      app.find('#SetTextAsyncButton').simulate('click');
      expect(actionsMock.setTextAsync).toBeCalled();
    });
  });
});
