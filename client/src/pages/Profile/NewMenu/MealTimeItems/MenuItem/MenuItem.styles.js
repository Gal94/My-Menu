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

export const MenuItemCompWrapper = Styled.div`
    position: absolute;
    background-color: #f0f0f0;
    top: 0;
    left: 0;
    width: 90vw;
    height: 110%;
    max-height: fit-content;
    z-index: 10;
    border-radius: .3rem;
    transform: translateY(-110%);
    ${isVisible}

    transition: transform 1s;
`;

export const MenuItemInnerDiv = Styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const MenuItemCloseDiv = Styled.div`
    text-align: right;
`;

export const MenuItemCloseButton = Styled.span`
    cursor: pointer;
`;

export const MenuItemTitleDiv = Styled.div`

`;

export const MenuItemTitleName = Styled.h1`
    margin: 0;
    font-size: 16px;
`;

export const MenuItemTitleSize = Styled.p`
    margin: 4px 0 0 0;
    color: #a0a0a0;
    font-size: 12px;
    font-weight: initial;
`;

export const MenuItemPieChart = Styled.div`

`;

export const MenuItemFactsContainer = Styled.div`

`;

export const MenuItemFactBold = Styled.div`
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    padding: 0 12px;
`;

export const MenuItemFact = Styled.div`
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    padding: 0 12px 0 20px;
    color: #808080;
`;

export const MenuItemText = Styled.p`
    margin: 4px;
`;
