<script>
    import {Flex, Grid, Modal} from "@axel669/zephyr"

    import lego from "$/lego.yml"
    import ImageLoader from "$comp/image-loader.svelte"
    import Section from "$comp/section.svelte"
    import ImageViewer from "./hobbies/image-viewer.svelte"
    import YouTubeVideo from "./hobbies/youtube-video.svelte"

    const artist = "LINKIN PARK"
    const songs = ["What I’ve Done", "New Divide", "Iridescent"]

    const filenameRegex = /^(?<base>[\w\-\/.]+)(?<extension>\.[A-Za-z0-9]+)$/

    let imageViewer = null

    const showImage = (index) => {
        return () => imageViewer.show({images: lego.images, index})
    }

    const thumbnail = (image) => {
        const {groups} = image.match(filenameRegex)
        const {base = null, extension = null} = groups

        if (base === null || extension === null) {
            return null
        }

        return `${base}_thumb${extension}`
    }
</script>

<style>
    p {
        width: 100%;
    }
    bold {
        font-weight: 700;
    }
    italic {
        font-style: italic;
    }

    thumbnail {
        background-color: var(--surface);
        cursor: pointer;
    }
</style>

<Section title="Hobbies" horizontalPadding="4px">
    <Modal component={ImageViewer} bind:this={imageViewer} />

    <Flex main="center" cross="center" gap="48px" p="0px 20px" w="100%">
        <p>
            I did piano covers of Linkin Park songs. Check out my
            <italic>Transformers</italic> medley below. Enjoy! 🙂
        </p>
        <YouTubeVideo
            id="tzspB34ui-Y"
            alt="{artist} — {songs.join("/")} [Piano Cover Medley]"
        />
        <p>
            I am also a proud AFOL (<bold>A</bold>dult <bold>F</bold>an
            <bold>O</bold>f <bold>L</bold>ego). Below are a few of my favorite
            sets that I built.
        </p>
    </Flex>
    <Grid cols="1fr 1fr 1fr" gap="4px" p="0px">
        {#each lego.images as image, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <thumbnail on:click={showImage(index)}>
                <ImageLoader
                    url={thumbnail(image.url)}
                    alt="{image.name} (Thumbnail)"
                    aspectRatio={1}
                    w="100%"
                />
            </thumbnail>
        {/each}
    </Grid>
</Section>
