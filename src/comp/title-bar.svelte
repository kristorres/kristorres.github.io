<script>
    export let color
    export let fill = false
    export let scrollable = false

    import {wsx} from "@axel669/zephyr"

    const props = {
        ...$$restProps,
    }
    const titleProps = {
        "$color": color,
        "$fill": fill,
        "$title": true,
        "over.x": (scrollable === true) ? "auto" : "hidden",
    }
</script>

<style>
    ws-titlebar {
        -webkit-user-select: none;
        user-select: none;
    }
</style>

<ws-titlebar use:wsx={props}>
    {#if $$slots.title}
        <div use:wsx={titleProps}>
            <slot name="title" />
        </div>
    {/if}

    {#if $$slots.menu}
        <div ws-x="[$menu] [grid] [p 0px]">
            <slot name="menu" />
        </div>
    {/if}
    {#if $$slots.action}
        <div ws-x="[$action] [grid] [p 0px]">
            <slot name="action" />
        </div>
    {/if}
</ws-titlebar>
