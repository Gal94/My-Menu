import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setMenuItem } from '../../../../../store/actions/UiActions';
import capitalize from '../../../../../helpers/capitalizeFirstLetter';
import {
    MenuItemCloseButton,
    MenuItemCompWrapper,
    MenuItemCloseDiv,
    MenuItemInnerDiv,
    MenuItemTitleDiv,
    MenuItemTitleName,
    MenuItemTitleSize,
    MenuItemPieChart,
    LineBreak,
    MenuItemFactsContainer,
    MenuItemFactBold,
    MenuItemFact,
    MenuItemText,
} from './MenuItem.styles';
import MenuPieChart from '../../../../../components/MenuPieChart/MenuPieChart.component';
import DailyValues from '../../../../../components/DailyValues/DailyValues.component';

const MenuItem = (props) => {
    const { item } = props;
    return (
        <MenuItemCompWrapper isVisible={props.item ? true : false}>
            {props.item && (
                <MenuItemInnerDiv>
                    <MenuItemCloseDiv>
                        <MenuItemCloseButton onClick={props.onClickX}>
                            X
                        </MenuItemCloseButton>
                    </MenuItemCloseDiv>
                    <MenuItemTitleDiv>
                        <MenuItemTitleName>
                            {capitalize(item.name)}
                        </MenuItemTitleName>
                        <MenuItemTitleSize>
                            {Math.round(item.serving_size_g)} g
                        </MenuItemTitleSize>
                    </MenuItemTitleDiv>
                    <LineBreak />
                    {/* Pie chart for current menu item with its serving size */}
                    <MenuItemPieChart>
                        <MenuPieChart {...item} />
                    </MenuItemPieChart>
                    <LineBreak />
                    {/* Percent of Daily value component */}
                    <DailyValues item={item} />
                    <LineBreak />
                    {/* Nutrition Facts */}
                    <MenuItemFactsContainer>
                        <MenuItemFactBold>
                            <MenuItemText>Calories</MenuItemText>
                            <MenuItemText>{item.calories}</MenuItemText>
                        </MenuItemFactBold>
                        <LineBreak />
                        <MenuItemFactBold>
                            <MenuItemText>Total Carbohydrates</MenuItemText>
                            <MenuItemText>
                                {item.carbohydrates_total_g} g
                            </MenuItemText>
                        </MenuItemFactBold>
                        <LineBreak />
                        <MenuItemFact>
                            <MenuItemText>Fiber</MenuItemText>
                            <MenuItemText>{item.fiber_g} g</MenuItemText>
                        </MenuItemFact>
                        <LineBreak />
                        <MenuItemFact>
                            <MenuItemText>Sugar</MenuItemText>
                            <MenuItemText>{item.sugar_g} g</MenuItemText>
                        </MenuItemFact>
                        <LineBreak />
                        <MenuItemFactBold>
                            <MenuItemText>Total Fats</MenuItemText>
                            <MenuItemText>{item.fat_total_g} g</MenuItemText>
                        </MenuItemFactBold>
                        <LineBreak />
                        <MenuItemFact>
                            <MenuItemText>Saturated</MenuItemText>
                            <MenuItemText>
                                {item.fat_saturated_g} g
                            </MenuItemText>
                        </MenuItemFact>
                        <LineBreak />
                        <MenuItemFactBold>
                            <MenuItemText>Protein</MenuItemText>
                            <MenuItemText>{item.protein_g} g</MenuItemText>
                        </MenuItemFactBold>
                        <LineBreak />
                        <MenuItemFactBold>
                            <MenuItemText>Sodium</MenuItemText>
                            <MenuItemText>{item.sodium_mg} mg</MenuItemText>
                        </MenuItemFactBold>
                        <LineBreak />
                        <MenuItemFactBold>
                            <MenuItemText>Cholesterol</MenuItemText>
                            <MenuItemText>
                                {item.cholesterol_mg} mg
                            </MenuItemText>
                        </MenuItemFactBold>
                        <LineBreak />
                        <MenuItemFactBold>
                            <MenuItemText>Potassium</MenuItemText>
                            <MenuItemText>{item.potassium_mg} mg</MenuItemText>
                        </MenuItemFactBold>
                    </MenuItemFactsContainer>
                </MenuItemInnerDiv>
            )}
        </MenuItemCompWrapper>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object,
    onClickX: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        item: state.ui.menuItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickX: () => dispatch(setMenuItem(undefined)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
