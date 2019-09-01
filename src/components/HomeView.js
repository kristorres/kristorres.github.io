import React from "react";

import FlexBox from "./FlexBox.js";

const styles = {
    header: {
        backgroundColor: "#37474F",
        backgroundImage: "radial-gradient(#37474F 25%, #607D8B)"
    }
};

function Header() {
    return (
        <FlexBox
            component="header"
            level={1}
            justifyContent="center"
            alignItems="center"
            style={styles.header}
        />
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
