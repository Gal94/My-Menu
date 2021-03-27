import Styled, { css } from 'styled-components';

export const ProfilePageWrapper = Styled.div`
    background-color: #f0f0f0;
    min-height: 100vh;
    position:relative;
    display: flex;
`;

const toggleMenu = (props) => {
    if (props.menuActive) {
        return css`
            transform: translateX(0);
        `;
    } else {
        return null;
    }
};

export const SideMenuWrapper = Styled.div`
    @media screen and (min-width: 1024px) {
        width: 20rem;
    }
`;

export const SideMenu = Styled.div`
    position: fixed;
    background-color: #e0e0e0;
    height: 100vh;
    width: 40%;
    left: 0;
    top: 0;
    padding-top: 10rem;
    transform: translateX(-100%);
    transition: all .7s ease-out;

    @media (min-width: 1024px) {
        width: 20rem;
        transform: translateX(0);
    }
    ${toggleMenu}
`;

export const ProfilePageContentWrapper = Styled.div`
    padding-top: 10rem;
    width: 90vw;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 1024px) {
        width: initial;
    }
`;
