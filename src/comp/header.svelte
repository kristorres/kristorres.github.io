<script>
    import {Flex} from "@axel669/zephyr"

    import ImageLoader from "./image-loader.svelte"

    const headerFont = [
        `"Barlow Condensed"`,
        "HelveticaNeue-CondensedBold",
        "sans-serif",
    ].join(", ")
    const header = [
        `[@header-font ${headerFont}]`,
        "[@profile-border-width 8px]",
        "[flex]",
        "[fl-center]",
        "[gap 48px]",
        "[p 48px 24px]",
    ].join(" ")

    const avatarDescription = [
        "Kris Torres smiling and posing with double peace signs in Akihabara,",
        "Tokyo.",
    ].join(" ")
</script>

<svelte:head>
    <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Barlow+Condensed:700"
    />
</svelte:head>

<style>
    avatar {
        display: block;
        position: relative;
        background-color: var(--surface);
        border: var(--profile-border-width) solid #ffffff80;
        border-radius: 50%;
        overflow: hidden;
        aspect-ratio: 1;
        width: min(100%, 250px);
        transition: 0.25s;
    }
    avatar:hover {
        box-shadow: 0px 0px 1px var(--profile-border-width) #ffffff40, 0px 0px 1px calc(var(--profile-border-width) * 2) #ffffff20;
    }

    header-title {
        display: block;
        font-family: var(--header-font);
        font-size: min(30vw, 120px);
        font-weight: 700;
        line-height: 1;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 0.25em;
    }
    header-subtitle {
        display: block;
        font-size: min(6vw, 24px);
        font-weight: 700;
        font-variant-ligatures: none;
        text-align: center;
        text-transform: uppercase;
    }
</style>

<header ws-x={header}>
    <avatar>
        <ImageLoader
            url="/images/profile.jpg"
            alt={avatarDescription}
            pos="absolute"
            x="0px"
            y="0px"
            r="50%"
            w="100%"
        />
    </avatar>

    <Flex cross="center" gap="0px" p="0px">
        <header-title>Kris Torres</header-title>
        <header-subtitle>Software Engineer</header-subtitle>
    </Flex>
</header>
