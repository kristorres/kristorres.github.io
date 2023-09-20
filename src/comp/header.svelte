<script>
    import {Flex} from "@axel669/zephyr"

    const wind = {
        header: [
            "&header-font['American_Captain']",
            "&profile-border-width[8px]",
            "flex",
            "fl-center",
            "gap[48px]",
            "p[48px_24px]",
        ].join(" "),
        avatar: [
            "block",
            "pos[relative]",
            "bg-c[&background-layer]",
            "b-w[&profile-border-width]",
            "b-s[solid]",
            "b-c[#ffffff80]",
            "r[50%]",
            "over[hidden]",
            "w[min(100%,_250px)]",
        ].join(" "),
    }

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

    avatar {
        aspect-ratio: 1;
        transition: 0.25s;
    }
    avatar:hover {
        box-shadow: 0px 0px 1px var(--profile-border-width) #ffffff40, 0px 0px 1px calc(var(--profile-border-width) * 2) #ffffff20;
    }

    name {
        font-family: var(--header-font);
        font-size: min(30vw, 120px);
        font-weight: 400;
        line-height: 1;
        text-align: center;
        text-transform: uppercase;
    }
    job {
        font-size: min(6vw, 24px);
        font-weight: 700;
        font-variant-ligatures: none;
        text-align: center;
        text-transform: uppercase;
    }
</style>

<header ws-x={wind.header}>
    <avatar ws-x={wind.avatar}>
        <img
            ws-x="pos[absolute] x[0px] y[0px] r[50%] w[100%]"
            src="/images/profile.jpg"
            alt={avatarDescription}
        />
    </avatar>

    <Flex cross="center" gap="0px" pad="0px">
        <name>Kris Torres</name>
        <job>Software Engineer</job>
    </Flex>
</header>
