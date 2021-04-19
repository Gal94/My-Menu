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

const InfoSection = () => {
    const History = useHistory();

    const redirectTo = () => {
        if (localStorage.getItem('MyMenuToken')) {
            return '/profile';
        }
        return '/register';
    };

    return (
        <InfoSectionContainer id='Info'>
            <InfoSectionInnerContainer>
                <InfoSectionReasons />
            </InfoSectionInnerContainer>
            {/* Tips for Healthy eating */}
            <GetStartedContainer>
                <GetStarted
                    onClick={() => {
                        History.push(redirectTo());
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
