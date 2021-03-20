import { useHistory } from 'react-router';
import InfoSectionReasons from './Reasons/Reasons.component';

import {
    GetStarted,
    GetStartedContainer,
    GetStartedTitle,
    InfoSectionContainer,
    InfoSectionInnerContainer,
    GetStartedText,
} from './InfoSection.styles';

//TODO Add content
const InfoSection = () => {
    const History = useHistory();

    return (
        <InfoSectionContainer id='Info'>
            <InfoSectionInnerContainer>
                <InfoSectionReasons />
            </InfoSectionInnerContainer>
            {/* Tips for Healthy eating */}
            <GetStartedContainer>
                <GetStarted
                    onClick={() => {
                        History.push('/auth');
                    }}
                >
                    <GetStartedTitle>Let's Get Started</GetStartedTitle>
                    <GetStartedText>
                        Click here to start building your menu
                    </GetStartedText>
                </GetStarted>
            </GetStartedContainer>
        </InfoSectionContainer>
    );
};

export default InfoSection;
