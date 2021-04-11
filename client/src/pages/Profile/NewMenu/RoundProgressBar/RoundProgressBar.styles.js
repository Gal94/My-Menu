import Styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';

export const RoundProgressbarContainer = Styled.div`
    width: 5rem;
    margin: 12px 0;
`;

export const RoundProgressbarTitle = Styled.h1`
    margin: 0 0 6px 0;
    font-size: 16px;
    text-align: center;
    `;

export const ProgressBar = Styled(CircularProgressbar)`
    width: 5rem;
`;

export const RoundProgressbarValue = Styled.p`
    margin: 2px 0 0 0;
    text-align: center;
    font-size: 13px;
`;
