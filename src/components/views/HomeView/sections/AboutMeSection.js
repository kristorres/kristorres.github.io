import React from "react";

import Section from "../Section.js";

const Container = styled.div`
    max-width: 720px;
    margin: 0 auto;
`;

const Paragraph = styled.p`
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.5;
    color: black;
`;

function AboutMeSection() {
    return (
        <Section title="About Me">
            <Container>
                <Paragraph>
                    <b>Hello, world!</b> I am currently an app developer at
                    Skechers. I focus on building internal apps for sales reps
                    and key people in customer service. My goal is to be a
                    full-time iOS developer and/or work at Apple!
                </Paragraph>
            </Container>
        </Section>
    );
}

export default AboutMeSection;
