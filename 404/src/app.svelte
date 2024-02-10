<script>
    import store from "@axel669/json-storage"
    import {Paper, wsx} from "@axel669/zephyr"

    const local = store(localStorage)
    const theme = local.theme ?? "dark"

    const wind = Object.freeze({
        fill: "[disp block] [pos absolute] [x 0px] [y 0px] [w 100%] [h 100%]",
    })

    let mousePoint = {x: 0, y: 0}

    $: radialGradientArgs = [
        `600px at ${mousePoint.x}px ${mousePoint.y}px`,
        "#ffffff20",
        "transparent 75%",
    ]
    $: radialGradient = `radial-gradient(${radialGradientArgs.join(", ")})`

    const moveRadialGradient = (event) => {
        mousePoint.x = event.clientX
        mousePoint.y = event.clientY
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:700"
    />
    <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script:400"
    />

    <style>
        @font-face {
            font-family: "American Captain";
            src: url("/fonts/american-captain.otf");
        }

        [ws-x~="@theme:light"] {
            --torres-blue: #1a64d7;

            --primary: var(--torres-blue);
            --primary-ripple: #1a64d760;
            --background: #fff0ff;

            --title-font: "American Captain", HelveticaNeue-CondensedBold, sans-serif;
            --subtitle-font: "Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;

            --title-color: var(--danger);
            --subtitle-color: #121212;
            --link-color: var(--primary);
        }
        [ws-x~="@theme:dark"] {
            --neon-magenta: #fe8fbd;
            --apricot: #fcc89b;

            --background: #160824;

            --title-font: "American Captain", HelveticaNeue-CondensedBold, sans-serif;
            --subtitle-font: "Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;

            --title-color: var(--neon-magenta);
            --subtitle-color: var(--apricot);
            --link-color: white;
        }

        h1 {
            font-family: var(--title-font);
            font-size: 160px;
            font-weight: 400;
            line-height: 1;
            text-align: center;

            color: var(--title-color);
            margin: 0px;
        }
        h2 {
            font-family: var(--subtitle-font);
            font-size: min(10vw, 40px);
            font-weight: 700;
            text-align: center;

            color: var(--subtitle-color);
            margin: 0px;
        }

        a {
            -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted;
            color: var(--link-color);
        }

        background {
            background-image: url("/images/bg/einstein-tessellation.jpg");
            background-size: cover;
            background-position: center;
            background-attachment: fixed;

            opacity: 0.125;
        }

        grid {
            display: grid;
            grid-template-areas:
                "image"
                "info"
            ;
            gap: 64px;

            padding: 16px;
            min-height: 100%;
        }

        image-section {
            grid-area: image;
            display: block;
            align-self: end;
            justify-self: center;
        }
        polaroid {
            display: block;
            background-color: white;
            -webkit-user-select: none;
            user-select: none;
            box-shadow: 0px 4px 8px #00000040;
            padding: 16px;
            transition: 0.25s;
        }
        polaroid:hover {
            transform: scale(1.25);
            box-shadow: 0px 12px 24px #000000c0;
        }
        polaroid-text {
            display: block;

            font-family: "Nanum Pen Script", cursive;
            font-size: min(8vw, 32px);
            font-weight: 400;
            line-height: 1;
            text-align: center;

            color: black;
            margin: 0.25em 0px;
        }

        info-section {
            grid-area: info;
            display: block;
            align-self: start;
        }

        @media (min-width: 975px) {
            grid {
                grid-template-columns: 1fr 1fr;
                grid-template-areas: "info image";
            }
            image-section {
                align-self: center;
            }
            info-section {
                align-self: center;
            }
        }
    </style>
</svelte:head>

<svelte:body
    use:wsx={{"@theme": theme, "@app": true}}
    on:mousemove={moveRadialGradient}
/>

<div ws-x="[pos relative] [w 100%] [h 100%]">
    <background ws-x={wind.fill} />
    <radial-gradient ws-x="{wind.fill} [bg {radialGradient}]" />
</div>

<ws-screen ws-x="[@screen-width 100%] [@stack 0] [bg.c transparent]">
    <Paper bg.c="transparent" sh.box="none" square scrollable l-pad="0px">
        <grid>
            <image-section>
                <polaroid>
                    <img
                        ws-x="[w 100%]"
                        src="https://media.tenor.com/ZjGRkH5Nf1UAAAAC/twice-sana.gif"
                        alt="Missing Sana-chan crying meme"
                    />
                    <polaroid-text>
                        I’m like TT, just like TT…
                    </polaroid-text>
                </polaroid>
            </image-section>

            <info-section>
                <h1>404</h1>
                <h2>
                    <a href="https://www.youtube.com/watch?v=kOHB85vDuow">Fancy</a>
                    a mimosa? Sorry, this page is
                    <a href="https://www.youtube.com/watch?v=XA2YEHn-A8Q">alcohol‑free</a>!
                </h2>
            </info-section>
        </grid>
    </Paper>
</ws-screen>
