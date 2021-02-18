import React from "react";

import Section from "../Section.js";
import {projects} from "../../../../data/profile.json";

const gridTemplateAreas = (props) => {
    return (props.imagePosition === "left")
        ? `"image image image image image info info info info info info info"`
        : `"info info info info info info info image image image image image"`;
};

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
        "image image image image image image image image image image image image"
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

const ScreenshotView = styled.div`
    grid-area: image;
    justify-self: center;
    padding: 32px 16px;
`;

const InfoView = styled.div`
    grid-area: info;
    justify-self: start;
    padding: 16px;
`;

const Screenshot = styled.img`
    max-width: 100%;
    max-height: 600px;
`;

const Headline = styled.h3`
    font-family: Oswald, HelveticaNeue-CondensedBold, sans-serif;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0.25px;
    color: #1A64D7;
    margin: 0 0 1em;
`;

const Subheadline = styled.h4`
    font-family: Oswald, HelveticaNeue-CondensedBold, sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0;
    color: #1A64D7;
    margin-bottom: 0.67em;
`;

const Paragraph = styled.p`
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.5;
    color: black;
`;

const Link = styled.a`
    display: inline-block;
    background-color: black;
    border-radius: 8px;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-decoration: none !important;
    color: white !important;
    padding: 8px 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25), 0 8px 24px 0 rgba(0, 0, 0, 0.25);
    margin: 24px 0;
    transition-duration: 0.25s;
    &:hover {
        box-shadow: none;
    }
`;

function ProjectView({project, imagePosition}) {
    const screenshot = (project.url === undefined)
        ? <Screenshot src={project.screenshotURL}/>
        : (
            <a href={project.url}>
                <Screenshot src={project.screenshotURL}/>
            </a>
        );
    return (
        <ProjectContainer imagePosition={imagePosition}>
            <ScreenshotView>
                {screenshot}
            </ScreenshotView>
            <InfoView>
                <Headline>{project.name}</Headline>
                <Paragraph>{project.summary}</Paragraph>
                <Subheadline>My Role:</Subheadline>
                <Paragraph>{project.role}</Paragraph>
                <Subheadline>Technologies:</Subheadline>
                <Paragraph>{project.technologies.join(", ")}</Paragraph>
                <Link href={project.repositoryURL}>GitHub</Link>
            </InfoView>
        </ProjectContainer>
    );
}

function ProjectsSection() {
    const projectViews = projects.map(
        (project, index) => {
            const key = index.toString();
            const imagePosition = (index % 2 === 0) ? "left" : "right";
            return (
                <ProjectView
                    key={key}
                    project={project}
                    imagePosition={imagePosition}
                />
            );
        }
    );
    return (
        <Section title="Projects">
            {projectViews}
        </Section>
    );
}

export default ProjectsSection;
