import Styled, { css } from 'styled-components';
import { ReactComponent as Disease } from './disease.svg';
import { ReactComponent as BloodPressure } from './BloodPressure.svg';
import { ReactComponent as Cholesterol } from './cholesterol.svg';
import { ReactComponent as Energy } from './energy.svg';
import { ReactComponent as Illness } from './illness.svg';
import { ReactComponent as Injury } from './injury.svg';

export const ReasonsDiv = Styled.div`

`;

export const InfoSectionTitle = Styled.h1`

`;

export const InfoSectionDesc = Styled.p`
    font-size: 16px;
`;

export const ReasonsContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Reason = Styled.div`
    width: 31%;
    border: 1px solid #f0f0f0;
    border-radius: .2rem;
    background-color: #d6cd4f;
    margin-top: 1rem;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ReasonText = Styled.p`
    font-size: 14px;
    display: block;
    margin: 0;
    height: fit-content;
    padding: 0 .5rem .5rem;
    margin-bottom: 4px;
`;

export const IconDiv = Styled.div`
    padding-top: 8px;
`;

const IconCss = css`
    height: 50px;
    width: auto;
`;

export const DiseaseIcon = Styled(Disease)`
    ${IconCss};
    //filter: invert(79%) sepia(16%) saturate(1182%) hue-rotate(63deg) brightness(95%) contrast(90%);
`;

export const BloodPressureIcon = Styled(BloodPressure)`
    ${IconCss};
    // filter: invert(79%) sepia(16%) saturate(1182%) hue-rotate(63deg) brightness(95%) contrast(90%);
`;

export const CholesterolIcon = Styled(Cholesterol)`
    ${IconCss};
    //filter: invert(79%) sepia(16%) saturate(1182%) hue-rotate(63deg) brightness(95%) contrast(90%);
`;

export const EnergyIcon = Styled(Energy)`
    ${IconCss};
    //filter: invert(79%) sepia(16%) saturate(1182%) hue-rotate(63deg) brightness(95%) contrast(90%);
`;

export const IllnessIcon = Styled(Illness)`
    ${IconCss};
`;

export const InjuryIcon = Styled(Injury)`
    ${IconCss};
`;
