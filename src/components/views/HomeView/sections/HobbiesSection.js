import React from "react";

import Section from "../Section.js";

const videoFeatures = [
    "accelerometer",
    "autoplay",
    "encrypted-media",
    "gyroscope",
    "picture-in-picture"
];

const Container = styled.div`
    max-width: 720px;
    margin: 0 auto;
`;

const Paragraph = styled.p`
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.5;
    color: black;
`;

const VideoContainer = styled.div`
    position: relative;
    overflow: hidden;
    max-width: 100%;
    height: 0;
    padding-bottom: 56.25%;
`;

const Video = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

function HobbiesSection() {
    return (
        <Section title="Hobbies">
            <Container>
                <Paragraph>
                    I did piano covers of Linkin Park songs. Check out
                    my <i>Transformers</i> medley below. Enjoy! 🙂
                </Paragraph>
                <VideoContainer>
                    <Video
                        src="https://www.youtube.com/embed/tzspB34ui-Y"
                        frameBorder="0"
                        allow={videoFeatures.join("; ")}
                        allowFullScreen
                    >
                    </Video>
                </VideoContainer>
            </Container>
        </Section>
    );
}

export default HobbiesSection;
