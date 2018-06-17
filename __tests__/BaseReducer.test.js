import reducer from '../src/app/reducers/base';
import AT from '../src/app/constants/actionTypes';
import {initialState as baseReducerInitialState} from '../src/app/reducers/base';

describe('base reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(baseReducerInitialState);
  })

  it('should handle SET_TEXT_SYNC', () => {
    expect(
      reducer(baseReducerInitialState, {
        type: AT.SET_TEXT_SYNC,
        payload: 'Run the tests'
      })
    ).toEqual(
      {
        ...baseReducerInitialState,
        text: 'Run the tests'
      }
    );
  })
})