<script>
    import {
        Button,
        EntryButton,
        Flex,
        Paper,
        Text,
        Titlebar,
        wsx,
    } from "@axel669/zephyr"

    import Footer from "./comp/footer.svelte"
    import Header from "./comp/header.svelte"
    import Icon from "./comp/icon.svelte"
    import Menu from "./comp/menu.svelte"
    import Screen from "./comp/screen.svelte"
    import AboutMe from "./comp/section/about-me.svelte"
    import Hobbies from "./comp/section/hobbies.svelte"
    import Items from "./comp/section/items.svelte"
    import TypingCarousel from "./comp/typing-carousel.svelte"
    import info from "./info.yml"
    import theme from "./state/theme.mjs"

    const {jobs = [], projects = []} = info

    const image = [
        `[bg.img url("/images/bg/einstein-tessellation.jpg")]`,
        "[bg.sz cover]",
        "[bg.pos center]",
        "[bg.att fixed]",
        "[o 0.125]",
    ].join(" ")

    let mousePoint = {x: 0, y: 0}

    $: radialGradientArgs = [
        `600px at ${mousePoint.x}px ${mousePoint.y}px`,
        "#ffffff20",
        "transparent 75%",
    ]
    $: radialGradient = `[bg radial-gradient(${radialGradientArgs.join(", ")})]`

    $: darkMode = ($theme === "dark")
    $: themeButton = (darkMode === true)
        ? {color: "#fbd38d", icon: "sun-high"}
        : {color: "#805ad5", icon: "moon"}

    const moveRadialGradient = (event) => {
        mousePoint.x = event.clientX
        mousePoint.y = event.clientY
    }

    const toggleTheme = () => {
        if (darkMode === true) {
            theme.set("light")
            return
        }

        theme.set("dark")
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Rubik:400,700"
    />
    <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Rubik+Glitch:400"
    />
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
    />
</svelte:head>

<style>
    :global([ws-x~="@theme:light"]) {
        --torres-blue: #1a64d7;
        --torres-gold: #ffb500;

        --primary: var(--torres-blue);
        --primary-ripple: #1a64d760;
        --secondary: var(--torres-gold);
        --secondary-ripple: #ffb50060;
        --background: #b3e5fc;
        --background-layer: white;
        --surface: #ffffffc0;

        --font: Rubik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
        --font-display: "Rubik Glitch", HelveticaNeue-CondensedBold, sans-serif;
    }
    :global([ws-x~="@theme:dark"]) {
        --torres-blue: #8dcbff;
        --torres-gold: #fee283;

        --primary: var(--torres-blue);
        --primary-ripple: #8dcbff60;
        --secondary: var(--torres-gold);
        --secondary-ripple: #fee28360;
        --background: #0b2958;
        --background-layer: #173460;
        --surface: #173460c0;

        --font: Rubik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
        --font-display: "Rubik Glitch", HelveticaNeue-CondensedBold, sans-serif;
    }

    :global(ws-titlebar span), :global(ws-chip) {
        -webkit-user-select: none;
        user-select: none;
    }

    :global(p) {
        font-size: min(4vw, 16px);
        font-weight: 400;
        font-variant-ligatures: none;
        line-height: 1.5;
    }

    :global(::selection) {
        background-color: var(--secondary-ripple);
    }

    background {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
    }
    background-layer {
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }
</style>

<svelte:body
    use:wsx={{"@theme": $theme, "@app": true}}
    on:mousemove={moveRadialGradient}
/>

<background>
    <background-layer ws-x={image} />
    <background-layer ws-x={radialGradient} />
</background>

<Screen>
    <Paper bg.c="transparent" sh.box="none" square scrollable l-pad="0px">
        <Titlebar fill color="@primary" slot="header">
            <Text title t.wt="700" over.x="hidden" cur="default" slot="title">
                <div>
                    <TypingCarousel />
                </div>
            </Text>

            <EntryButton compact m="4px" component={Menu} slot="menu">
                <Icon name="menu-2" t.sz="20px" />
            </EntryButton>
            <Button
                compact
                bg.c={themeButton.color}
                m="4px"
                on:click={toggleTheme}
                slot="action"
            >
                <Icon name={themeButton.icon} t.sz="20px" />
            </Button>
        </Titlebar>

        <Flex gap="0px" pad="0px" m="0px auto" w="min(100%, 1200px)">
            <Header />
            <AboutMe />
            {#if jobs.length > 0}
                <Items title="Now" items={jobs} />
            {/if}
            {#if projects.length > 0}
                <Items title="Projects" items={projects} />
            {/if}
            <Hobbies />
            <Footer />
        </Flex>
    </Paper>
</Screen>
