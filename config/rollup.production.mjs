import terser from "@rollup/plugin-terser"

import config from "./rollup.dev.mjs"

config.output.file = `build/portfolio.min.mjs`
config.plugins.push(terser())

export default config
