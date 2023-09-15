<script>
    export let id
    export let name
    export let width = "100%"

    import {wsx} from "@axel669/zephyr"

    const wind = {
        container: {
            block: true,
            pos: "relative",
            "bg-c": "&background-layer",
            w: (width === "100%")
                ? width
                : `min(100%, ${width})`,
        },
        video: {
            pos: "absolute",
            x: "0px",
            y: "0px",
            "b-w": "0px",
            w: "100%",
            h: "100%",
        },
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

<youtube-video use:wsx={wind.container}>
    <iframe
        use:wsx={wind.video}
        src="https://www.youtube.com/embed/{encodeURIComponent(id)}?rel=0"
        title={name}
        allow={videoFeatures.join("; ")}
        allowfullscreen
    />
</youtube-video>
