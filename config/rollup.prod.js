import babel from "@rollup/plugin-babel";
import commonJS from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import {terser} from "rollup-plugin-terser";

import htmlTemplate from "./html-template.js";
import {version} from "../package.json";

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
            template: htmlTemplate
        })
    ]
};
