import React from "react";
import Header from './HomeHeader';
import ThreeColumns from './HomeThreeColumns';
import SimpleSteps from './HomeSimpleSteps';
import AboutUs from './HomeAboutUs';
import WhoWeHelp from './HomeWhoWeHelp';
import Contact from './HomeContact';
import FormValidation from './HomeFormValidation';

function Home() {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Contact/>
        </>
    );
}

export default Home;
