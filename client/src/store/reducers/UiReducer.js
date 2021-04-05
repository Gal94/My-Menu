import * as actionTypes from '../actionTypes';

const initialState = {
    showSideMenu: false,
    menuItem: undefined,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_SIDE_MENU:
            return {
                ...state,
                showSideMenu: !state.showSideMenu,
            };

        case actionTypes.SET_CLICKED_MENU_ITEM:
            return {
                ...state,
                menuItem: action.item,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;
