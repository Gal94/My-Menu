import Styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const backgroundStyle = (props) => {
    if (props.isTransparent) {
        return transparentCss;
    } else {
        return coloredCss;
    }
};

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
    ${backgroundStyle}
`;

const listStyle = (props) => {
    if (props.isTransparent) {
        return css`
            color: white;
        `;
    } else {
        return css`
            color: white;
        `;
    }
};

export const NavbarItems = Styled.ul`  
    display: flex;
    justify-content: flex-end;
    list-style: none;
    align-items: center;
    width: 100%;
    ${listStyle}
`;

export const NavbarItem = Styled.li`
    width: fit-content;
    margin-right: 1rem;
    cursor: pointer;

    &:active {
        color: #c0c0c0;
    }

`;

export const NavbarLink = Styled(Link)`
    color: inherit;
    text-decoration: none;

    &:active {
        color: #c0c0c0;
    }
`;
