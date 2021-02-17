import React from "react";

const Wrapper = styled.nav`
    position: relative;
    background-color: #1A64D7;
    padding: 20px 32px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
`;

const Link = styled.a`
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.15px;
    text-decoration: none !important;
    color: white !important;
`;

function NavigationBar() {
    return (
        <Wrapper>
            <Link href="https://kristorres.github.io">
                kristorres.github.io
            </Link>
        </Wrapper>
    );
}

export default NavigationBar;
