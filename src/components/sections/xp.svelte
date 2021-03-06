<script>
    import Section from "../section.svelte";
    import XPItemCard from "../xp-item-card.svelte";

    export let title;
    export let items;
</script>

<Section {title}>
    {#each items as item, index}
        <XPItemCard
            info={item}
            imagePosition={(index % 2 === 0) ? "left" : "right"}
        />
    {/each}
</Section>
