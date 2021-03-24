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
                user: action.user,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                jwtToken: null,
            };
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.SET_USER:
            return {
                ...state,
                jwtToken: action.token,
                user: action.user,
            };
        default:
            return { ...state };
    }
};

export default reducer;
