import * as actionTypes from '../actionTypes';

const initialState = {
    showSideMenu: false,
    menuItem: null,
    mealTimeNewItem: null,
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
        case actionTypes.MEAL_TIME_NEW_ITEM:
            return {
                ...state,
                mealTimeNewItem: action.time,
            };
        case actionTypes.MEAL_TIME_NEW_ITEM_RESET:
            return {
                ...state,
                mealTimeNewItem: null,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;
