import InfoSectionReasons from './Reasons/Reasons.component';

import {
    InfoSectionContainer,
    InfoSectionInnerContainer,
} from './InfoSection.styles';

//TODO Add content
const InfoSection = () => {
    return (
        <InfoSectionContainer id='Info'>
            <InfoSectionInnerContainer>
                <InfoSectionReasons />
            </InfoSectionInnerContainer>
        </InfoSectionContainer>
    );
};

export default InfoSection;
