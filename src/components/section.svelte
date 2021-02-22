<script>
    export let title;
</script>

<style>
    section {
        padding: 96px 48px;
    }
    section > h2 {
        font-family: var(--font-display);
        font-size: 60px;
        font-weight: 400;
        letter-spacing: -0.5px;
        text-align: center;
        color: var(--theme-primary);
    }
</style>

<section>
    <h2>{title}</h2>
    <slot></slot>
</section>
