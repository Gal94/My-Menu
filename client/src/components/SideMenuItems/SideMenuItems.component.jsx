import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleSideMenu } from '../../store/actions/UiActions';
import {
    SideMenuItem,
    SideMenuItemsContainer,
    SideMenuLink,
} from './SideMenuItems.styles';

// ? Maybe add favorite recipes
const SideMenuItems = (props) => {
    return (
        <SideMenuItemsContainer>
            <SideMenuItem>
                <SideMenuLink onClick={props.toggleCloseMenu} to='/profile'>
                    View Profile
                </SideMenuLink>
            </SideMenuItem>
            <SideMenuItem>
                <SideMenuLink
                    onClick={props.toggleCloseMenu}
                    to='/profile/menu'
                >
                    Menu
                </SideMenuLink>
            </SideMenuItem>
            <SideMenuItem>
                <SideMenuLink
                    onClick={props.toggleCloseMenu}
                    to='/profile/info'
                >
                    My Info
                </SideMenuLink>
            </SideMenuItem>
            <SideMenuItem>
                <SideMenuLink
                    onClick={props.toggleCloseMenu}
                    to='/profile/macros'
                >
                    Macros
                </SideMenuLink>
            </SideMenuItem>
        </SideMenuItemsContainer>
    );
};

SideMenuItems.propTypes = {
    toggleCloseMenu: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCloseMenu: () => dispatch(toggleSideMenu()),
    };
};

export default connect(null, mapDispatchToProps)(SideMenuItems);
