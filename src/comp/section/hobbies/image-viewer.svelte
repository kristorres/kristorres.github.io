<script>
    export let close
    export let images
    export let index

    import {
        Button,
        Flex,
        Grid,
        Paper,
        Screen,
        Text,
        Titlebar,
    } from "@axel669/zephyr"

    import Icon from "$comp/icon.svelte"
    import ImageLoader from "$comp/image-loader.svelte"

    const header = [
        "[flex]",
        "[fl.main center]",
        "[over.x auto]",
        "[no-select]",
        "[w 100%]",
        "[h 100%]",
    ].join(" ")

    const imageCount = images.length

    let scrollView = null

    const goToPreviousImage = () => {
        index = (index === 0)
            ? imageCount - 1
            : index - 1

        scrollView.scrollLeft = 0
    }

    const goToNextImage = () => {
        index = (index === imageCount - 1)
            ? 0
            : index + 1

        scrollView.scrollLeft = 0
    }

    $: currentImage = images[index] ?? null

    $: title = (currentImage === null)
        ? "Image Viewer"
        : `${currentImage.name} (${index + 1}/${imageCount})`
</script>

<Screen width="100%">
    <Paper card square l-main="center" l-cross="center">
        <Titlebar
            gr.cols="max-content minmax(0px, 1fr) max-content"
            slot="header"
        >
            <div ws-x={header} bind:this={scrollView} slot="title">
                <Text title t.wt="700" t.ws="nowrap">
                    {title}
                </Text>
            </div>

            <Button compact ground m="4px" on:click={close} slot="action">
                <Icon name="x" t.sz="20px" />
            </Button>
        </Titlebar>

        {#if currentImage === null}
            <Text>No images available.</Text>
        {:else}
            {#key index}
                <ImageLoader
                    url={currentImage.url}
                    alt={currentImage.description}
                    w.max="100%"
                    h.max="100%"
                />
            {/key}
        {/if}

        <Grid cols="1fr 1fr" slot="footer">
            <Button
                ground
                color="@primary"
                t.sz="@text-size-normal"
                on:click={goToPreviousImage}
                disabled={imageCount < 2}
            >
                <Flex direction="row" p="0px">
                    <Icon name="player-skip-back-filled" />
                    PREVIOUS
                </Flex>
            </Button>
            <Button
                ground
                color="@primary"
                t.sz="@text-size-normal"
                on:click={goToNextImage}
                disabled={imageCount < 2}
            >
                <Flex direction="row" p="0px">
                    NEXT
                    <Icon name="player-skip-forward-filled" />
                </Flex>
            </Button>
        </Grid>
    </Paper>
</Screen>
