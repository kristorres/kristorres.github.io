<script>
    export let close
    export let images
    export let index

    import {
        Button,
        Flex,
        Grid,
        Icon,
        Paper,
        Screen,
        Text,
        Titlebar,
    } from "@axel669/zephyr"

    import Image from "$/comp/image.svelte"

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

<Screen width="100%">
    <Paper card square l-main="center" l-cross="center">
        <Titlebar slot="header">
            <Text title t-ws="nowrap" over-x="auto" slot="title">
                {title}
            </Text>

            <Button compact m="4px" on:click={close} slot="action">
                <Icon name="x" t-sz="20px" />
            </Button>
        </Titlebar>

        {#if currentImage === null}
            <Text>No images available.</Text>
        {:else}
            {#key index}
                <Image
                    url={currentImage.url}
                    description={currentImage.description}
                />
            {/key}
        {/if}

        <Grid cols="1fr 1fr" slot="footer">
            <Button
                color="primary"
                t-sz="&text-size-normal"
                on:click={goToPreviousImage}
                disabled={imageCount < 2}
            >
                <Flex direction="row" pad="0px">
                    <Icon name="player-skip-back-filled" />
                    PREVIOUS
                </Flex>
            </Button>
            <Button
                color="primary"
                t-sz="&text-size-normal"
                on:click={goToNextImage}
                disabled={imageCount < 2}
            >
                <Flex direction="row" pad="0px">
                    NEXT
                    <Icon name="player-skip-forward-filled" />
                </Flex>
            </Button>
        </Grid>
    </Paper>
</Screen>
