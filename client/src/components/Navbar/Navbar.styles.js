import Styled, { css } from 'styled-components';

const backgroundStyle = (props) => {
    if (props.isTransparent) {
        return transparentCss;
    } else {
        return coloredCss;
    }
};

export const transparentCss = css`
    background-color: transparent;
`;

export const coloredCss = css`
    background-color: #47c225;
    box-shadow: 0 2px 10px 1px #297535;
    transition: all 0.5s linear;
`;

export const NavbarContainer = Styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    border: none;
    z-index: 100;
    ${backgroundStyle}
`;
