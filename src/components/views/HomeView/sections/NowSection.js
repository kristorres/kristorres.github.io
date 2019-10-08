import React from "react";

import Section from "../Section.js";
import FlexBox from "../../../FlexBox.js";
import {useMedia} from "../../../../hooks.js";
import {jobs} from "../../../../data/profile.json";

const styles = {
    subheadline: {
        margin: "1rem 0"
    },
    subview: {
        padding: 16
    },
    paragraph: {
        color: "black"
    },
    logo: {
        maxWidth: "100%",
        height: "auto"
    }
};

const subheadlineClassName = "mdc-typography--headline4 mdc-theme--primary";

function JobView({job, flexDirection}) {
    return (
        <FlexBox direction={flexDirection}>
            <FlexBox
                level={1}
                justifyContent="center"
                alignItems="center"
                style={styles.subview}
            >
                <a href={job.websiteURL}>
                    <img style={styles.logo} src={job.logoURL}/>
                </a>
            </FlexBox>
            <FlexBox
                level={1}
                justifyContent="center"
                alignItems="flex-start"
                style={styles.subview}
            >
                <h3 className={subheadlineClassName} style={styles.subheadline}>
                    {job.company}
                </h3>
                <p className="mdc-typography--body1" style={styles.paragraph}>
                    {job.summary}
                </p>
            </FlexBox>
        </FlexBox>
    );
}

function NowSection() {
    const windowWidthIsAtLeastSmall = useMedia("(min-width: 600px)");
    const flexDirection = windowWidthIsAtLeastSmall ? "row" : "column";
    const jobViews = jobs.map(
        (job, index) => {
            const key = index.toString();
            return <JobView key={key} job={job} flexDirection={flexDirection}/>;
        }
    );
    return (
        <Section title="Now">
            {jobViews}
        </Section>
    );
}

export default NowSection;
