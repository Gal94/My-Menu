import {
    FeaturesContainer,
    FeaturesDesc,
    FeaturesDescContainer,
    FeaturesListContainer,
    FeaturesTitle,
    FeatureText,
    FeatureTitle,
    IconContainer,
    RelaxIcon,
    SingleFeatureContainer,
} from './Features.styles';

const Features = () => {
    return (
        <FeaturesContainer id='Features'>
            <div>
                <FeaturesDescContainer>
                    <FeaturesTitle>Say Hello to a Free Service</FeaturesTitle>
                    <FeaturesDesc>
                        Include whatever you want, the rest is on us.
                    </FeaturesDesc>
                </FeaturesDescContainer>
                <FeaturesListContainer>
                    <SingleFeatureContainer>
                        <IconContainer>
                            <RelaxIcon />
                        </IconContainer>
                        <FeatureTitle>Less work for you</FeatureTitle>
                        <FeatureText>
                            We calculate the nutrition values on your menu and
                            layout a report for you.
                        </FeatureText>
                    </SingleFeatureContainer>
                    <SingleFeatureContainer>
                        <IconContainer>
                            <RelaxIcon />
                        </IconContainer>
                        <FeatureTitle>Super flexible</FeatureTitle>
                        <FeatureText>
                            We support a large variety of food types to create a
                            menu from, up to 10 menus per user.
                        </FeatureText>
                    </SingleFeatureContainer>
                    <SingleFeatureContainer>
                        <IconContainer>
                            <RelaxIcon />
                        </IconContainer>
                        <FeatureTitle>Easy to use</FeatureTitle>
                        <FeatureText>
                            Our system is easy to use, simply log in and get
                            started immediately.
                        </FeatureText>
                    </SingleFeatureContainer>
                </FeaturesListContainer>
            </div>
        </FeaturesContainer>
    );
};

export default Features;
