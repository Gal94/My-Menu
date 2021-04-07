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
    newMenu[mealTime] = newMenu[mealTime].filter((mealTimeItem) => {
        return mealTimeItem.name.toLowerCase() !== item.name.toLowerCase();
    });

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
