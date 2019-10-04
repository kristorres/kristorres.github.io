import React from "react";

import Section from "../Section.js";
import FlexBox from "../../../FlexBox.js";
import {programmingLanguages} from "../../../../data/profile.json";

const styles = {
    listItem: {
        color: "black"
    }
};

function TechnicalSkillsSection() {
    const listItems = programmingLanguages.map(
        (programmingLanguage, index) => (
            <li
                key={index.toString()}
                className="mdc-typography--body1"
                style={styles.listItem}
            >
                {programmingLanguage}
            </li>
        )
    );
    return (
        <Section title="Technical Skills">
            <FlexBox justifyContent="center" alignItems="center">
                <ul>
                    {listItems}
                </ul>
            </FlexBox>
        </Section>
    );
}

export default TechnicalSkillsSection;
