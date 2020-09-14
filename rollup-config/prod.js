import path from "path";

import alias from "@axel669/rollup-plugin-path-alias";
import babel from "@rollup/plugin-babel";
import commonJS from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import {terser} from "rollup-plugin-terser";

export default {
    input: "./src/main.js",
    output: {
        file: "./build/prod/main.min.js",
        format: "iife",
        globals: {
            "prop-types": "PropTypes",
            "react": "React",
            "react-dom": "ReactDOM"
        }
    },
    plugins: [
        replace({
            "process.env.BUILD": JSON.stringify("production"),
            "<PUBLIC DIRECTORY>": "/",
            delimiters: ["", ""]
        }),
        alias({
            root: path.resolve(__dirname, "src")
        }),
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
        resolve(),
        commonJS(),
        terser()
    ],
    external: [
        "prop-types",
        "react",
        "react-dom"
    ]
};
