import copy from "@axel669/rollup-copy-static"
import $path from "@axel669/rollup-dollar-path"
import commonJS from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import svelte from "rollup-plugin-svelte"

import siteConfig from "./rollup.dev.mjs"

siteConfig.output.file = `build/app-${Date.now()}.min.mjs`
siteConfig.plugins.push(terser())

export default [
    siteConfig,
    {
        input: "404/src/main.mjs",
        output: {
            file: "build/404.min.mjs",
            format: "esm",
        },
        plugins: [
            $path({
                root: "404/src",
                extensions: [".js", ".mjs", ".svelte"],
            }),
            svelte(),
            resolve(),
            commonJS(),
            copy("404/static"),
            terser(),
        ],
    },
]
