<script>
    import Section from "../section.svelte";
</script>

<style>
    div {
        max-width: 720px;
        margin: 0 auto;
    }
    .lead {
        font-family: var(--font-text);
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: var(--theme-text-on-background);
    }
</style>

<Section title="About Me">
    <div>
        <p class="lead">
            <b>Hello, world!</b> I am currently an app developer at Skechers.
            I focus on building internal apps for sales reps and key people in
            customer service. My goal is to be a full-time iOS developer and/or
            work at Apple!
        </p>
    </div>
</Section>
