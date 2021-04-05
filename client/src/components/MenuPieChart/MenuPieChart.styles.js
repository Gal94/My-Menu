import Styled from 'styled-components';

export const MenuPieChartWrapper = Styled.div`
    display: flex;
    height: 3rem;
`;

export const MenuPieChartContainer = Styled.div`
    width: 5rem;
`;
export const MenuPieChartTextContainer = Styled.div`
    width: calc(100% - 5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuPieChartValueDiv = Styled.div`
    text-align: center;
`;
export const MenuPieChartValue = Styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.7px;
`;
export const MenuPieChartValueType = Styled.p`
    margin: 0;
    font-size: 12px;
`;

export const MenuPieChartPercentage = Styled.p`
    margin: 0;
    font-size: 12px;
`;
