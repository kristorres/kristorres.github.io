<script>
    export let id
    export let alt
    export let width = "100%"

    const videoFeatures = [
        "accelerometer",
        "autoplay",
        "clipboard-write",
        "encrypted-media",
        "gyroscope",
        "picture-in-picture",
        "web-share",
    ]
</script>

<style>
    youtube-video {
        display: block;
        position: relative;
        background-color: var(--background-layer);
        aspect-ratio: 16 / 9;
    }
</style>

<youtube-video ws-x="w[{(width === "100%") ? width : `min(100%, ${width})`}]">
    <iframe
        ws-x="pos[absolute] x[0px] y[0px] b-w[0px] w[100%] h[100%]"
        src="https://www.youtube.com/embed/{encodeURIComponent(id)}?rel=0"
        title={alt}
        allow={videoFeatures.join("; ")}
        allowfullscreen
    />
</youtube-video>
