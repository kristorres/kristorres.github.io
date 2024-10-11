const url = "https://kristorres.pages.dev"

const app = {
    name: "Kris Torres",
    description: "Hello, world! I’m a software engineer and I love to build cool things!",
    image: `${url}/images/profile.jpg`,
    url,
}

const htmlTemplate = (options) => `<!DOCTYPE html>
<html>
    <head>
        <title>${app.name}</title>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />

        <meta name="author" content="Kris Torres" />
        <meta name="description" content="${app.description}" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="${app.name}" />
        <meta property="og:description" content="${app.description}" />
        <meta property="og:image" content="${app.image}" />
        <meta property="og:url" content="${app.url}" />

        <meta name="theme-color" content="#1a64d7" />

        <link rel="icon" type="image/png" href="/images/miffy-rounded.png" />
        <link rel="apple-touch-icon" type="image/png" href="/images/miffy.png" />
    </head>
    <body>
        <style ws-root>
            html {
                -webkit-text-size-adjust: none;
            }
            p {
                font-size: min(4vw, 16px);
                font-weight: 400;
                font-variant-ligatures: none;
                line-height: 1.5;
            }

            .ws-style {
                --no-select:
                    "-webkit-user-select: none"
                    "user-select: none"
                ;
            }
        </style>
        <script type="module" src="/${options.files.js[0].fileName}"></script>
    </body>
</html>
`

export default htmlTemplate
