import Styled from 'styled-components';

export const InfoSectionContainer = Styled.div`
    height: 100vh;
    min-height: fit-content;
    background-color: #02A688;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const InfoSectionInnerContainer = Styled.div`
    width: 90%;
    margin: 5rem auto 0;
    text-align: center;
`;
//05f2c7
export const GetStartedContainer = Styled.div`
    margin: 0 auto 0 ;
    width: 90%;

    @media screen and (min-width: 1280px) {
        width: 20rem;
    }
`;

export const GetStarted = Styled.div`
    text-align: center;
    padding: .5rem 1rem;
    border: 2px solid white;
    border-top: 2.5px solid;
    border-left: 2.5px solid;
    border-radius: .2rem;
    height: 5rem;
    margin: 1rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    background-color: #02A688;
    color: #f0f0f0;
    transition: transform .4s ease-out;

    @media screen and (min-width: 1280px) {
        margin: initial;
        &:hover {
            transform: scale(1.05);
        }

`;

export const GetStartedTitle = Styled.p`
    font-size: 24px;
    margin: 0;
`;

export const GetStartedText = Styled.p`
    font-size: 16px;
    margin: 8px 0 0;
`;
