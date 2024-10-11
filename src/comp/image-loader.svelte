<svelte:options immutable />

<script>
    export let url
    export let alt
    export let aspectRatio = null

    import {onMount} from "svelte"

    import Image from "./image-loader/image.svelte"
    import IntersectionObserver from "./image-loader/intersection-observer.svelte"

    let nativeLoading = false

    onMount(
        () => {
            if ("loading" in HTMLImageElement.prototype) {
                nativeLoading = true
            }
        }
    )
</script>

<IntersectionObserver once let:intersecting={intersecting}>
    {#if intersecting === true || nativeLoading === true}
        <Image {url} {alt} {...$$restProps} {aspectRatio} />
    {/if}
</IntersectionObserver>
