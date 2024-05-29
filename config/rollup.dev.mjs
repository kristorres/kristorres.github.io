import copy from "@axel669/rollup-copy-static"
import $path from "@axel669/rollup-dollar-path"
import commonJS from "@rollup/plugin-commonjs"
import html from "@rollup/plugin-html"
import resolve from "@rollup/plugin-node-resolve"
import yaml from "@rollup/plugin-yaml"
import del from "rollup-plugin-delete"
import svelte from "rollup-plugin-svelte"

import htmlTemplate from "./html-template.mjs"

export default {
    input: "src/main.mjs",
    output: {
        file: `build/portfolio-d${Date.now()}.mjs`,
        format: "esm",
    },
    plugins: [
        del({
            targets: "build/*",
        }),
        $path({
            root: "src",
            extensions: [".js", ".mjs", ".svelte"],
        }),
        yaml(),
        svelte(),
        resolve(),
        commonJS(),
        html({
            fileName: "index.html",
            template: htmlTemplate,
        }),
        copy("static"),
    ],
}
