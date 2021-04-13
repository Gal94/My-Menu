import Styled, { css } from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';

const desktopStyles = css`
    @media screen and (min-width: 1024px) {
        width: 7rem;
    }
`;

export const RoundProgressbarContainer = Styled.div`
    width: 5rem;
    margin: 12px 0;

    ${desktopStyles}
`;

export const RoundProgressbarTitle = Styled.h1`
    margin: 0 0 6px 0;
    font-size: 16px;
    text-align: center;

    @media screen and (min-width: 1024px) {
        width: 7rem;
        font-family: 'B612', sans-serif;
    }
`;

export const ProgressBar = Styled(CircularProgressbar)`
    width: 5rem;

    ${desktopStyles}
`;

export const RoundProgressbarValue = Styled.p`
    margin: 2px 0 0 0;
    text-align: center;
    font-size: 13px;

    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }
`;
