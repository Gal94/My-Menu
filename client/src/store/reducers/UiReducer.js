import * as actionTypes from '../actionTypes';

const initialState = {
    showSideMenu: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_SIDE_MENU:
            return {
                ...state,
                showSideMenu: !state.showSideMenu,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;
