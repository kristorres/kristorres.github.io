import React from "react";

import FlexBox from "../../FlexBox.js";
import {useComponentDidMount, useMedia} from "../../../hooks.js";

const Domains = Object.freeze({
    Images: "<PUBLIC DIRECTORY>images"
});

const ImageURLs = Object.freeze({
    Avatar: `${Domains.Images}/profile.jpg`,
    Header: `${Domains.Images}/banners/jumbotron.png`
});

const Colors = Object.freeze({
    Border: "rgba(255, 255, 255, 0.5)",
    Text: "white"
});

function Avatar() {
    const imageWidth = 250;
    const borderWidth = 8;
    const style = {
        border: `${borderWidth}px solid ${Colors.Border}`,
        borderRadius: (imageWidth + borderWidth * 2) / 2,
        width: imageWidth,
        height: imageWidth
    };
    return <img style={style} src={ImageURLs.Avatar}/>;
}

function TypingCarousel() {
    const windowWidthIsAtLeastSmall = useMedia("(min-width: 600px)");
    const style = {
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        border: `8px solid ${Colors.Border}`,
        borderRadius: 16,
        fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
        fontSize: 32,
        color: Colors.Text,
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
    const styles = {
        root: {
            backgroundColor: "#0C1C33",
            backgroundImage: `url("${ImageURLs.Header}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "48px 24px"
        },
        title: {
            textAlign: "center",
            textTransform: "uppercase",
            color: Colors.Text
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
            <Avatar/>
            <h1 className="mdc-typography--headline1" style={styles.title}>
                Kris Torres
            </h1>
            <TypingCarousel/>
        </FlexBox>
    );
}

export default Header;
