import * as actionTypes from '../actionTypes';

export const toggleSideMenu = () => {
    return { type: actionTypes.TOGGLE_SIDE_MENU };
};

export const setMenuItem = (item) => {
    return {
        type: actionTypes.SET_CLICKED_MENU_ITEM,
        item: item,
    };
};

export const mealTimeNewItem = (time) => {
    return {
        type: actionTypes.MEAL_TIME_NEW_ITEM,
        time: time,
    };
};

export const resetMealTimeNewItem = () => {
    return {
        type: actionTypes.MEAL_TIME_NEW_ITEM_RESET,
    };
};
