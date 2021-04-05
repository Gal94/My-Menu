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
            display: initial;
        `;
    } else {
        return css`
            display: none;
        `;
    }
};

export const MenuItemCompWrapper = Styled.div`
    ${isVisible}
    position: absolute;
    background-color: #f0f0f0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    border-radius: .3rem;
`;

export const MenuItemInnerDiv = Styled.div`
    padding: 16px;
`;

export const MenuItemCloseDiv = Styled.div`
    text-align: right;
`;

export const MenuItemCloseButton = Styled.span`

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
