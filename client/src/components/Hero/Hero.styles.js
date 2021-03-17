import Styled, { css } from 'styled-components';
import backgroundImage from './HeroImage.jpg';

// FIX ON IPHONE 5/SE | IPAD SIZES

export const HeroBackground = Styled.div`
    height: 100vh;
    width: 100%;
    background: url(${backgroundImage}) no-repeat;
    background-size: cover;
    background-position: center;
`;

export const HeroContainer = Styled.div`
    // padding-top: 25rem;
    margin-left: 1rem;
    position: absolute;
    left: 0.5rem;
    bottom: 15rem;
    width: fit-content;

    @media screen and (min-width: 700px) {
        margin-left: 10%;
        position: absolute;
        bottom: 15rem;
    }
`;

const ColoredTitle = css`
    color: #70ff57;
`;

const getFontColor = (props) => {
    if (props.isColored) {
        return ColoredTitle;
    }
};

export const HeroText = Styled.h1`
    margin: 0;
    color: white;
    margin-top: -0.5rem;
    text-shadow: -1px -1px #215218;
    font-size: 2rem;
    ${getFontColor}

    @media screen and (min-width: 1024px) {
        font-size: 5rem;
    }
`;
