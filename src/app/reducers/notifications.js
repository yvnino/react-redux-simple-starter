const toasterReducer = (state = { showSuccessMsg: false, msg: '' }, action) => {
  switch (action.type) {
    case 'SUCCESS_MESSAGE': {
      return Object.assign({}, {
        showSuccessMsg: true,
        msg: action.data.msg
      });
    }
    case 'FAIL_MESSAGE': {
      return Object.assign({}, {
        showFailMsg: true,
        msg: action.e.msg
      });
    }
    default:
      return state;
  }
};

export default toasterReducer;
