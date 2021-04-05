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
