import Styled from 'styled-components';

export const DailyValuesWrapper = Styled.div`

`;

export const DailyValuesTitle = Styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: bold;

    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }
`;

export const DailyValuesProgressBarContainer = Styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (min-width: 1024px) {
        margin: 12px 0;
    }
`;

export const DailyValueContainer = Styled.div`
    margin-top: 8px;
    width: 20%;
`;

export const DailyValuePercent = Styled.p`
    margin: 4px 0 0 0;
    text-align: center;
    font-size: 12px;

    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }
`;

export const DailyValueMacroName = Styled.p`
    margin: 2px 0 0 0;
    text-align: center;
    font-size: 11px;
    color: #606060;

    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }
`;
