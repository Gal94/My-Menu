import Styled, { css } from 'styled-components';

export const ProfilePageWrapper = Styled.div`
    background-color: #f0f0f0;
    min-height: '100vh'
    padding-top: 50rem;
    position:relative;
`;

const toggleMenu = (props) => {
    if (props.menuActive) {
        return css`
            transform: translateX(10rem);
        `;
    }
};

export const SideMenu = Styled.div`
    position: fixed;
    background-color: #e0e0e0;
    height: 100vh;
    margin-top: 3rem;
    width: 15rem;
    padding-top: 3rem;
    transition: all .7s ease-out;
    transform: translateX(-15rem)
    ${toggleMenu}
`;
