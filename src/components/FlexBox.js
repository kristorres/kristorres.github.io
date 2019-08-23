import PropTypes from "prop-types";
import React from "react";

const Flex = Object.freeze({
    flexDirection: [
        "row",
        "column"
    ],
    justifyContent: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch"
    ],
    alignItems: [
        "flex-start",
        "flex-end",
        "center",
        "stretch"
    ]
});

function FlexBox({
    component: Component,
    level,
    direction,
    justifyContent,
    alignItems,
    style,
    ...other
}) {

    const baseStyle = {
        display: "flex"
    };
    if (level !== undefined && level > 0) {
        baseStyle.flex = level;
    }
    const flexValues = {
        flexDirection: direction,
        justifyContent,
        alignItems
    };
    for (const property in flexValues) {
        const flexValue = flexValues[property];
        if (flexValue !== undefined && Flex[property].includes(flexValue)) {
            baseStyle[property] = flexValue;
        }
    }

    return <Component style={{...baseStyle, ...style}} {...other}/>;
}

FlexBox.propTypes = {
    component: PropTypes.string.isRequired,
    level: PropTypes.number,
    direction: PropTypes.oneOf(Flex.flexDirection).isRequired,
    justifyContent: PropTypes.oneOf(Flex.justifyContent),
    alignItems: PropTypes.oneOf(Flex.alignItems),
    style: PropTypes.object.isRequired
};

FlexBox.defaultProps = {
    component: "div",
    direction: "column",
    style: {}
};

export default FlexBox;
