import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { updateUserMacros } from '../../../store/actions/profileActions';
import { NewMenuTitle, NewMenuWrapper } from './NewMenu.styles';
import MealTimeItems from './MealTimeItems/MealTimeItems.component';
import MenuItem from './MealTimeItems/MenuItem/MenuItem.component';

// Get the macros
const NewMenu = (props) => {
    const [myMacros, setMyMacros] = useState({
        calories: 0,
        fats: 0,
        proteins: 0,
        carbs: 0,
    });

    const [menu, setMenu] = useState({
        menuName: 'New Menu',
        morning: [
            {
                sugar_g: 13.3,
                fiber_g: 4,
                serving_size_g: 283.495,
                sodium_mg: 8,
                name: 'onion',
                potassium_mg: 99,
                fat_saturated_g: 0.1,
                fat_total_g: 0.5,
                calories: 126.7,
                cholesterol_mg: 0,
                protein_g: 3.9,
                carbohydrates_total_g: 28.6,
            },
            {
                sugar_g: 2.6,
                fiber_g: 1.2,
                serving_size_g: 100,
                sodium_mg: 4,
                name: 'tomato',
                potassium_mg: 23,
                fat_saturated_g: 0,
                fat_total_g: 0.2,
                calories: 18.2,
                cholesterol_mg: 0,
                protein_g: 0.9,
                carbohydrates_total_g: 3.9,
            },
        ],
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
    });

    // adds an item to a menu based on the meal time
    const addMenuItem = (mealTime, item) => {
        const newMenu = { ...menu };
        newMenu[mealTime] = newMenu[mealTime].push(item);

        // add ingredient values to total
        newMenu.totalSugars += item.sugar_g;
        newMenu.totalSodium += item.sodium_mg;
        newMenu.totalPotassium += item.potassium_mg;
        newMenu.totalSaturatedFat += item.fat_saturated_g;
        newMenu.totalCalories += item.calories;
        newMenu.totalCholesterol += item.cholesterol_mg;
        newMenu.totalProtein += item.protein_g;
        newMenu.totalCarbs += item.carbohydrates_total_g;

        setMenu(newMenu);
    };

    // removes an item from the menu and reduces the total value
    const removeMenuItem = (mealTime, item) => {
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

        setMenu(newMenu);
    };

    const getUserMacros = async () => {
        try {
            const response = await fetch(
                'http://localhost:5000/api/profile/macros',
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            'Bearer ' + localStorage.getItem('MyMenuToken'),
                    },
                }
            );

            const data = await response.json();

            if (response.status >= 400) {
                console.log(data);
                toast.error(data.message);
            }
            setMyMacros({
                calories: data.goal.calories,
                fats: data.goal.fats,
                proteins: data.goal.proteins,
                carbs: data.goal.carbs,
            });
            props.onUpdateMacros(data.goal);
        } catch (err) {
            toast.error('Failed to fetch values');
        }
    };

    useEffect(() => {
        // check if the macros object is empty (never fetched macros)
        if (Object.keys(props.macros).length === 0) {
            getUserMacros();
        } else {
            setMyMacros({
                calories: props.macros.calories,
                fats: props.macros.fats,
                proteins: props.macros.proteins,
                carbs: props.macros.carbs,
            });
        }
    }, []);

    return (
        <NewMenuWrapper>
            <NewMenuTitle>My New Menu</NewMenuTitle>
            <MenuItem />
            <MealTimeItems
                time='Breakfast'
                onAddItem={(item) => addMenuItem('morning', item)}
                onRemoveItem={(item) => removeMenuItem('morning', item)}
                items={menu.morning}
            />
            <MealTimeItems
                time='Lunch'
                onAddItem={(item) => addMenuItem('lunch', item)}
                onRemoveItem={(item) => removeMenuItem('lunch', item)}
                items={menu.lunch}
            />
            <MealTimeItems
                time='Dinner'
                onAddItem={(item) => addMenuItem('dinner', item)}
                onRemoveItem={(item) => removeMenuItem('dinner', item)}
                items={menu.dinner}
            />
            <MealTimeItems
                time='Snacks'
                onAddItem={(item) => addMenuItem('snacks', item)}
                onRemoveItem={(item) => removeMenuItem('snacks', item)}
                items={menu.snacks}
            />
        </NewMenuWrapper>
    );
};

NewMenu.propTypes = {
    macros: PropTypes.object,
    onUpdateMacros: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        macros: state.profile.macros,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateMacros: (userMacros) => dispatch(updateUserMacros(userMacros)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMenu);
