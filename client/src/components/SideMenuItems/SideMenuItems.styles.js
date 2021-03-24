import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideMenuItemsContainer = Styled.ul`
    list-style: none;
    padding-top: 0;
    margin-top: 0;
`;

export const SideMenuItem = Styled.li`
    font-size: 20px;
    padding: 0 0 1rem;
`;

export const SideMenuLink = Styled(Link)`
    text-decoration: none;
    color: black;
`;
