import * as actionTypes from '../actionTypes';

export const updateUserInfo = (userInfo) => {
    return { type: actionTypes.UPDATE_USER_INFO, userInfo: userInfo };
};

export const updateUserMacros = (userMacros) => {
    return { type: actionTypes.UPDATE_USER_MACROS, macros: userMacros };
};

export const updateMenu = (menu) => {
    return { type: actionTypes.UPDATE_MENU, menu: menu };
};

// Make an action that will save the new menu in the db
export const SaveMenuToDB = (updatedMenu) => {
    return async (dispatch) => {};
};
