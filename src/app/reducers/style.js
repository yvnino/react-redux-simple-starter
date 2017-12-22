const styleReducer = (state = { appStyle: {} }, action) => {

    switch (action.type) {
        case 'GET_STYLE': {
            return Object.assign({}, state, {
                appStyle: {...action.data}
            })
        }
        default:
            return state;
    }
}

export default styleReducer;