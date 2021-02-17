import PropTypes from "prop-types";
import React from "react";

const Wrapper = styled.section`
    padding: 96px 48px;
`;

const Headline = styled.h2`
    font-family: Oswald, HelveticaNeue-CondensedBold, sans-serif;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-align: center;
    color: #1A64D7;
`;

function Section({title, children}) {
    return (
        <Wrapper>
            <Headline>{title}</Headline>
            {children}
        </Wrapper>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Section;
