import Styled from 'styled-components';

export const MacroPieWrapper = Styled.div`
    display: flex;
    height: 15rem;
    justify-content: center;
`;

export const MacroPieChartLegend = Styled.div`
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 30%;
    padding-bottom: 3rem;
`;

export const MacroPieChartText = Styled.p`
    margin: 4px;
    font-size: 14px;
    display: inline-block;
`;
