import Styled, { css } from 'styled-components';

export const MealTimeComponentWrapper = Styled.div`
    margin: 0 0 24px;
    width: 100%;
    overflow: hidden;
`;

export const MealTimeItemsWrapper = Styled.div`
    font-size: 16px;
    margin: 0;
    padding: 18px 12px;
    text-align: left;
    outline: none;
    border: none;
    background-color: #0EE883;
    width: 100%;
    position: relative;
    transition: 0.4s;
    color: white;

    &:hover {
        background-color: #c6c6c6;
    }
`;

export const MealTimeTitle = Styled.h1`
    margin: 0;
    font-size: 20px
`;

export const MenuItemsContainer = Styled.div`
    background-color: #0EE88332;
`;

export const MenuTimeItem = Styled.div`
    display: flex;
    cursor: pointer;
`;

const isCategory = (props) => {
    if (props.isCategory) {
        return css`
            background-color: #0ee88366;
            color: #303030;
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
    ${isCategory}
`;
