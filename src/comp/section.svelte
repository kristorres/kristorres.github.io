<svelte:options immutable />

<script>
    export let title
    export let contentWidth = "100%"

    const width = (contentWidth === "100%")
        ? contentWidth
        : `min(100%, ${contentWidth})`
</script>

<style>
    section-title {
        display: block;

        font-family: var(--font-display);
        font-size: min(15vw, 60px);
        font-weight: 400;
        text-align: center;

        color: var(--primary);
        margin-bottom: 0.75em;
    }
</style>

<section ws-x="[p 48px 24px]" data-title={title}>
    <section-title>
        {title}
    </section-title>

    <section-content
        ws-x="[flex] [fl-center] [gap 48px] [m 0px auto] [w {width}]"
    >
        <slot />
    </section-content>
</section>
