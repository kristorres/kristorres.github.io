import React from "react";

import Header from "./Header.js";
import AboutMeSection from "./sections/AboutMeSection.js";
import NowSection from "./sections/NowSection.js";
import TechnicalSkillsSection from "./sections/TechnicalSkillsSection.js";
import FlexBox from "../../FlexBox.js";

function HomeView() {
    return (
        <FlexBox component="main" level={1} className="mdc-theme--background">
            <Header/>
            <AboutMeSection/>
            <NowSection/>
            <TechnicalSkillsSection/>
        </FlexBox>
    );
}

export default HomeView;
