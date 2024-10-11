<svelte:options immutable />

<script>
    export let title
    export let items

    import Section from "$comp/section.svelte"
    import Card from "./items/card.svelte"

    const imagePosition = (itemIndex) => {
        if (itemIndex % 2 === 0) {
            return "left"
        }

        return "right"
    }
</script>

<Section {title}>
    {#each items as item, index}
        <Card {item} imagePosition={imagePosition(index)} />
    {/each}
</Section>
