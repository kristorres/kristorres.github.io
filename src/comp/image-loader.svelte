<script>
    export let url
    export let alt
    export let maxWidth = "100%"
    export let maxHeight = "100%"
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
        <Image {url} {alt} {maxWidth} {maxHeight} {aspectRatio} />
    {/if}
</IntersectionObserver>
