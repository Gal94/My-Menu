import Styled from 'styled-components';

export const MenuPieChartWrapper = Styled.div`
    display: flex;
    height: 3rem;

    @media screen and (min-width: 1024px) {
        height: 5rem;
    }
`;

export const MenuPieChartContainer = Styled.div`
    width: 5rem;
    
    @media screen and (min-width: 1024px) {
        width: 10rem;
    }
    
`;
export const MenuPieChartTextContainer = Styled.div`
    width: calc(100% - 5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 1024px) {
        justify-content: space-around;
    }
`;

export const MenuPieChartValueDiv = Styled.div`
    text-align: center;
`;
export const MenuPieChartValue = Styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.7px;
    
    @media screen and (min-width: 1024px) {
        font-size: 14px;
        margin: 4px 0;
    }
`;
export const MenuPieChartValueType = Styled.p`
    margin: 0;
    font-size: 12px;

    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }
`;

export const MenuPieChartPercentage = Styled.p`
    margin: 0;
    font-size: 12px;

`;
