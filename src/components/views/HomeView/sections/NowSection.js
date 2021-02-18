import React from "react";

import Section from "../Section.js";
import {jobs} from "../../../../data/profile.json";

const gridTemplateAreas = (props) => {
    return (props.logoPosition === "left")
        ? `"logo logo logo logo logo info info info info info info info"`
        : `"info info info info info info info logo logo logo logo logo"`;
};

const JobContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
        "logo logo logo logo logo logo logo logo logo logo logo logo"
        "info info info info info info info info info info info info"
    ;
    grid-gap: 16px;
    align-items: center;
    max-width: 1200px;
    margin: 48px auto;
    @media (min-width: 960px) {
        grid-template-areas: ${gridTemplateAreas};
    }
`;

const LogoView = styled.div`
    grid-area: logo;
    justify-self: center;
    padding: 32px 16px;
`;

const InfoView = styled.div`
    grid-area: info;
    justify-self: start;
    padding: 16px;
`;

const Logo = styled.img`
    max-width: 100%;
`;

const Headline = styled.h3`
    font-family: Oswald, HelveticaNeue-CondensedBold, sans-serif;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0.25px;
    color: #1A64D7;
    margin: 0 0 1em;
`;

const Paragraph = styled.p`
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.5;
    color: black;
`;

function JobView({job, logoPosition}) {
    return (
        <JobContainer logoPosition={logoPosition}>
            <LogoView>
                <a href={job.websiteURL}>
                    <Logo src={job.logoURL}/>
                </a>
            </LogoView>
            <InfoView>
                <Headline>{job.company}</Headline>
                <Paragraph>{job.summary}</Paragraph>
            </InfoView>
        </JobContainer>
    );
}

function NowSection() {
    const jobViews = jobs.map(
        (job, index) => {
            const key = index.toString();
            const logoPosition = (index % 2 === 0) ? "left" : "right";
            return <JobView key={key} job={job} logoPosition={logoPosition}/>;
        }
    );
    return (
        <Section title="Now">
            {jobViews}
        </Section>
    );
}

export default NowSection;
