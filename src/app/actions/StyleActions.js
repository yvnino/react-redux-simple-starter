
export const getAppStyleDone = (data) => ({
    type: 'GET_STYLE',
    data
});

//---------TOASTER---------//
export const toasterSuccess = (data) => ({
    type: 'SUCCESS_MESSAGE', data
});

export const toasterFail = (e) => ({
    type: 'FAIL_MESSAGE', e
});


export function getAppStyle() {
    return function (dispatch) {
        const appStyle = {
            backgroundColor: '#fff'
        };
        dispatch(getAppStyleDone(appStyle));
        dispatch(toasterSuccess({ msg: 'Style Loaded'}));        
    };
};
