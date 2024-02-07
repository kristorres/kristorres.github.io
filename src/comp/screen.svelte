<svelte:options immutable />

<script context="module">
    const contextStack = Symbol("stack context")
</script>

<script>
    export let width = "min(720px, 100%)"

    import {getContext, setContext} from "svelte"
    import {fly} from "svelte/transition"

    const stack = getContext(contextStack) ?? 0

    const animation = {
        y: window.innerHeight,
        duration: 350,
    }

    setContext(contextStack, stack + 1)
</script>

<ws-screen
    ws-x="[@screen-width {width}] [@stack {stack}] [bg.c transparent]"
    transition:fly={animation}
>
    <slot />
</ws-screen>
