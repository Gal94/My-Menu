import * as actionTypes from '../actionTypes';

const initialState = {
    user: null,
    jwtToken: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                jwtToken: action.token,
                user: action.token,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                jwtToken: null,
            };
        case actionTypes.SET_USER:
            return {
                ...state,
                jwtToken: action.token,
            };
        default:
            return { ...state };
    }
};

export default reducer;
