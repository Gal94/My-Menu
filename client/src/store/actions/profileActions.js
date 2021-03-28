import * as actionTypes from '../actionTypes';

export const updateUserInfo = (userInfo) => {
    return { type: actionTypes.UPDATE_USER_INFO, userInfo: userInfo };
};
