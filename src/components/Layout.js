import React from "react";

import FlexBox from "./FlexBox.js";
import Footer from "./Footer.js";
import HelloWorld from "./HelloWorld.js";
import NavigationBar from "./NavigationBar.js";

function Layout() {
    return (
        <FlexBox style={{minHeight: "100vh"}}>
            <NavigationBar/>
            <HelloWorld/>
            <Footer/>
        </FlexBox>
    );
}

export default Layout;
