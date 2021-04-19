import Styled from 'styled-components';
import { ReactComponent as Relax } from './relax.svg';
import { ReactComponent as Variety } from './variety.svg';
import { ReactComponent as Easy } from './easy.svg';

export const FeaturesContainer = Styled.div`
    height: 100vh;
    min-height: 50rem;
    background-color: #eee;
    padding-bottom: 3rem;

    @media screen and (min-width: 1280px) {
        padding-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
     }
`;

export const FeaturesDescContainer = Styled.div`
    width: fit-content;
    margin: auto;
    padding-top: 6rem;

    @media screen and (min-width: 1280px) {
        padding-top: 0rem;
    }
`;

export const FeaturesTitle = Styled.h1`
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: #5ea353;

    @media screen and (min-width: 1280px) {
       font-size: 36px; 
    }
`;

export const FeaturesDesc = Styled.p`
    font-size: 18px;
    margin: 4px 0;
    text-align: center;
    color: #7ED971;

    @media screen and (min-width: 1280px) {
        font-size: 24px; 
     }
`;

export const FeaturesListContainer = Styled.div`
@media screen and (min-width: 1280px) {
    display: flex; 
    width: 80%;
    margin: auto;
 }
`;

export const SingleFeatureContainer = Styled.div`
    width: 17rem;
    margin: 1rem auto;
`;

export const IconContainer = Styled.div`
    text-align: center;
    margin-top: 4rem;
`;

export const RelaxIcon = Styled(Relax)`
    height: 50px;
    width: auto;
    filter: invert(79%) sepia(16%) saturate(1182%) hue-rotate(63deg) brightness(95%) contrast(90%);
`;

export const VarietyIcon = Styled(Variety)`
    height: 50px;
    width: auto;
    filter: invert(79%) sepia(16%) saturate(1182%) hue-rotate(63deg) brightness(95%) contrast(90%);
`;

export const EasyIcon = Styled(Easy)`
    height: 50px;
    width: auto;
    filter: invert(79%) sepia(16%) saturate(1182%) hue-rotate(63deg) brightness(95%) contrast(90%);
`;

export const FeatureTitle = Styled.h1`
    text-align: center;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    margin-top: 1rem;
    color: #5ea353;

    @media screen and (min-width: 1280px) {
        font-size: 24px; 
     }
`;

export const FeatureText = Styled.p`
    margin: 0;
    margin-top: 8px;
    font-size: 14px;
    text-align: center;
    line-height: 1.2;
    letter-spacing: 0.5px;
    color: #7ED971;

    @media screen and (min-width: 1280px) {
        font-size: 16px; 
     }
`;
