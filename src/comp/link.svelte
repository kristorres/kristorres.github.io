<script>
    export let url

    import {wsx} from "@axel669/zephyr"

    const wind = {
        link: {
            "t-deco": "none",
            c: "&text-color-normal",
        },
    }
</script>

<style>
    a:hover {
        color: var(--primary);
    }
</style>

<a use:wsx={wind.link} href={url} target="_blank">
    <slot />
</a>
