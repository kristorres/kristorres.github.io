import React from "react";

function Footer() {
    return (
        <footer className="mdc-theme--surface">
            <p className="mdc-typography--body2">
                <span className="material-icons">code</span>
                {" with "}
                <span className="material-icons pink">favorite</span>
                {" by "}
                <a href="mailto:kristorresdayo@gmail.com">Kris Torres</a>
                {". "}
                {"This site is a constant work in progress (WIP). "}
                {"Check out the "}
                <a href="https://github.com/kristorres/kristorres.github.io">
                    repo
                </a>
                {"!"}
            </p>
        </footer>
    );
}

export default Footer;
