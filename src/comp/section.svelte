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
        font-family: var(--font-display);
        font-size: min(15vw, 60px);
        font-weight: 400;
        text-align: center;
    }
</style>

<section use:wsx={{p: "48px 24px"}}>
    <section-title use:wsx={{block: true, c: "&primary", "m-b": "0.75em"}}>
        {title}
    </section-title>

    <section-content use:wsx={wind.content}>
        <slot />
    </section-content>
</section>
