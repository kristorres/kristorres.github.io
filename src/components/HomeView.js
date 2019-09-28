import React, {useState} from "react";

import FlexBox from "./FlexBox.js";
import {useComponentDidMount, useMedia} from "../hooks.js";
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

const headlineClassName = (level, isPrimary = true) => {
    let className = `mdc-typography--headline${level}`;
    if (isPrimary) {
        className += " mdc-theme--primary";
    }
    return className;
};

function Avatar({width, dark}) {
    const borderWidth = 8;
    const borderColor = dark ? "rgba(255, 255, 255, 0.5)" : "#F9DF9C";
    const style = {
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: (width + borderWidth * 2) / 2,
        width,
        height: width
    };
    return <img style={style} src="<PUBLIC DIRECTORY>images/profile.jpg"/>;
}

function TypingCarousel({dark}) {
    const borderColor = dark ? "rgba(255, 255, 255, 0.5)" : "#F9DF9C";
    const windowWidthIsRegular = useMedia("(min-width: 600px)");
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
        width: windowWidthIsRegular ? 512 : "calc(100% - 48px)",
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
            <h1 className={headlineClassName(1, false)} style={styles.title}>
                Kris Torres
            </h1>
            <TypingCarousel dark={colorSchemeIsDark}/>
        </FlexBox>
    );
}

function AboutMeSection() {
    const styles = {
        root: {
            backgroundColor: "#DBE8FB",
            padding: 48
        },
        headline: {
            textAlign: "center"
        },
        paragraph: {
            fontSize: 20,
            lineHeight: "2rem",
            color: "black"
        }
    };
    return (
        <FlexBox component="article" level={1} style={styles.root}>
            <h2 className={headlineClassName(2)} style={styles.headline}>
                About Me
            </h2>
            <p className="mdc-typography--body1" style={styles.paragraph}>
                <b>Hello, world!</b> I am currently an app developer on the
                Internal App team at Skechers. I focus on building internal apps
                for sales reps and key people in Customer Service. My goal is to
                be a full-time iOS developer and/or work at Apple!
            </p>
        </FlexBox>
    );
}

function NowSection() {
    const windowWidthIsRegular = useMedia("(min-width: 600px)");
    const styles = {
        root: {
            backgroundColor: "#FFFCF4",
            padding: 48
        },
        headline: {
            textAlign: "center"
        },
        subheadline: {
            margin: "1rem 0"
        },
        paragraph: {
            color: "black"
        },
        subview: {
            padding: 16
        },
        logo: {
            width: "100%",
            height: "auto"
        }
    };
    const companyURL = "https://www.skechers.com/assets/images/logo.png";
    return (
        <FlexBox component="section" level={1} style={styles.root}>
            <h2 className={headlineClassName(2)} style={styles.headline}>
                Now
            </h2>
            <FlexBox direction={windowWidthIsRegular ? "row" : "column"}>
                <FlexBox
                    level={1}
                    justifyContent="center"
                    alignItems="center"
                    style={styles.subview}
                >
                    <a href="https://www.skechers.com">
                        <img style={styles.logo} src={companyURL}/>
                    </a>
                </FlexBox>
                <FlexBox
                    level={1}
                    justifyContent="center"
                    alignItems="flex-start"
                    style={styles.subview}
                >
                    <h3
                        className={headlineClassName(4)}
                        style={styles.subheadline}
                    >
                        Skechers USA, Inc.
                    </h3>
                    <p
                        className="mdc-typography--body1"
                        style={styles.paragraph}
                    >
                        Building internal apps that automate workflows for sales
                        reps and key people in Customer Service.
                    </p>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}

function TechnicalSkillsSection() {
    const styles = {
        root: {
            backgroundColor: "#DBE8FB",
            padding: 48
        },
        headline: {
            textAlign: "center"
        },
        listItem: {
            color: "black"
        }
    };
    const listItemClassName = "mdc-typography--body1";
    return (
        <FlexBox component="section" level={1} style={styles.root}>
            <h2 className={headlineClassName(2)} style={styles.headline}>
                Technical Skills
            </h2>
            <FlexBox justifyContent="center" alignItems="center">
                <ul>
                    <li className={listItemClassName} style={styles.listItem}>
                        Swift (iOS)
                    </li>
                    <li className={listItemClassName} style={styles.listItem}>
                        JavaScript (React & React Native)
                    </li>
                    <li className={listItemClassName} style={styles.listItem}>
                        Scala (Play Framework & Akka)
                    </li>
                    <li className={listItemClassName} style={styles.listItem}>
                        C++ (Qt)
                    </li>
                </ul>
            </FlexBox>
        </FlexBox>
    );
}

function HomeView() {
    return (
        <FlexBox component="main" level={1} className="mdc-theme--background">
            <Header/>
            <AboutMeSection/>
            <NowSection/>
            <TechnicalSkillsSection/>
        </FlexBox>
    );
}

export default HomeView;
