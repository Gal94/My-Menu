import Styled, { css } from 'styled-components';

export const ProfileInfoWrapper = Styled.div`
    position: relative;
    
    @media screen and (min-width: 500px) {
        width: calc(100% - 10rem);
    }

    @media screen and (min-width: 1024px) {
        width: calc(100% - 20rem);
        // margin: 0 auto;
    }
`;

export const ProfileInfoTitle = Styled.h1`
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: 'B612', sans-serif;
    color: #006653;
    font-size: 26px;
    text-align: left;
`;

export const ProfileInfoIcon = Styled.span`
    cursor: pointer;

    @media screen and (min-width: 1024px) {
        display: none;
    }
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

    @media screen and (min-width: 1024px) {
        position: relative;
        opacity: 1;
        width: fit-content;
    }
`;

export const ProfileInfoDescText = Styled.p`
    margin: 0;
    color: #276118;
    font-size: 14px;

    @media screen and (min-width: 1024px) {
        padding: 8px 12px;
    }
`;

export const ProfileInfoFormContainer = Styled.div`
    width: 100%;
    height: fit-content;

    @media screen and (min-width: 500px) {
        width: 30rem;
        margin: 0 auto;
    }

    @media screen and (min-width: 1024px) {
        margin: initial;
    }
`;

export const ProfileInfoMenusContainer = Styled.div`
    width: 100%;
    height: 10rem;
`;
