<svelte:options immutable />

<script>
    export let title
    export let contentWidth = "100%"
    export let horizontalPadding = "24px"

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
    section-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 48px;

        margin: 0px auto;
    }
</style>

<section ws-x="[p 48px {horizontalPadding}]" data-title={title}>
    <section-title>
        {title}
    </section-title>

    <section-content ws-x="[w {width}]">
        <slot />
    </section-content>
</section>
