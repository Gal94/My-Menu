import * as actionTypes from '../actionTypes';

const initialState = {
    userInfo: null,
    macros: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case actionTypes.UPDATE_USER_MACROS:
            return {
                ...state,
                macros: action.macros,
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
