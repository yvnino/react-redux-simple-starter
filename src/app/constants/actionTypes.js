export const createAsyncAction = (actionType) => ({
  PENDING: `${actionType}_PENDING`,
  SUCCESS: `${actionType}_SUCCESS`,
  FAILURE: `${actionType}_FAILURE`,
  type: actionType
});

const AT = {
  SET_TEXT_SYNC: 'SET_TEXT_SYNC',
  SET_TEXT_ASYNC: createAsyncAction('SET_TEXT_ASYNC')
};

export default AT;
