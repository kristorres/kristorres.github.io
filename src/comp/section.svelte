<script context="module">
    const identifier = (section) => {
        return section
            .trim()
            .replace(/\s+/g, "-")
            .toLocaleLowerCase("en-US")
    }

    export {
        identifier,
    }
</script>

<script>
    export let title
    export let contentWidth = "100%"

    const width = (contentWidth === "100%")
        ? contentWidth
        : `min(100%,_${contentWidth})`
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

<section ws-x="p[48px_24px]" id={identifier(title)}>
    <section-title>
        {title}
    </section-title>

    <section-content ws-x={`flex fl-center gap[48px] m[0px_auto] w[${width}]`}>
        <slot />
    </section-content>
</section>
