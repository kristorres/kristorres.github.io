<script>
    export let url
</script>

<style>
    a:hover {
        color: var(--primary);
    }
</style>

<a ws-x="t-deco[none] c[&text-color-normal]" href={url} target="_blank">
    <slot />
</a>
