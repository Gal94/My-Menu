import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
    updateMenu,
    updateUserMacros,
} from '../../../store/actions/profileActions';
import {
    NewMenuChartsContainer,
    NewMenuContentWrapper,
    NewMenuTitle,
    NewMenuWrapper,
} from './NewMenu.styles';
import MealTimeItems from './MealTimeItems/MealTimeItems.component';
import { RoundProgressBar } from './RoundProgressBar/RoundProgressBar.component';
import { getMacros, getMenuFromApi } from '../../../helpers/ApiCalls';

// ? The menu display container
const NewMenu = (props) => {
    // * states to be passed to inner components
    const [myMacros, setMyMacros] = useState([
        {
            name: 'Calories',
            amount: 0,
            color: '#3e98c7',
        },
        {
            name: 'Carbs',
            color: '#329C13',
        },
        {
            name: 'Proteins',
            amount: 0,
            color: '#9633E8',
        },
        {
            name: 'Fats',
            amount: 0,
            color: '#E81005',
        },
    ]);
    const [currentMacros, setCurrentMacros] = useState([0, 0, 0, 0]);

    const getUserMacros = async () => {
        const goals = await getMacros(props.onUpdateMacros);

        if (goals) {
            setMyMacros([
                {
                    name: 'Calories',
                    amount: goals.calories,
                    color: '#3e98c7',
                },
                {
                    name: 'Carbs',
                    amount: goals.carbs,
                    color: '#329C13',
                },
                {
                    name: 'Proteins',
                    amount: goals.proteins,
                    color: '#9633E8',
                },
                {
                    name: 'Fats',
                    amount: goals.fats,
                    color: '#E81005',
                },
            ]);
        }
    };

    useEffect(() => {
        // * check if the macros object is empty (never fetched macros)
        if (Object.keys(props.macros).length === 0) {
            getUserMacros();
        } else {
            setMyMacros([
                {
                    name: 'Calories',
                    amount: props.macros.calories,
                    color: '#3e98c7',
                },
                {
                    name: 'Carbs',
                    amount: props.macros.carbs,
                    color: '#329C13',
                },
                {
                    name: 'Proteins',
                    amount: props.macros.proteins,
                    color: '#9633E8',
                },
                {
                    name: 'Fats',
                    amount: props.macros.fats,
                    color: '#E81005',
                },
            ]);
        }

        // * check if the user's menu wasn't fetched already
        if (!props.menu.createdAt) {
            getMenuFromApi(props.onUpdateMenu, setCurrentMacros);
        } else {
            // *  update the currentAmount state for the macros
            setCurrentMacros([
                props.menu.totalCalories,
                props.menu.totalCarbs,
                props.menu.totalProtein,
                props.menu.totalFat,
            ]);
        }
    }, [props.menu]);

    const progressBarSection = (
        <NewMenuChartsContainer>
            {myMacros.map((macro, index) => (
                <RoundProgressBar
                    key={index}
                    macro={macro}
                    currentValue={currentMacros[index]}
                />
            ))}
        </NewMenuChartsContainer>
    );

    return (
        <NewMenuWrapper>
            <NewMenuTitle>My Menu</NewMenuTitle>
            <NewMenuContentWrapper>
                {/* Progress Bar component */}
                {progressBarSection}

                {/* remove the menu display if an item is clicked*/}
                {!props.selectedItem && (
                    <div>
                        <MealTimeItems
                            time='Breakfast'
                            items={props.menu.breakfast}
                        />
                        <MealTimeItems time='Lunch' items={props.menu.lunch} />
                        <MealTimeItems
                            time='Dinner'
                            items={props.menu.dinner}
                        />
                        <MealTimeItems
                            time='Snacks'
                            items={props.menu.snacks}
                        />
                    </div>
                )}
            </NewMenuContentWrapper>
        </NewMenuWrapper>
    );
};

NewMenu.propTypes = {
    macros: PropTypes.object,
    menu: PropTypes.object.isRequired,
    onUpdateMacros: PropTypes.func.isRequired,
    onUpdateMenu: PropTypes.func.isRequired,
    selectedItem: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        macros: state.profile.macros,
        menu: state.profile.menu,
        selectedItem: state.ui.menuItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateMacros: (userMacros) => dispatch(updateUserMacros(userMacros)),
        onUpdateMenu: (newMenu) => dispatch(updateMenu(newMenu)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMenu);
