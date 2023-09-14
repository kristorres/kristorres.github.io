<script>
    export let item
    export let imagePosition = "left"

    import {Chip, Flex, Icon, wsx} from "@axel669/zephyr"

    const {name, description, image, url = null, details = null} = item

    const wind = {
        grid: {
            "bg-c": "&background-layer",
            "b-w": "&layer-border-width",
            "b-s": "solid",
            "b-c": "&text-color-normal",
            r: "4px",
            shdw: "0px 2px 4px var(--shadow-color)",
        },
    }

    const links = [
        {icon: "brand-github", url: details?.githubURL ?? null},
        {icon: "external-link", url},
    ].filter(
        (link) => link.url !== null
    )
</script>

<style>
    grid {
        display: grid;
        grid-template-areas:
            "image"
            "info"
        ;
        align-items: center;
        gap: 32px;
        padding: 16px;
        transition: 0.25s;
    }
    grid:hover {
        border-color: var(--primary);
    }

    image-section {
        grid-area: image;
        justify-self: center;
    }
    img {
        max-width: 100%;
        max-height: 600px;
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

    a {
        color: var(--text-color-normal);
    }
    a:hover {
        color: var(--primary);
    }

    @media (min-width: 960px) {
        grid.image-left {
            grid-template-columns: 5fr 7fr;
            grid-template-areas: "image info";
        }
        grid.image-right {
            grid-template-columns: 7fr 5fr;
            grid-template-areas: "info image";
        }
    }
</style>

<grid use:wsx={wind.grid} class="image-{imagePosition}">
    <image-section>
        {#if url === null}
            <img src={image.url} alt={image.description} />
        {:else}
            <a href={url} target="_blank">
                <img src={image.url} alt={image.description} />
            </a>
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
                    <Flex direction="row" fl-wr="wrap" pad="0px">
                        {#each details.technologies as technology}
                            <Chip fill color="secondary">
                                <p>{technology}</p>
                            </Chip>
                        {/each}
                    </Flex>
                {/if}
                {#if links.length > 0}
                    <Flex direction="row" gap="20px" pad="0px">
                        {#each links as link}
                            <a href={link.url} target="_blank">
                                <Icon name={link.icon} t-sz="20px" />
                            </a>
                        {/each}
                    </Flex>
                {/if}
            {/if}
        </Flex>
    </info-section>
</grid>
