import Styled, { css } from 'styled-components';

export const LineBreak = Styled.hr`
    background-color: #d0d0d0;
    width: 100%;
    height: 1px;
    border: none;
    border-radius: .3rem;

    @media screen and (min-width: 1024px) {
        margin: 1rem 0;
    }
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
    top: 6rem;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    border-radius: .3rem;
    transform: translateY(-110%);
    font-family: 'B612', sans-serif;
    ${isVisible}

    transition: transform .6s, visibility 1s;

    @media screen and (min-width: 1024px) {
        width: calc(100vw - 15rem);
        right: -2.5rem;
        left: initial;
    }
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
    font-family: 'B612', sans-serif;
    color: #006653;

    @media screen and (min-width: 1024px) {
        font-size: 20px;
    }
    
`;

export const MenuItemTitleSize = Styled.p`
    margin: 4px 0 0 0;
    color: #a0a0a0;
    font-size: 12px;
    font-weight: initial;

    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }

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
    
    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }
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

    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }
`;

export const MenuItemHeaderSection = Styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
`;

export const RemoveItemButton = Styled.button`
    font-size: 12px;
    background-color: transparent;
    color: #f7596f;
    border: 1px solid #f7596f;
    border-radius: 0.3rem;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    padding: 12px 8px;

    @media screen and (min-width: 1024px) {

        transition: all 80ms ease-in;

        &:hover {
            background-color: #f7596f;
            color: #f0f0f0;
            border: 1px solid #f7596f;
        }
    }
`;
