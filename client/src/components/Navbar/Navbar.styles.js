import Styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const transparentCss = css`
    background-color: transparent;
    transition: all 0.5s linear;
`;

export const coloredCss = css`
    background-color: #005949;
    box-shadow: 0 2px 10px 1px #005949;
    transition: all 0.5s linear;
`;

export const NavbarContainer = Styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    border-radius: .1rem;
    justify-content: flex-end;
    height: 4rem;
    border: none;
    z-index: 100;
    ${coloredCss}
`;

export const NavbarItems = Styled.ul`  
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
    margin-right: 0rem;

    @media screen and (min-width: 1024px) {
        margin-right: 2rem;
    }
`;

export const NavbarItem = Styled.li`
    width: fit-content;
    margin-right: 0.7rem;
    cursor: pointer;
    color: white;
    font-size: 14px;
    &:active {
        color: #c0c0c0;
    }

    @media screen and (min-width: 600px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 18px;
        margin-left: 2rem;
        
        &:hover {
            color: #00E6BB;
        }
    }

`;

export const NavbarLink = Styled(Link)`
    color: inherit;
    text-decoration: none;

    &:active {
        color: #c0c0c0;
    }
`;
