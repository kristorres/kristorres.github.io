import React from "react";

const itemAlignmentClassName = (value) => {
    const sectionClassName = "mdc-top-app-bar__section";
    return `${sectionClassName} ${sectionClassName}--${value}`;
};

function NavigationBar() {
    return (
        <nav className="mdc-top-app-bar mdc-top-app-bar--fixed-scrolled">
            <div className="mdc-top-app-bar__row">
                <section className={itemAlignmentClassName("align-start")}>
                    <span className="mdc-top-app-bar__title">
                        kristorres.github.io
                    </span>
                </section>
            </div>
        </nav>
    );
}

export default NavigationBar;
