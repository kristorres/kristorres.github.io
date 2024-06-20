<script>
    export let close
    export let images
    export let index

    import {Button, Flex, Grid, Paper, Text} from "@axel669/zephyr"

    import Icon from "$/comp/icon.svelte"
    import ImageLoader from "$/comp/image-loader.svelte"
    import Screen from "$/comp/screen.svelte"
    import TitleBar from "$/comp/title-bar.svelte"

    const imageCount = images.length

    const goToPreviousImage = () => {
        if (index === 0) {
            index = imageCount - 1
            return
        }

        index -= 1
    }

    const goToNextImage = () => {
        if (index === imageCount - 1) {
            index = 0
            return
        }

        index += 1
    }

    $: currentImage = images[index] ?? null

    $: title = (currentImage === null)
        ? "Image Viewer"
        : `${currentImage.name} (${index + 1}/${imageCount})`
</script>

<Screen>
    <Paper card square l-main="center" l-cross="center">
        <TitleBar scrollable slot="header">
            <Text title t.wt="700" t.ws="nowrap" slot="title">
                {title}
            </Text>

            <Button compact m="4px" on:click={close} slot="action">
                <Icon name="x" t.sz="20px" />
            </Button>
        </TitleBar>

        {#if currentImage === null}
            <Text>No images available.</Text>
        {:else}
            {#key index}
                <ImageLoader
                    url={currentImage.url}
                    alt={currentImage.description}
                />
            {/key}
        {/if}

        <Grid cols="1fr 1fr" slot="footer">
            <Button
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
