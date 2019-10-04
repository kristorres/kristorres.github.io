import PropTypes from "prop-types";
import React from "react";

import FlexBox from "../../FlexBox.js";

const styles = {
    root: {
        backgroundColor: "#D1F4FF",
        padding: "96px 48px"
    },
    headline: {
        textAlign: "center"
    }
};

const titleClassName = "mdc-typography--headline2 mdc-theme--primary";

function Section({title, children}) {
    return (
        <FlexBox component="section" level={1} style={styles.root}>
            <h2 className={titleClassName} style={styles.headline}>{title}</h2>
            {children}
        </FlexBox>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Section;
