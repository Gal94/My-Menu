import StyledButton from '../StyledButton/StyledButton.component';

import { HeroBackground, HeroContainer, HeroText } from './Hero.styles';

const Hero = () => {
    return (
        <HeroBackground>
            <HeroContainer>
                <HeroText isColored={true}>
                    EAT HEALTHY<span style={{ color: 'white' }}>.</span>
                </HeroText>
                <HeroText>
                    EAT STRONG<span style={{ color: '#70ff57' }}>.</span>
                </HeroText>
                <StyledButton />
            </HeroContainer>
        </HeroBackground>
    );
};

export default Hero;
