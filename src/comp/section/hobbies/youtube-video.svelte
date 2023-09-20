<script>
    export let id
    export let name
    export let width = "100%"

    const wind = {
        video: [
            "block",
            "pos[relative]",
            "bg-c[&background-layer]",
            `w[${(width === "100%") ? width : `min(100%,_${width})`}]`,
        ].join(" "),
    }

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
        aspect-ratio: 16 / 9;
    }
</style>

<youtube-video ws-x={wind.video}>
    <iframe
        ws-x="pos[absolute] x[0px] y[0px] b-w[0px] w[100%] h[100%]"
        src="https://www.youtube.com/embed/{encodeURIComponent(id)}?rel=0"
        title={name}
        allow={videoFeatures.join("; ")}
        allowfullscreen
    />
</youtube-video>
