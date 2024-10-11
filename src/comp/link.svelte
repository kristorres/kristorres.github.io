<svelte:options immutable />

<script>
    export let url
</script>

<a
    ws-x="[t.dec none] [c @text-color-normal] [c:hover @primary] [no-select]"
    href={url}
    target="_blank"
>
    <slot />
</a>
