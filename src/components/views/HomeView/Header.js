import React from "react";

import {useComponentDidMount} from "../../../hooks.js";

const Domains = Object.freeze({
    Images: "<PUBLIC DIRECTORY>images"
});

const ImageURLs = Object.freeze({
    Avatar: `${Domains.Images}/profile.jpg`,
    Header: `${Domains.Images}/banners/slytherin_night_sky.jpg`
});

const Colors = Object.freeze({
    Background: "#0C3E36",
    Border: "rgba(255, 255, 255, 0.5)",
    Text: "white"
});

const Wrapper = styled.header`
    background-color: ${Colors.Background};
    background-image: url("${ImageURLs.Header}");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 48px 24px;
`;

const Avatar = styled.img`
    display: block;
    border: 8px solid ${Colors.Border};
    border-radius: 9999px;
    width: 250px;
    box-shadow: 0 0 1px 8px rgba(255, 255, 255, 0.25), 0 0 1px 16px rgba(255, 255, 255, 0.125);
    margin: 0 auto;
`;

const Title = styled.h1`
    font-family: Oswald, HelveticaNeue-CondensedBold, sans-serif;
    font-size: 96px;
    font-weight: 700;
    letter-spacing: -1.5px;
    text-align: center;
    text-transform: uppercase;
    color: ${Colors.Text};
    &::selection {
        background-color: ${Colors.Text};
        color: ${Colors.Background};
    }
`;

const TypingCarousel = styled.div`
    background-color: rgba(0, 0, 0, 0.25);
    border: 8px solid ${Colors.Border};
    border-radius: 16px;
    font-family: SFMono-Regular, Menlo, ui-monospace, Monaco, Consolas, "Courier New", monospace;
    font-size: 32px;
    color: ${Colors.Text};
    white-space: pre;
    overflow: scroll;
    user-select: none;
    max-width: 512px;
    height: 1.125em;
    padding: 0.375em;
    margin: 0 auto;
`;

function Header() {
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
        <Wrapper>
            <Avatar src={ImageURLs.Avatar}/>
            <Title>Kris Torres</Title>
            <TypingCarousel className="typing-carousel"/>
        </Wrapper>
    );
}

export default Header;
