<script>
    export let title;
</script>

<style>
    section {
        padding: 96px 48px;
    }
    section > h2 {
        font-family: Oswald, HelveticaNeue-CondensedBold, sans-serif;
        font-size: 60px;
        font-weight: 700;
        letter-spacing: -0.5px;
        text-align: center;
        color: #1A64D7;
    }
</style>

<section>
    <h2>{title}</h2>
    <slot></slot>
</section>
