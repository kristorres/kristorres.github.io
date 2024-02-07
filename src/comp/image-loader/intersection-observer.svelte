<svelte:options immutable />

<script>
    export let once = false

    import {onMount} from "svelte"

    let container = null
    let intersecting = false

    const scrollHandler = () => {
        const boundingClientRectangle = container.getBoundingClientRect()

        intersecting = (
            boundingClientRectangle.left < window.innerWidth
            && boundingClientRectangle.top < window.innerHeight
            && boundingClientRectangle.right > 0
            && boundingClientRectangle.bottom > 0
        )

        if (intersecting === false || once === false) {
            return
        }

        window.removeEventListener("scroll", scrollHandler)
    }

    onMount(
        () => {
            if (typeof IntersectionObserver === "undefined") {
                window.addEventListener("scroll", scrollHandler)
                return () => window.removeEventListener("scroll", scrollHandler)
            }

            const intersectionObserver = new IntersectionObserver(
                (entries) => {
                    intersecting = entries[0].isIntersecting

                    if (intersecting === false || once === false) {
                        return
                    }

                    intersectionObserver.unobserve(container)
                },
                {rootMargin: "0px 0px 0px 0px"}
            )

            intersectionObserver.observe(container)
            return () => intersectionObserver.unobserve(container)
        }
    )
</script>

<style>
    intersection-observer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
    }
</style>

<intersection-observer bind:this={container}>
    <slot {intersecting} />
</intersection-observer>
