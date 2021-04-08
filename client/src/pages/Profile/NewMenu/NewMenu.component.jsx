import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
    updateMenu,
    updateUserMacros,
} from '../../../store/actions/profileActions';
import { NewMenuTitle, NewMenuWrapper } from './NewMenu.styles';
import MealTimeItems from './MealTimeItems/MealTimeItems.component';
import MenuItem from './MealTimeItems/MenuItem/MenuItem.component';
import { removeFromMenu } from '../../../helpers/menuHelpers';

// Get the macros
const NewMenu = (props) => {
    // needed for inner component
    const [myMacros, setMyMacros] = useState({
        calories: 0,
        fats: 0,
        proteins: 0,
        carbs: 0,
    });

    // removes an item from the menu and reduces the total value
    const removeMenuItem = (mealTime, item) => {
        const newMenu = removeFromMenu(props.menu, mealTime, item);
        props.onUpdateMenu(newMenu);
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
                return toast.error(data.message);
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

    const getUserMenu = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/profile/menu`,
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
                return toast.error(data.message);
            }

            props.onUpdateMenu(data.menu[0]);
        } catch (error) {
            console.log(error);
            toast.error('Failed to fetch menu, please try again later.');
        }
    };

    useEffect(() => {
        // * check if the macros object is empty (never fetched macros)
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

        // * check if the user's menu wasn't fetched already
        if (!props.menu.createdAt) {
            getUserMenu();
        }
    }, []);

    return (
        <NewMenuWrapper>
            <NewMenuTitle>My New Menu</NewMenuTitle>
                <MenuItem />
                <MealTimeItems
                    time='Breakfast'
                    onRemoveItem={(item) =>
                        removeMenuItem('breakfast', item)
                    }
                    items={props.menu.breakfast}
                />
                <MealTimeItems
                    time='Lunch'
                    onRemoveItem={(item) => removeMenuItem('lunch', item)}
                    items={props.menu.lunch}
                />
                <MealTimeItems
                    time='Dinner'
                    onRemoveItem={(item) => removeMenuItem('dinner', item)}
                    items={props.menu.dinner}
                />
                <MealTimeItems
                    time='Snacks'
                    onRemoveItem={(item) => removeMenuItem('snacks', item)}
                    items={props.menu.snacks}
                />
        </NewMenuWrapper>
    );
};

NewMenu.propTypes = {
    macros: PropTypes.object,
    menu: PropTypes.object.isRequired,
    onUpdateMacros: PropTypes.func.isRequired,
    onUpdateMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        macros: state.profile.macros,
        menu: state.profile.menu,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateMacros: (userMacros) => dispatch(updateUserMacros(userMacros)),
        onUpdateMenu: (newMenu) => dispatch(updateMenu(newMenu)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMenu);
