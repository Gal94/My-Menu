import Styled, { css } from 'styled-components';

export const MealTimeComponentWrapper = Styled.div`
    margin: 0 0 24px;
    width: 100%;
    position: relative;
    overflow: hidden;

    @media screen and (min-width: 1024px) {
        width: 90%;
        margin: 0 auto 24px;
    } 
`;

export const MealTimeItemsWrapper = Styled.div`
    font-size: 16px;
    margin: 0;

    text-align: left;
    outline: none;
    border: none;
    background-color: #006653da;
    width: 100%;
    position: relative;
    transition: 0.4s;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 0.2rem;

`;

export const MealTimeTitle = Styled.h1`
    margin: 0;
    padding: 18px 20px;
    font-size: 20px;
    color: #f0f0f0;

    @media screen and (min-width: 1024px) {
        font-size: 24px;
    } 
`;

export const MenuItemsContainer = Styled.div`
    background-color: #0d804cc0;
    border-radius: .2rem;
`;

const toHighlight = (props) => {
    if (props.noHover) {
        return ``;
    } else {
        return css`
            &:hover {
                background-color: #00665388;
            }
        `;
    }
};

export const MenuTimeItem = Styled.div`
    display: flex;
    cursor: pointer;
    border-radius: .2rem;

    @media screen and (min-width: 1024px) {
        transition: background-color 80ms ease-in;
        ${toHighlight}
    } 
`;

const isCategory = (props) => {
    if (props.isCategory) {
        return css`
            background-color: #006653a0;
            color: #f0f0f0;
            font-weight: bold;
            cursor: initial;
        `;
    }
};

export const MenuItemCategory = Styled.div`
    width: 33%;
    padding: 6px 4px;
    font-size: 14px;
    text-align: center;
    color: white;
    ${isCategory}

    @media screen and (min-width: 1024px) {
        padding: 10px 4px;
        font-size: 16px;
    } 
`;
