import React, {useState} from "react";

import FlexBox from "../../FlexBox.js";
import {useComponentDidMount, useMedia} from "../../../hooks.js";
import request from "../../../request.js";

const calendarURL = "http://calapi.inadiutorium.cz/api/v0/en/calendars/default";

const HeaderPalettes = Object.freeze({
    Green: {primary: "#087F23", secondary: "#4CAF50"},
    Violet: {primary: "#320B86", secondary: "#673AB7"},
    Purple: {primary: "#6A0080", secondary: "#9C27B0"},
    Rose: {primary: "#FF80AB", secondary: "#FFB2DD"},
    Red: {primary: "#BA000D", secondary: "#F44336"},
    White: {primary: "white", secondary: "yellow"},
    Default: {primary: "#34515E", secondary: "#607D8B"}
});

const getLiturgicalDay = async (date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return await request.get(`${calendarURL}/${year}/${month}/${day}`);
};

const getColorSchemeForHeader = (liturgicalDay) => {

    const {date, season, season_week, celebrations, weekday} = liturgicalDay;

    const whiteDates = ["02-02", "06-24", "08-06", "09-14", "11-01", "11-09"];
    for (const whiteDate of whiteDates) {
        if (date.endsWith(whiteDate)) {
            return "White";
        }
    }

    const celebrationNames = celebrations.map(
        (celebration) => celebration.title
    );
    if (celebrationNames.includes("Pentecost")) {
        return "Red";
    }
    if (celebrationNames.includes("Trinity Sunday")) {
        return "White";
    }

    if (season === "lent") {
        return (season_week === 6) ? "Red" : "Purple";
    }
    if (season === "advent") {
        return (weekday === "sunday" && season_week === 3) ? "Rose" : "Violet";
    }
    if (season === "christmas" || season === "easter") {
        return "White";
    }

    return "Green";
};

const getBorderColor = (colorScheme) => {
    return (colorScheme === "White") ? "#F9DF9C" : "rgba(255, 255, 255, 0.5)";
};

function Avatar({colorScheme}) {
    const imageWidth = 250;
    const borderWidth = 8;
    const borderColor = getBorderColor(colorScheme);
    const style = {
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: (imageWidth + borderWidth * 2) / 2,
        width: imageWidth,
        height: imageWidth
    };
    return <img style={style} src="<PUBLIC DIRECTORY>images/profile.jpg"/>;
}

function TypingCarousel({colorScheme}) {
    const borderColor = getBorderColor(colorScheme);
    const windowWidthIsAtLeastSmall = useMedia("(min-width: 600px)");
    const colorSchemeIsWhite = (colorScheme === "White");
    const style = {
        backgroundColor: colorSchemeIsWhite ? "#FFFCE5" : "rgba(0, 0, 0, 0.25)",
        border: `8px solid ${borderColor}`,
        borderRadius: 16,
        fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
        fontSize: 32,
        color: colorSchemeIsWhite ? "black" : "white",
        whiteSpace: "pre",
        overflow: "scroll",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        MsUserSelect: "none",
        userSelect: "none",
        width: windowWidthIsAtLeastSmall ? 512 : "calc(100% - 48px)",
        height: 48,
        padding: 12
    };
    useComponentDidMount(
        () => {
            new Typed(
                ".typing-carousel",
                {
                    strings: [
                        "Hello, world!",
                        "Kumusta, mundo!",
                        "おはよう、世界！",
                        "안녕, 세계!"
                    ],
                    typeSpeed: 250,
                    backSpeed: 125,
                    loop: true,
                    showCursor: false
                }
            );
        }
    );
    return (
        <FlexBox
            className="typing-carousel"
            justifyContent="center"
            style={style}
        />
    );
}

function Header() {
    const [colorScheme, setColorScheme] = useState("Default");
    useComponentDidMount(
        async () => {
            try {
                const liturgicalDay = await getLiturgicalDay();
                const newColorScheme = getColorSchemeForHeader(liturgicalDay);
                setColorScheme(newColorScheme);
            }
            catch (error) {
                console.error(error.message);
            }
        }
    );
    const {primary, secondary} = HeaderPalettes[colorScheme];
    const styles = {
        root: {
            backgroundColor: primary,
            backgroundImage: `radial-gradient(${primary} 25%, ${secondary})`,
            padding: "48px 24px"
        },
        title: {
            textAlign: "center",
            textTransform: "uppercase",
            color: (colorScheme === "White") ? "black" : "white"
        }
    };
    return (
        <FlexBox
            component="header"
            level={1}
            justifyContent="center"
            alignItems="center"
            style={styles.root}
        >
            <Avatar colorScheme={colorScheme}/>
            <h1 className="mdc-typography--headline1" style={styles.title}>
                Kris Torres
            </h1>
            <TypingCarousel colorScheme={colorScheme}/>
        </FlexBox>
    );
}

export default Header;
