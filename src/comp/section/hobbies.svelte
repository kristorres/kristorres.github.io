<script>
    import {Grid, Modal} from "@axel669/zephyr"

    import ImageViewer from "./hobbies/image-viewer.svelte"
    import YouTubeVideo from "./hobbies/youtube-video.svelte"
    import ImageLoader from "$/comp/image-loader.svelte"
    import Section from "$/comp/section.svelte"
    import lego from "$/lego.yml"

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

    thumbnail {
        background-color: var(--surface);
        cursor: pointer;
    }
</style>

<Section title="Hobbies">
    <Modal component={ImageViewer} bind:this={imageViewer} />

    <p>
        I did piano covers of Linkin Park songs. Check out my
        <em>Transformers</em> medley below. Enjoy! 🙂
    </p>
    <YouTubeVideo
        id="tzspB34ui-Y"
        alt="{artist} — {songs.join("/")} [Piano Cover Medley]"
    />

    <p>
        I am also a proud AFOL (<strong>A</strong>dult <strong>F</strong>an
        <strong>O</strong>f <strong>L</strong>ego). Below are a few of my
        favorite sets that I built.
    </p>
    <Grid cols="1fr 1fr 1fr" p="0px">
        {#each lego.images as image, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <thumbnail on:click={showImage(index)}>
                <ImageLoader
                    url={thumbnail(image.url)}
                    alt="{image.name} (Thumbnail)"
                    aspectRatio={1}
                />
            </thumbnail>
        {/each}
    </Grid>
</Section>
