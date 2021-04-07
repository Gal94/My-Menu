import * as actionTypes from '../actionTypes';

const initialState = {
    userInfo: null,
    macros: {},
    menu: {
        menuName: 'New Menu',
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: [],
        totalSugars: 0,
        totalSodium: 0,
        totalPotassium: 0,
        totalSaturatedFat: 0,
        totalCalories: 0,
        totalCholesterol: 0,
        totalProtein: 0,
        totalCarbs: 0,
    },
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
        case actionTypes.UPDATE_MENU:
            return {
                ...state,
                menu: action.menu,
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
