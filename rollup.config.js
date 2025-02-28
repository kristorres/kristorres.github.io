import copy from "@axel669/rollup-copy-static"
import commonJS from "@rollup/plugin-commonjs"
import html from "@rollup/plugin-html"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import yaml from "@rollup/plugin-yaml"
import del from "rollup-plugin-delete"
import svelte from "rollup-plugin-svelte"

import htmlTemplate from "./html-template.js"

export default {
    input: "src/main.mjs",
    output: {
        file: "build/app.js",
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        del({
            targets: "build/*",
        }),
        yaml(),
        svelte({
            emitCss: false,
        }),
        resolve({
            browser: true,
        }),
        commonJS(),
        html({
            fileName: "index.html",
            template: htmlTemplate,
        }),
        copy("static"),
        terser(),
    ],
}
