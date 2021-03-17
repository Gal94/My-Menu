import { Fragment } from 'react';

import Features from '../../components/Features/Features.component';
import Hero from '../../components/Hero/Hero.component';
import InfoSection from '../../components/InfoSection/InfoSection.component';

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <InfoSection />
            <Features />
        </Fragment>
    );
};

// GET STARTED - REGISTER/SIGN IN

export default Home;
