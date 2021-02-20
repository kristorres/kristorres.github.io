<script>
    import Section from "../section.svelte";

    const videoFeatures = [
        "accelerometer",
        "autoplay",
        "encrypted-media",
        "gyroscope",
        "picture-in-picture"
    ];
</script>

<style>
    div {
        max-width: 720px;
        margin: 0 auto;
    }
    div > p {
        font-family: Rubik, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: black;
    }
    div > .video-container {
        position: relative;
        overflow: hidden;
        max-width: 100%;
        height: 0;
        padding-bottom: 56.25%;
    }
    div > .video-container > .video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<Section title="Hobbies">
    <div>
        <p>
            I did piano covers of Linkin Park songs. Check out my
            <i>Transformers</i> medley below. Enjoy! 🙂
        </p>
        <div class="video-container">
            <iframe
                class="video"
                src="https://www.youtube.com/embed/tzspB34ui-Y"
                title="LINKIN PARK — What I’ve Done/New Divide/Iridescent [Piano Cover Compilation]"
                frameborder="0"
                allow="{videoFeatures.join("; ")}"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</Section>
