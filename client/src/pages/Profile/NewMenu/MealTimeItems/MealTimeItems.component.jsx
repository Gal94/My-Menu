import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMenuItem } from '../../../../store/actions/UiActions';

import {
    MealTimeItemsWrapper,
    MealTimeComponentWrapper,
    MealTimeTitle,
    MenuItemsContainer,
    MenuItemCategory,
    MenuTimeItem,
} from './MealTimeItems.styles';

const MealTimeItems = (props) => {
    return (
        <MealTimeComponentWrapper>
            <MealTimeItemsWrapper>
                {/* TODO: add span with + icon */}
                <MealTimeTitle>{props.time}</MealTimeTitle>
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
                {/* TODO: create a modal for each item to display all data, can use pie chart */}
                {props.items.map((item, index) => {
                    return (
                        <MenuTimeItem
                            key={index}
                            onClick={() => props.onSetMenuItem(item)}
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
    onAddItem: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetMenuItem: (item) => dispatch(setMenuItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(MealTimeItems);