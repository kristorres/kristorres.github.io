import copy from "@axel669/rollup-copy-static"
import $path from "@axel669/rollup-dollar-path"
import html from "@axel669/rollup-html-input"
import commonJS from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import yaml from "@rollup/plugin-yaml"
import del from "rollup-plugin-delete"
import svelte from "rollup-plugin-svelte"

export default {
    input: "src/index.html",
    output: {
        file: `build/app-d${Date.now()}.mjs`,
        format: "esm",
    },
    plugins: [
        html(),
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
        copy("static"),
    ],
}
