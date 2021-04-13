import Styled from 'styled-components';

export const NewMenuWrapper = Styled.div`
    position: relative;
`;

export const NewMenuContentWrapper = Styled.div`

    @media screen and (min-width: 1024px) {
        width: calc(100% - 20rem);
        margin: 0 auto;
    }
`;

export const NewMenuTitle = Styled.h1`
    font-size: 26px;
    margin: 0 0 32px;
    font-family: 'B612', sans-serif;
    color: #006653;
`;

export const NewMenuChartsContainer = Styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (min-width: 1024px) {
        justify-content: space-evenly
    }
`;
