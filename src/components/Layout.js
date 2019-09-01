import React from "react";

import FlexBox from "./FlexBox.js";
import Footer from "./Footer.js";
import HomeView from "./HomeView.js";
import NavigationBar from "./NavigationBar.js";

function Layout() {
    return (
        <FlexBox style={{minHeight: "100vh"}}>
            <NavigationBar/>
            <HomeView/>
            <Footer/>
        </FlexBox>
    );
}

export default Layout;
