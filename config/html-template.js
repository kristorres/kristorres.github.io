import {homepage} from "../package.json";

const app = {
    name: "Kris Torres",
    description: "Kris Torres’s website.",
    keywords: [
        "Kris Torres",
        "computer programming",
        "computer programmer",
        "developer",
        "website",
        "portfolio"
    ],
    twitter: {
        handle: "@ohayoukris",
        bannerURL: `${homepage}/images/banners/kt-banner-main.png`,
        description: [
            "Hello, world!",
            "I’m an app developer and I love to build cool things! 👨🏻‍💻🗼😄"
        ].join(" ")
    },
    themeColor: "#1A64D7",
    iconURL: "/images/logos/KT_PRI_LOGO_ON_BLU.png"
};

const viewportAttributes = [
    "minimum-scale=1",
    "initial-scale=1",
    "width=device-width",
    "shrink-to-fit=no"
];

const Domain = Object.freeze({
    GoogleFonts: "https://fonts.googleapis.com",
    JSDelivr: "https://cdn.jsdelivr.net"
});

const AssetURL = Object.freeze({
    Fonts: [
        Domain.GoogleFonts,
        "css?family=Rubik:400,700|Oswald:700|Lilita+One:400"
    ].join("/"),
    Icons: `${Domain.GoogleFonts}/icon?family=Material+Icons`,
    TypedJS: `${Domain.JSDelivr}/npm/typed.js@2`
});

const htmlTemplate = (options) => `<!DOCTYPE html>

<html lang="en">

    <head>

        <!-- Required meta tags -->
        <meta charset="UTF-8"/>
        <meta name="viewport" content="${viewportAttributes.join(", ")}"/>

        <!-- Basic info -->
        <meta name="author" content="Kris Torres"/>
        <meta name="description" content="${app.description}"/>
        <meta name="keywords" content="${app.keywords.join(", ")}"/>

        <!-- Twitter Cards -->
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:creator" content="${app.twitter.handle}"/>
        <meta name="twitter:title" content="${app.name}"/>
        <meta name="twitter:image" content="${app.twitter.bannerURL}"/>
        <meta name="twitter:description" content="${app.twitter.description}"/>

        <!-- Open Graph protocol -->
        <meta property="og:title" content="${app.name}"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="${homepage}"/>
        <meta property="og:image" content="${app.twitter.bannerURL}"/>
        <meta property="og:description" content="${app.twitter.description}"/>

        <!-- Google Chrome for Android toolbar color -->
        <meta name="theme-color" content="${app.themeColor}"/>

        <!-- Web page title -->
        <title>${app.name}</title>

        <!-- Google Fonts CSS -->
        <link rel="stylesheet" type="text/css" href="${AssetURL.Fonts}"/>
        <link rel="stylesheet" type="text/css" href="${AssetURL.Icons}"/>

        <!-- Global styles -->
        <link rel="stylesheet" type="text/css" href="/global.css"/>

        <!-- Icons -->
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" type="image/png" href="${app.iconURL}"/>

        <!-- Typed.js JavaScript -->
        <script crossorigin src="${AssetURL.TypedJS}"></script>

    </head>

    <body>
        <script src="${options.files.js[0].fileName}"></script>
    </body>

</html>
`;

export default htmlTemplate;
