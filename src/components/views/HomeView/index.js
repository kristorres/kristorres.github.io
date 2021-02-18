import React from "react";

import Header from "./Header.js";
import AboutMeSection from "./sections/AboutMeSection.js";
import ExperienceSection from "./sections/ExperienceSection.js";
import TechnicalSkillsSection from "./sections/TechnicalSkillsSection.js";
import {jobs, projects} from "../../../data/profile.json";

const Wrapper = styled.main`
    background-color: #D1F4FF;
`;

function HomeView() {
    return (
        <Wrapper>
            <Header/>
            <AboutMeSection/>
            <ExperienceSection title="Now" items={jobs}/>
            <ExperienceSection title="Projects" items={projects}/>
            <TechnicalSkillsSection/>
        </Wrapper>
    );
}

export default HomeView;
