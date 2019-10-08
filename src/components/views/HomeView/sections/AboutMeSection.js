import React from "react";

import Section from "../Section.js";

const styles = {
    paragraph: {
        fontSize: 20,
        lineHeight: "2rem",
        color: "black"
    }
};

function AboutMeSection() {
    return (
        <Section title="About Me">
            <p className="mdc-typography--body1" style={styles.paragraph}>
                <b>Hello, world!</b> I am currently an app developer on the
                Internal App team at Skechers. I focus on building internal apps
                for sales reps and key people in Customer Service. My goal is to
                be a full-time iOS developer and/or work at Apple!
            </p>
        </Section>
    );
}

export default AboutMeSection;
