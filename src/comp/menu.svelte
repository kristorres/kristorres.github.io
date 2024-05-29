<svelte:options immutable />

<script>
    export let close

    import {Button, Drawer, Text, Titlebar} from "@axel669/zephyr"

    import Icon from "./icon.svelte"

    const sections = [
        "About Me",
        "Now",
        "Projects",
        "Hobbies",
    ]

    const goToSection = (title) => {
        return () => {
            document.querySelector(`section[data-title="${title}"]`)
                .scrollIntoView({behavior: "smooth"})

            close()
        }
    }

    export const cancel = () => close()
</script>

<Drawer square scrollable w="min(100vw, 300px)">
    <Titlebar slot="header">
        <Text title t.wt="700" slot="title">
            Sections
        </Text>

        <Button compact m="4px" on:click={close} slot="action">
            <Icon name="x" t.sz="20px" />
        </Button>
    </Titlebar>

    {#each sections as section}
        <Button t.sz="@text-size-normal" on:click={goToSection(section)}>
            {section}
        </Button>
    {/each}
</Drawer>
