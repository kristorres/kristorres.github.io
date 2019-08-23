import React from "react";

import FlexBox from "./FlexBox.js";

function HelloWorld() {
    return (
        <FlexBox
            component="main"
            level={1}
            justifyContent="center"
            alignItems="center"
            className="mdc-theme--background hello-world"
        >
            <h1 className="mdc-typography--headline1">Hello, world!</h1>
        </FlexBox>
    );
}

export default HelloWorld;
