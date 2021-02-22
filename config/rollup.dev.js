import babel from "@rollup/plugin-babel";
import commonJS from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";
import svelte from "rollup-plugin-svelte";

import htmlTemplate from "./html-template.js";

export default {
    input: "./src/main.js",
    output: {
        file: `./output/app-d${Date.now()}.js`,
        format: "iife"
    },
    plugins: [
        del({
            targets: [
                "./output/app-*.js",
                "./output/index.html"
            ]
        }),
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
        html({
            fileName: "index.html",
            template: htmlTemplate
        })
    ]
};
