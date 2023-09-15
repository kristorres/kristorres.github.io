<script>
    export let url
    export let description

    import {Flex, HexagonSpinner as Spinner, Icon, wsx} from "@axel669/zephyr"
    import {onMount} from "svelte"

    let success = null

    const loadImage = () => new Promise(
        (resolve, reject) => {
            const image = new Image()
            image.src = url

            image.onload = () => resolve(true)
            image.onerror = () => resolve(false)
        }
    )

    onMount(
        async () => {
            success = await loadImage()
        }
    )
</script>

<Flex main="center" cross="center" pad="0px" w="100%" h="100%">
    {#if success === null}
        <Spinner size="min(100%, 200px)" m="4px" />
    {:else if success === true}
        <img use:wsx={{w: "100%"}} src={url} alt={description} />
    {:else}
        <Icon name="photo-off" t-sz="50px" m="4px" />
    {/if}
</Flex>
