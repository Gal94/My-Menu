import Styled, { css } from 'styled-components';

export const LineBreak = Styled.hr`
    background-color: #d0d0d0;
    width: 100%;
    height: 1px;
    border: none;
    border-radius: .3rem;
`;

const isVisible = (props) => {
    if (props.isVisible) {
        return css`
            visibility: visible;
            transform: translateY(0);
        `;
    } else {
        return css`
            visibility: hidden;
        `;
    }
};

export const NewMenuItemModalBG = Styled.div`
    background-color: #09090969;
    height: 100%;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
`;

export const NewMenuItemWrapper = Styled.div`
    position: fixed;
    top: 0rem;
    right: 0;
    width: 100vw;
    height: 100%;
    max-height: fit-content;
    z-index: 100;
    border-radius: .3rem;
    transform: translateY(-110%);
    ${isVisible}

    transition: transform .6s, visibility 1s;
`;

export const NewMenuItemInnerDiv = Styled.div`
    background-color: white;
    top: 10rem;
    width: 20rem;
    margin: 0 auto;
    padding: 0 16px;
    position: relative;
    height: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NewMenuItemCloseDiv = Styled.div`
    text-align: right;
`;

export const NewMenuItemCloseButton = Styled.span`
    cursor: pointer;
`;

export const NewMenuItemFormContainer = Styled.div`
    text:align: center;
`;

export const NewMenuItemTitle = Styled.h1`
    margin: 0;
    text-align: center;
    font-size: 20px;
`;

export const NewMenuItemText = Styled.p`
    font-size: 13px;
    margin: 4px 0 0 0;
    padding: 0;
    text-align: center;
`;

export const NewMenuItemFormDiv = Styled.div`
    margin: 8px auto 0;
    width: fit-content;
`;

export const NewMenuItemInput = Styled.input`
    width: 10rem;
    text-align: center;
    border: 1px solid #51bd71;
    outline: none;
    padding: 8px 4px;
`;

export const NewMenuItemSubmit = Styled.button`
    background-color: #51bd71;
    border: 1px solid #51bd71;
    padding: 8px 12px;
    color: white;
    outline: none;
    font-weight: bold;
`;
