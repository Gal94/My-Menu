import * as actionTypes from '../actionTypes';

const initialState = {
    userInfo: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
