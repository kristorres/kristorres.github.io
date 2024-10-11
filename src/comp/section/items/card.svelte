<svelte:options immutable />

<script>
    export let item
    export let imagePosition = "left"

    import {Flex, Paper} from "@axel669/zephyr"

    import Icon from "$comp/icon.svelte"
    import ImageLoader from "$comp/image-loader.svelte"
    import Link from "$comp/link.svelte"

    const {name, description, image, url = null, details = null} = item

    const chip = "[$fill] [$color @secondary] [no-select]"

    const links = [
        {icon: "brand-github", url: details?.githubURL ?? null},
        {icon: "external-link", url},
    ].filter(
        (link) => link.url !== null
    )
</script>

<style>
    card-grid {
        display: grid;
        grid-template-areas:
            "image"
            "info"
        ;
        gap: 32px;
    }
    card-grid > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    card-title {
        display: block;
        font-family: var(--font-display);
        font-size: min(9vw, 36px);
        font-weight: 400;
        color: var(--primary);
    }
    p {
        margin: 0px;
    }

    @media (min-width: 800px) {
        card-grid.image-left {
            grid-template-columns: 5fr 7fr;
            grid-template-areas: "image info";
        }
        card-grid.image-right {
            grid-template-columns: 7fr 5fr;
            grid-template-areas: "info image";
        }
    }
</style>

<Paper
    bg.c="@surface"
    b="@layer-border-width solid @text-color-secondary"
    b.c:hover="@primary"
    scrollable={false}
    w="100%"
    l-p="16px"
    tr="0.25s"
>
    <card-grid class="image-{imagePosition}">
        <div style="grid-area: image" ws-x="[fl.cross center]">
            {#if url === null}
                <ImageLoader
                    url={image.url}
                    alt={image.description}
                    w.max="100%"
                    h.max="240px"
                />
            {:else}
                <Link {url}>
                    <ImageLoader
                        url={image.url}
                        alt={image.description}
                        w.max="100%"
                        h.max="240px"
                    />
                </Link>
            {/if}
        </div>

        <div style="grid-area: info" ws-x="[gap min(4vw, 16px)]">
            <card-title>{name}</card-title>
            <p>{description}</p>

            {#if details !== null}
                {#if details.technologies.length > 0}
                    <Flex direction="row" fl.wr="wrap" p="0px">
                        {#each details.technologies as technology}
                            <ws-chip ws-x={chip}>
                                <p ws-x="[cur default]">{technology}</p>
                            </ws-chip>
                        {/each}
                    </Flex>
                {/if}
                {#if links.length > 0}
                    <hr ws-x="[b 0.5px solid @text-color-secondary] [w 100%]" />
                    <Flex direction="row" gap="20px" p="0px">
                        {#each links as link}
                            <Link url={link.url}>
                                <Icon name={link.icon} t.sz="20px" />
                            </Link>
                        {/each}
                    </Flex>
                {/if}
            {/if}
        </div>
    </card-grid>
</Paper>
