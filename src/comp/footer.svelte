<script>
    import {Icon, wsx} from "@axel669/zephyr"

    import Link from "./link.svelte"
</script>

<style>
    footer {
        font-size: 12px;
        font-weight: 400;
        font-variant-ligatures: none;
        letter-spacing: 0.4px;
        line-height: 1.25;
        text-align: center;
    }
</style>

<footer use:wsx={{p: "16px"}}>
    <Link url="https://github.com/kristorres/kristorres.github.io">
        <Icon name="code" t-sz="1em" /> with
        <Icon name="heart-filled" t-sz="1em" /> by Kris Torres.
    </Link>
</footer>
