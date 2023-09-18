<script>
    import {Grid, Modal, wsx} from "@axel669/zephyr"

    import ImageViewer from "./hobbies/image-viewer.svelte"
    import YouTubeVideo from "./hobbies/youtube-video.svelte"
    import Image from "$/comp/image.svelte"
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
        aspect-ratio: 1;
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
        name="{artist} — {songs.join("/")} [Piano Cover Medley]"
    />

    <p>
        I am also a proud AFOL (<strong>A</strong>dult <strong>F</strong>an
        <strong>O</strong>f <strong>L</strong>ego). Below are a few of my
        favorite sets that I built.
    </p>
    <Grid cols="1fr 1fr 1fr" pad="0px">
        {#each lego.images as image, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <thumbnail use:wsx={{cur: "pointer"}} on:click={showImage(index)}>
                <Image
                    url={thumbnail(image.url)}
                    description="{image.name} (Thumbnail)"
                />
            </thumbnail>
        {/each}
    </Grid>
</Section>
