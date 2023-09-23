<script>
    import {
        Button,
        EntryButton,
        Icon,
        Paper,
        Screen,
        Text,
        Titlebar,
        wsx,
    } from "@axel669/zephyr"

    import Footer from "./comp/footer.svelte"
    import Header from "./comp/header.svelte"
    import Menu from "./comp/menu.svelte"
    import AboutMe from "./comp/section/about-me.svelte"
    import Hobbies from "./comp/section/hobbies.svelte"
    import Items from "./comp/section/items.svelte"
    import TypingCarousel from "./comp/typing-carousel.svelte"
    import info from "./info.yml"
    import theme from "./state/theme.mjs"

    const {jobs = [], projects = []} = info

    const wind = {
        background: "block pos[absolute] x[0px] y[0px] w[100%] h[100%]",
    }

    let mousePoint = {x: 0, y: 0}

    $: radialGradientArgs = [
        `600px at ${mousePoint.x}px ${mousePoint.y}px`,
        "#ffffff20",
        "transparent 75%",
    ]
    $: radialGradient = `radial-gradient(${radialGradientArgs.join(", ")})`

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

<style>
    :global([ws-x~="theme[light]"]) {
        --torres-blue: #1a64d7;
        --torres-gold: #ffb500;

        --primary: var(--torres-blue);
        --primary-ripple: #1a64d760;
        --secondary: var(--torres-gold);
        --secondary-ripple: #ffb50060;
        --background: #b3e5fc;
        --background-layer: white;

        --text-dark: #000000c0;
        --text-color-secondary: #00000080;

        --font: Rubik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
        --font-display: "Rubik Glitch", HelveticaNeue-CondensedBold, sans-serif;
    }
    :global([ws-x~="theme[dark]"]) {
        --torres-blue: #8dcbff;
        --torres-gold: #fee283;

        --primary: var(--torres-blue);
        --primary-ripple: #8dcbff60;
        --secondary: var(--torres-gold);
        --secondary-ripple: #fee28360;
        --background: #0b2958;
        --background-layer: #173460;

        --text-light: #ffffffc0;
        --text-color-secondary: #ffffff80;

        --font: Rubik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
        --font-display: "Rubik Glitch", HelveticaNeue-CondensedBold, sans-serif;
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
        background-image: url("/images/bg/einstein-tessellation.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        opacity: 0.125;
    }
</style>

<svelte:body
    use:wsx={{theme: $theme, "@app": true}}
    on:mousemove={moveRadialGradient}
/>

<div ws-x="pos[relative] w[100%] h[100%]">
    <background ws-x={wind.background} />
    <radial-gradient
        ws-x={wind.background}
        style="background: {radialGradient}"
    />
</div>

<Screen width="100%">
    <Paper
        bg-c="#00000000"
        square
        scrollable
        l-gap="0px"
        l-pad="0px"
        l-m="0px auto"
        l-w="min(100%, 1200px)"
    >
        <Titlebar fill color="primary" slot="header">
            <Text title over-x="hidden" slot="title">
                <div>
                    <TypingCarousel />
                </div>
            </Text>

            <EntryButton compact m="4px" component={Menu} slot="menu">
                <Icon name="menu-2" t-sz="20px" />
            </EntryButton>
            <Button
                compact
                bg-c={themeButton.color}
                m="4px"
                on:click={toggleTheme}
                slot="action"
            >
                <Icon name={themeButton.icon} t-sz="20px" />
            </Button>
        </Titlebar>

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
    </Paper>
</Screen>
