import { setTextSync } from '../src/app/actions/BaseActions';
import AT from '../src/app/constants/actionTypes';

describe('baseActions', () => {
  it('should create an actionsetTextSync', () => {
    const text = 'Finish';
    const expectedAction = {
      type: AT.SET_TEXT_SYNC,
      payload: text
    };
    
    expect(setTextSync(text)).toEqual(expectedAction);
  })
})