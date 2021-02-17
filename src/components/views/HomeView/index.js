import React from "react";

import Header from "./Header.js";
import AboutMeSection from "./sections/AboutMeSection.js";
import NowSection from "./sections/NowSection.js";
import TechnicalSkillsSection from "./sections/TechnicalSkillsSection.js";

const Wrapper = styled.main`
    background-color: #D1F4FF;
`;

function HomeView() {
    return (
        <Wrapper>
            <Header/>
            <AboutMeSection/>
            <NowSection/>
            <TechnicalSkillsSection/>
        </Wrapper>
    );
}

export default HomeView;
