import PropTypes from "prop-types";
import React from "react";

import Section from "../Section.js";

const gridTemplateAreas = (props) => {
    return (props.imagePosition === "left")
        ? `"image image image image image info info info info info info info"`
        : `"info info info info info info info image image image image image"`;
};

const ItemContainer = styled.div`
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

const ImageView = styled.div`
    grid-area: image;
    justify-self: center;
    padding: 32px 16px;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 600px;
`;

const InfoView = styled.div`
    grid-area: info;
    justify-self: start;
    padding: 16px;
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

function Item({info, imagePosition}) {
    const {
        name,
        url,
        imageURL,
        summary,
        role,
        technologies,
        repositoryURL
    } = info;

    const image = (url === undefined)
        ? <Image src={imageURL}/>
        : (
            <a href={url}>
                <Image src={imageURL}/>
            </a>
        );
    
    return (
        <ItemContainer imagePosition={imagePosition}>
            <ImageView>
                {image}
            </ImageView>
            <InfoView>
                <Headline>{name}</Headline>
                <Paragraph>{summary}</Paragraph>
                {role && <React.Fragment>
                    <Subheadline>My Role:</Subheadline>
                    <Paragraph>{role}</Paragraph>
                </React.Fragment>
                }
                {technologies?.length > 0 && <React.Fragment>
                    <Subheadline>Technologies:</Subheadline>
                    <Paragraph>{technologies.join(", ")}</Paragraph>
                </React.Fragment>
                }
                {repositoryURL && <Link href={repositoryURL}>GitHub</Link>}
            </InfoView>
        </ItemContainer>
    );
}

function ExperienceSection({title, items}) {
    const itemViews = items.map(
        (item, index) => {
            const key = index.toString();
            const imagePosition = (index % 2 === 0) ? "left" : "right";
            return (
                <Item key={key} info={item} imagePosition={imagePosition}/>
            );
        }
    );
    return (
        <Section title={title}>
            {itemViews}
        </Section>
    );
}

ExperienceSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string,
            imageURL: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            role: PropTypes.string,
            technologies: PropTypes.arrayOf(PropTypes.string),
            repositoryURL: PropTypes.string
        })
    ).isRequired
};

export default ExperienceSection;
