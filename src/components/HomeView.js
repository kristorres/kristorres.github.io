import React, {useState} from "react";

import FlexBox from "./FlexBox.js";
import {useComponentDidMount} from "../hooks.js";
import request from "../request.js";

const URLs = Object.freeze({
    LiturgicalDay: "http://calapi.inadiutorium.cz/api/v0/en/calendars/default"
});

const HeaderPalettes = Object.freeze({
    Green: {primary: "#2E7D32", secondary: "#4CAF50"},
    Violet: {primary: "#4527A0", secondary: "#673AB7"},
    Purple: {primary: "#6A1B9A", secondary: "#9C27B0"},
    Rose: {primary: "#AD1457", secondary: "#E91E63"},
    Red: {primary: "#C62828", secondary: "#F44336"},
    White: {primary: "white", secondary: "yellow"},
    Default: {primary: "#37474F", secondary: "#607D8B"}
});

const getLiturgicalDay = async (date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return await request.get(`${URLs.LiturgicalDay}/${year}/${month}/${day}`);
};

const getHeaderScheme = (liturgicalDay) => {

    const {date, season, season_week, celebrations, weekday} = liturgicalDay;

    const whiteDates = ["02-02", "06-24", "08-06", "09-14", "11-01", "11-09"];
    if (whiteDates.some((whiteDate) => date.endsWith(whiteDate))) {
        return "White";
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

function Avatar({width, dark}) {
    const borderWidth = 8;
    const borderColor = dark ? "rgba(0, 0, 0, 0.5)" : "#F9DF9C";
    const style = {
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: (width + borderWidth * 2) / 2,
        width,
        height: width
    };
    return <img style={style} src="<PUBLIC DIRECTORY>images/profile.jpg"/>;
}

function TypingCarousel({dark}) {
    const borderColor = dark ? "rgba(0, 0, 0, 0.5)" : "#F9DF9C";
    const style = {
        backgroundColor: dark ? "rgba(0, 0, 0, 0.25)" : "#FFFCE5",
        border: `8px solid ${borderColor}`,
        borderRadius: 16,
        fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
        fontSize: 32,
        color: dark ? "white" : "black",
        whiteSpace: "pre",
        overflow: "scroll",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        MsUserSelect: "none",
        userSelect: "none",
        width: 480,
        height: 48,
        padding: 12,
        margin: "0 auto"
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
                const newColorScheme = getHeaderScheme(liturgicalDay);
                setColorScheme(newColorScheme);
            }
            catch (error) {
                console.error(error.message);
            }
        }
    );
    const {primary, secondary} = HeaderPalettes[colorScheme];
    const colorSchemeIsDark = (colorScheme !== "White");
    const styles = {
        root: {
            backgroundColor: primary,
            backgroundImage: `radial-gradient(${primary} 25%, ${secondary})`,
            padding: "48px 24px"
        },
        title: {
            textAlign: "center",
            textTransform: "uppercase",
            color: colorSchemeIsDark ? "white" : "black"
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
            <Avatar width={250} dark={colorSchemeIsDark}/>
            <h1 className="mdc-typography--headline1" style={styles.title}>
                Kris Torres
            </h1>
            <TypingCarousel dark={colorSchemeIsDark}/>
        </FlexBox>
    );
}

function HomeView() {
    return (
        <FlexBox component="main" level={1} className="mdc-theme--background">
            <Header/>
        </FlexBox>
    );
}

export default HomeView;
