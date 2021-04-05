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
} from './MenuItem.styles';
import MenuPieChart from '../../../../../components/MenuPieChart/MenuPieChart.component';

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
                    <MenuItemPieChart>
                        <MenuPieChart {...item} />
                    </MenuItemPieChart>
                    <LineBreak />
                    {/* Percent of Daily value component */}
                    <LineBreak />
                    {/* Nutrition Facts */}
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
