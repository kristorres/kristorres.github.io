<script>
    import {
        Button,
        Icon,
        Paper,
        Screen,
        Text,
        Titlebar,
        wsx,
    } from "@axel669/zephyr"

    import Header from "./comp/header.svelte"
    import AboutMe from "./comp/section/about-me.svelte"
    import TypingCarousel from "./comp/typing-carousel.svelte"
    import theme from "./state/theme.mjs"

    $: darkMode = ($theme === "dark")
    $: themeButton = (darkMode === true)
        ? {color: "#fbd38d", icon: "sun-high"}
        : {color: "#805ad5", icon: "moon"}

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
</style>

<svelte:body use:wsx={{theme: $theme, "@app": true}} />

<Screen width="100%">
    <Paper
        bg-c="&background"
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
    </Paper>
</Screen>
