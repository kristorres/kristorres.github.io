<script>
    import {Flex} from "@axel669/zephyr"

    const avatarDescription = [
        "Kris Torres smiling and posing with double peace signs in Akihabara,",
        "Tokyo.",
    ].join(" ")
</script>

<style>
    @font-face {
        font-family: "American Captain";
        src: url("/fonts/american-captain.otf");
    }

    header {
        --header-font: "American Captain", HelveticaNeue-CondensedBold, sans-serif;
        --profile-border-width: 8px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 48px;

        padding: 48px 24px;
    }

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
        font-family: var(--header-font);
        font-size: min(30vw, 120px);
        font-weight: 400;
        line-height: 1;
        text-align: center;
        text-transform: uppercase;
    }
    header-subtitle {
        font-size: min(6vw, 24px);
        font-weight: 700;
        font-variant-ligatures: none;
        text-align: center;
        text-transform: uppercase;
    }
</style>

<header>
    <avatar>
        <img
            ws-x="pos[absolute] x[0px] y[0px] r[50%] w[100%]"
            src="/images/profile.jpg"
            alt={avatarDescription}
        />
    </avatar>

    <Flex cross="center" gap="0px" pad="0px">
        <header-title>Kris Torres</header-title>
        <header-subtitle>Software Engineer</header-subtitle>
    </Flex>
</header>
