<script>
    import {Flex} from "@axel669/zephyr"

    import {email, socialMedia} from "$/info.yml"
    import Icon from "$comp/icon.svelte"
    import Link from "$comp/link.svelte"
    import Section from "$comp/section.svelte"

    const siteLinks = Object.entries(socialMedia)
        .map(
            ([site, url]) => ({
                icon: `brand-${site.toLocaleLowerCase("en-US")}`,
                url,
            })
        )
    const contactLinks = [
        ...siteLinks,
        {icon: "mail", url: `mailto:${email}`},
    ]
</script>

<style>
    intro-text {
        display: block;
        font-size: min(5vw, 20px);
        font-weight: 400;
        font-variant-ligatures: none;
        line-height: 1.5;
    }
    bold {
        font-weight: 700;
    }
</style>

<Section title="About Me" contentWidth="720px">
    <intro-text>
        <bold>Hello, world!</bold> I’m a software engineer, K‑pop/J‑pop
        aficionado, and LA Dodgers fan from Carson, CA. I love to build fun apps
        for myself, and I learn a lot from the somewhat addicting experience.
        In my free time, I like to sit back and watch Korean dramas on Netflix.
    </intro-text>

    <Flex direction="row" gap="32px" p="0px">
        {#each contactLinks as link}
            <Link url={link.url}>
                <Icon name={link.icon} t.sz="32px" />
            </Link>
        {/each}
    </Flex>
</Section>
