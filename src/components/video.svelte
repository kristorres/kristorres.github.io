<script>
    export let name;
    export let url;

    const videoFeatures = [
        "accelerometer",
        "autoplay",
        "encrypted-media",
        "gyroscope",
        "picture-in-picture"
    ];
</script>

<style>
    .video-container {
        position: relative;
        overflow: hidden;
        max-width: 100%;
        height: 0;
        padding-bottom: 56.25%;
    }
    .video-container > .video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<div class="video-container">
    <iframe
        class="video"
        src="{url}"
        title="{name}"
        frameborder="0"
        allow="{videoFeatures.join("; ")}"
        allowfullscreen
    >
    </iframe>
</div>
