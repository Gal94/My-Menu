import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideMenuItemsContainer = Styled.ul`
    list-style: none;
    padding-top: 0;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
`;

export const SideMenuItem = Styled.li`
    font-size: 20px;
    padding: 0 0 1rem;
    transform: translate(0);
    transition: transform .5s ease-in-out;
    width: 7rem;
    
    &:hover {
        transform: translate(.5rem, 0);
    }
    
`;

export const SideMenuLink = Styled(Link)`
    text-decoration: none;
    color: black;
`;
