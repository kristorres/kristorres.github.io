<script>
    export let title
    export let contentWidth = "100%"

    import {wsx} from "@axel669/zephyr"

    const wind = {
        content: {
            flex: "column",
            "fl-center": true,
            gap: "48px",
            m: "0px auto",
            w: (contentWidth === "100%")
                ? contentWidth
                : `min(100%, ${contentWidth})`,
        },
    }
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

<section use:wsx={{p: "48px 24px"}}>
    <section-title>
        {title}
    </section-title>

    <section-content use:wsx={wind.content}>
        <slot />
    </section-content>
</section>
