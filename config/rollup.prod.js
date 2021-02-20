import babel from "@rollup/plugin-babel";
import commonJS from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import {terser} from "rollup-plugin-terser";

import appInfo from "./app-info.js";
import {version} from "../package.json";

const {
    name,
    description,
    author,
    url,
    keywords,
    twitter,
    themeColor,
    iconURL
} = appInfo;

const viewportAttributes = [
    "minimum-scale=1",
    "initial-scale=1",
    "width=device-width",
    "shrink-to-fit=no"
];

const Domain = Object.freeze({
    GoogleFonts: "https://fonts.googleapis.com",
    JSDelivr: "https://cdn.jsdelivr.net"
});

const AssetURL = Object.freeze({
    Fonts: `${Domain.GoogleFonts}/css?family=Rubik:400,700|Oswald:700`,
    Icons: `${Domain.GoogleFonts}/icon?family=Material+Icons`,
    TypedJS: `${Domain.JSDelivr}/npm/typed.js@2`
});

const template = (options) => `<!DOCTYPE html>

<html lang="en">

    <head>

        <!-- Required meta tags -->
        <meta charset="UTF-8"/>
        <meta name="viewport" content="${viewportAttributes.join(", ")}"/>

        <!-- Basic info -->
        <meta name="author" content="${author}"/>
        <meta name="description" content="${description}"/>
        <meta name="keywords" content="${keywords.join(", ")}"/>

        <!-- Twitter Cards -->
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:creator" content="${twitter.handle}"/>
        <meta name="twitter:title" content="${name}"/>
        <meta name="twitter:image" content="${twitter.bannerURL}"/>
        <meta name="twitter:description" content="${twitter.description}"/>

        <!-- Open Graph protocol -->
        <meta property="og:title" content="${name}"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="${url}"/>
        <meta property="og:image" content="${twitter.bannerURL}"/>
        <meta property="og:description" content="${description}"/>

        <!-- Google Chrome for Android toolbar color -->
        <meta name="theme-color" content="${themeColor}"/>

        <!-- Web page title -->
        <title>${name}</title>

        <!-- Google Fonts CSS -->
        <link rel="stylesheet" type="text/css" href="${AssetURL.Fonts}"/>
        <link rel="stylesheet" type="text/css" href="${AssetURL.Icons}"/>

        <!-- Global styles -->
        <style>
            body {
                margin: 0;
            }
        </style>

        <!-- Icons -->
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" type="image/png" href="${iconURL}"/>

        <!-- Typed.js JavaScript -->
        <script crossorigin src="${AssetURL.TypedJS}"></script>

    </head>

    <body>
        <script src="${options.files.js[0].fileName}"></script>
    </body>

</html>
`;

export default {
    input: "./src/main.js",
    output: {
        file: `./output/app-v${version}.min.js`,
        format: "iife"
    },
    plugins: [
        babel({
            include: "src/**/*.js",
            babelrc: false,
            plugins: [
                "@babel/plugin-transform-react-jsx",
                "@babel/plugin-proposal-optional-chaining",
                "@babel/plugin-proposal-nullish-coalescing-operator"
            ]
        }),
        json({
            include: "src/**/*.json"
        }),
        svelte({
            emitCss: false
        }),
        resolve(),
        commonJS(),
        terser(),
        html({
            fileName: "index.html",
            template
        })
    ]
};
