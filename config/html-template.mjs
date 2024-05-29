const url = "https://kristorres.pages.dev"

const app = {
    name: "Kris Torres",
    description: "Hello, world! I’m a software engineer and I love to build cool things!",
    twitter: {
        handle: "@ohayoukris",
        image: `${url}/images/profile.jpg`,
    },
}

const htmlTemplate = (options) => `<!DOCTYPE html>
<html>
    <head>
        <title>${app.name}</title>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />

        <meta name="author" content="Kris Torres" />
        <meta name="description" content="${app.description}" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="${app.twitter.handle}" />
        <meta name="twitter:creator" content="${app.twitter.handle}" />
        <meta name="twitter:title" content="${app.name}" />
        <meta name="twitter:description" content="${app.description}" />
        <meta name="twitter:image" content="${app.twitter.image}" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="${app.name}" />
        <meta property="og:description" content="${app.description}" />
        <meta property="og:image" content="${app.twitter.image}" />
        <meta property="og:url" content="${url}" />

        <meta name="theme-color" content="#1a64d7" />

        <link rel="icon" type="image/png" href="/images/miffy-rounded.png" />
        <link rel="apple-touch-icon" type="image/png" href="/images/miffy.png" />
    </head>
    <body>
        <script type="module" src="/${options.files.mjs[0].fileName}"></script>
    </body>
</html>
`

export default htmlTemplate
