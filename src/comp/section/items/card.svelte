<svelte:options immutable />

<script>
    export let item
    export let imagePosition = "left"

    import {Chip, Flex} from "@axel669/zephyr"

    import Icon from "$/comp/icon.svelte"
    import ImageLoader from "$/comp/image-loader.svelte"
    import Link from "$/comp/link.svelte"

    const {name, description, image, url = null, details = null} = item

    const links = [
        {icon: "brand-github", url: details?.githubURL ?? null},
        {icon: "external-link", url},
    ].filter(
        (link) => link.url !== null
    )
</script>

<style>
    card {
        display: grid;
        grid-template-areas:
            "image"
            "info"
        ;
        align-items: center;
        gap: 32px;

        background-color: var(--surface);
        border: var(--layer-border-width) solid var(--text-color-normal);
        border-radius: 4px;
        box-shadow: 0px 2px 4px var(--shadow-color);
        padding: 16px;
        transition: 0.25s;
    }
    card:hover {
        border-color: var(--primary);
    }

    image-section {
        grid-area: image;
        justify-self: center;
    }

    info-section {
        grid-area: info;
        justify-self: start;
    }
    item-name {
        font-family: var(--font-display);
        font-size: min(9vw, 36px);
        font-weight: 400;
        color: var(--primary);
    }
    subheading {
        font-family: var(--font-display);
        font-size: min(6vw, 24px);
        font-weight: 400;
        color: var(--primary);
    }
    p {
        margin: 0px;
    }

    @media (min-width: 960px) {
        card.image-left {
            grid-template-columns: 5fr 7fr;
            grid-template-areas: "image info";
        }
        card.image-right {
            grid-template-columns: 7fr 5fr;
            grid-template-areas: "info image";
        }
    }
</style>

<card class="image-{imagePosition}">
    <image-section>
        {#if url === null}
            <ImageLoader
                url={image.url}
                alt={image.description}
                maxHeight="600px"
            />
        {:else}
            <Link {url}>
                <ImageLoader
                    url={image.url}
                    alt={image.description}
                    maxHeight="600px"
                />
            </Link>
        {/if}
    </image-section>

    <info-section>
        <Flex gap="min(4vw, 16px)" pad="0px">
            <item-name>{name}</item-name>
            <p>{description}</p>

            {#if details !== null}
                <subheading>My Role:</subheading>
                <p>{details.role}</p>
                {#if details.technologies.length > 0}
                    <subheading>Technologies:</subheading>
                    <Flex direction="row" fl.wr="wrap" pad="0px">
                        {#each details.technologies as technology}
                            <Chip fill color="@secondary" cur="default">
                                <p>{technology}</p>
                            </Chip>
                        {/each}
                    </Flex>
                {/if}
                {#if links.length > 0}
                    <Flex direction="row" gap="20px" pad="0px">
                        {#each links as link}
                            <Link url={link.url}>
                                <Icon name={link.icon} t.sz="20px" />
                            </Link>
                        {/each}
                    </Flex>
                {/if}
            {/if}
        </Flex>
    </info-section>
</card>
