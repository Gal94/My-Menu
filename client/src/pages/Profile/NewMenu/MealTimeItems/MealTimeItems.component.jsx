import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    mealTimeNewItem,
    setMenuItem,
    toggleItemForm,
} from '../../../../store/actions/UiActions';

import {
    MealTimeItemsWrapper,
    MealTimeComponentWrapper,
    MealTimeTitle,
    MenuItemsContainer,
    MenuItemCategory,
    MenuTimeItem,
} from './MealTimeItems.styles';

// * Renders a table with all the food for each meal time
const MealTimeItems = (props) => {
    // * changes the clicked item and meal time properties in the reducers
    const clickedItemHandler = (clickedItem) => {
        props.onSetMenuItem(clickedItem, props.time.toLowerCase());
    };

    const items = props.menu[props.time.toLowerCase()] || [];

    return (
        <MealTimeComponentWrapper>
            <MealTimeItemsWrapper>
                <MealTimeTitle>{props.time}</MealTimeTitle>
                <MealTimeTitle
                    style={{ cursor: 'pointer' }}
                    onClick={() => props.onNewItem(props.time.toLowerCase())}
                >
                    +
                </MealTimeTitle>
            </MealTimeItemsWrapper>
            <MenuItemsContainer>
                <MenuTimeItem>
                    <MenuItemCategory isCategory={true}>Name</MenuItemCategory>
                    <MenuItemCategory isCategory={true}>
                        Amount
                    </MenuItemCategory>
                    <MenuItemCategory isCategory={true}>
                        Calories
                    </MenuItemCategory>
                </MenuTimeItem>
                {/* Render all menu items */}
                {items.map((item, index) => {
                    return (
                        <MenuTimeItem
                            key={index}
                            onClick={() => clickedItemHandler(item)}
                        >
                            <MenuItemCategory>{item.name}</MenuItemCategory>
                            <MenuItemCategory>
                                {Math.round(item.serving_size_g)} g
                            </MenuItemCategory>
                            <MenuItemCategory>
                                {item.calories} Kcal
                            </MenuItemCategory>
                        </MenuTimeItem>
                    );
                })}
            </MenuItemsContainer>
        </MealTimeComponentWrapper>
    );
};

MealTimeItems.propTypes = {
    time: PropTypes.string.isRequired,
    onSetMenuItem: PropTypes.func.isRequired,
    menu: PropTypes.object.isRequired,
    onNewItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetMenuItem: (item, time) => {
            dispatch(setMenuItem(item));
            dispatch(mealTimeNewItem(time));
        },
        onNewItem: (time) => {
            dispatch(mealTimeNewItem(time));
            dispatch(toggleItemForm());
        },
    };
};

const mapStateToProps = (state) => {
    return {
        menu: state.profile.menu,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealTimeItems);
