<script>
    import Section from "../section.svelte";
    import Video from "../video.svelte";
</script>

<style>
    div {
        max-width: 720px;
        margin: 0 auto;
    }
    div > p {
        font-family: var(--font-text);
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: var(--theme-text-on-background);
    }
</style>

<Section title="Hobbies">
    <div>
        <p>
            I did piano covers of Linkin Park songs. Check out my
            <i>Transformers</i> medley below. Enjoy! 🙂
        </p>
        <Video
            name="LINKIN PARK — What I’ve Done/New Divide/Iridescent [Piano Cover Compilation]"
            url="https://www.youtube.com/embed/tzspB34ui-Y"
        />
    </div>
</Section>
