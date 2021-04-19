import { Fragment } from 'react';

import Features from '../../components/Features/Features.component';
import Hero from '../../components/Hero/Hero.component';
import InfoSection from '../../components/InfoSection/InfoSection.component';

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <Features />
            <InfoSection />
        </Fragment>
    );
};

export default Home;
