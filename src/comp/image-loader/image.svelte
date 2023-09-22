<script>
    export let url
    export let alt
    export let maxWidth = "100%"
    export let maxHeight = "100%"

    import {Icon} from "@axel669/zephyr"

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
    <Icon name="photo-off" t-sz="50px" m="4px" />
{:else}
    <img
        ws-x={`w-max[${maxWidth}] h-max[${maxHeight}]`}
        class:loaded
        src={url}
        {alt}
        on:load={showImage}
        on:error={showFallback}
        loading="lazy"
    />
{/if}
