export const addToMenu = (menu, mealTime, item) => {
    const newMenu = {
        ...menu,
    };
    newMenu[mealTime].push(item);
    // add ingredient values to total
    newMenu.totalSugars += item.sugar_g;
    newMenu.totalSodium += item.sodium_mg;
    newMenu.totalPotassium += item.potassium_mg;
    newMenu.totalSaturatedFat += item.fat_saturated_g;
    newMenu.totalCalories += item.calories;
    newMenu.totalCholesterol += item.cholesterol_mg;
    newMenu.totalProtein += item.protein_g;
    newMenu.totalCarbs += item.carbohydrates_total_g;
    return newMenu;
};

export const removeFromMenu = (menu, mealTime, item) => {
    const newMenu = { ...menu };

    // * Removes the correct item from the menu
    let removed = false;
    const newMenuItems = [];
    newMenu[mealTime].forEach((mealTimeItem) => {
        if (
            removed ||
            mealTimeItem.name.toLowerCase() !== item.name.toLowerCase() ||
            mealTimeItem.calories !== item.calories
        ) {
            newMenuItems.push(mealTimeItem);
        } else {
            removed = true;
            return;
        }
    });

    newMenu[mealTime] = newMenuItems;

    // add ingredient values to total
    newMenu.totalSugars -= item.sugar_g;
    newMenu.totalSodium -= item.sodium_mg;
    newMenu.totalPotassium -= item.potassium_mg;
    newMenu.totalSaturatedFat -= item.fat_saturated_g;
    newMenu.totalCalories -= item.calories;
    newMenu.totalCholesterol -= item.cholesterol_mg;
    newMenu.totalProtein -= item.protein_g;
    newMenu.totalCarbs -= item.carbohydrates_total_g;

    return newMenu;
};
