<svelte:options immutable />

<script>
    export let url
    export let alt
    export let aspectRatio = null

    import {wsx} from "@axel669/zephyr"

    import Icon from "#comp/icon"

    const aspectRatioStyle = (aspectRatio === null)
        ? null
        : `aspect-ratio: ${aspectRatio}; object-fit: cover`

    let loaded = false
    let failed = false

    const showImage = () => {
        loaded = true
    }

    const showFallback = () => {
        failed = true
    }
</script>

<style>
    img {
        opacity: 0;
        transition: opacity 1s ease-out;
    }
    img.loaded {
        opacity: 1;
    }
</style>

{#if failed === true}
    <Icon name="photo-off" t.sz="50px" m="4px" />
{:else}
    <img
        use:wsx={$$restProps}
        class:loaded
        style={aspectRatioStyle}
        src={url}
        {alt}
        on:load={showImage}
        on:error={showFallback}
        loading="lazy"
    />
{/if}
