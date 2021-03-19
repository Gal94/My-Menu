import {
    ReasonsDiv,
    InfoSectionDesc,
    InfoSectionTitle,
    ReasonsContainer,
    Reason,
    ReasonText,
    DiseaseIcon,
    BloodPressureIcon,
    CholesterolIcon,
    EnergyIcon,
    IllnessIcon,
    InjuryIcon,
    IconDiv,
} from './Reasons.styles';

const InfoSectionReasons = () => {
    const reasons = {
        disease: {
            text: 'Reduce the risk of some diseases.',
            icon: <DiseaseIcon />,
        },
        bloodPressure: {
            text: 'Reduce high blood pressure',
            icon: <BloodPressureIcon />,
        },
        lowCholesterol: {
            text: 'Lower high cholesterol',
            icon: <CholesterolIcon />,
        },
        energy: {
            text: 'Improve your well-being and energy level',
            icon: <EnergyIcon />,
        },
        illness: {
            text: 'Improve your ability to fight off illness',
            icon: <IllnessIcon />,
        },
        injury: {
            text: 'Improve your ability to recover from injury',
            icon: <InjuryIcon />,
        },
    };

    const reasonsElements = [];

    // loop through reasons object and render each reason icon/text
    for (const key in reasons) {
        reasonsElements.push(
            <Reason>
                <IconDiv>{reasons[key].icon}</IconDiv>
                <ReasonText>{reasons[key].text}</ReasonText>
            </Reason>
        );
    }

    return (
        <ReasonsDiv>
            <InfoSectionTitle>Why It Matters</InfoSectionTitle>
            <InfoSectionDesc>
                Most people know good nutrition and physical activity can help
                maintain a healthy weight. But the benefits of good nutrition go
                beyond weight. Good nutrition can help
            </InfoSectionDesc>
            <ReasonsContainer>{reasonsElements}</ReasonsContainer>
        </ReasonsDiv>
    );
};

export default InfoSectionReasons;
