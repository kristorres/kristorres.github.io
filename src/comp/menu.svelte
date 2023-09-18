<script>
    export let close

    import {Button, Drawer, Icon, Text, Titlebar} from "@axel669/zephyr"

    import {identifier} from "./section.svelte"

    const sections = [
        "About Me",
        "Now",
        "Projects",
        "Hobbies",
    ]

    const goToSection = (section) => {
        return () => {
            window.location.href = `#${identifier(section)}`
            close()
        }
    }

    export const cancel = () => close()
</script>

<Drawer square scrollable w="min(100vw, 300px)">
    <Titlebar slot="header">
        <Text title slot="title">
            Sections
        </Text>

        <Button compact m="4px" on:click={close} slot="action">
            <Icon name="x" t-sz="20px" />
        </Button>
    </Titlebar>

    {#each sections as section}
        <Button on:click={goToSection(section)}>
            {section}
        </Button>
    {/each}
</Drawer>
