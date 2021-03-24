import {
    SideMenuItem,
    SideMenuItemsContainer,
    SideMenuLink,
} from './SideMenuItems.styles';

const SideMenuItems = () => {
    return (
        <SideMenuItemsContainer>
            <SideMenuItem>
                <SideMenuLink to='/profile/graphs'>Graphs</SideMenuLink>
            </SideMenuItem>
            <SideMenuItem>
                <SideMenuLink to='/profile/menu'>Menus</SideMenuLink>
            </SideMenuItem>
            <SideMenuItem>
                <SideMenuLink to='/profile/info'>My Info</SideMenuLink>
            </SideMenuItem>
            <SideMenuItem>
                <SideMenuLink to='/profile/macros'>Macros</SideMenuLink>
            </SideMenuItem>
        </SideMenuItemsContainer>
    );
};

export default SideMenuItems;
