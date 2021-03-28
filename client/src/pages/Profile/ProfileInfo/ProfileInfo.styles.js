import Styled, { css } from 'styled-components';

export const ProfileInfoWrapper = Styled.div`
    position: relative;
`;

export const ProfileInfoTitle = Styled.h1`
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 26px;
    text-align: left;
`;

export const ProfileInfoIcon = Styled.span`
    cursor: pointer;
`;

const showDesc = (props) => {
    if (props.show) {
        return css`
            opacity: 1;
        `;
    }
};

export const ProfileInfoDescContainer = Styled.div`
    padding: 0 0;
    background-color: #55cc3786;
    border: 2px solid #55cc37;
    border-radius: 0.3rem;
    width: fit-content;
    padding: 0.2rem 0;
    margin-bottom: .5rem;
    position: absolute;
    width: 12rem;
    top: 0;
    right: 0;
    opacity: 0;
    ${showDesc}
    transition: opacity .5s ease-in-out;
`;

export const ProfileInfoDescText = Styled.p`
    margin: 0;
    color: #276118;
    font-size: 14px;
`;

export const ProfileInfoFormContainer = Styled.div`
    width: 100%;
    height: fit-content;
`;

export const ProfileInfoMenusContainer = Styled.div`
    width: 100%;
    height: 10rem;
    // background-color: blue;
`;
