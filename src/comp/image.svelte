<script>
    export let url
    export let description

    import {Flex, HexagonSpinner as Spinner, Icon} from "@axel669/zephyr"
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
        <div ws-x="m[4px]">
            <Spinner size="min(100%, 200px)" />
        </div>
    {:else if success === true}
        <img ws-x="w-max[100%] h-max[100%]" src={url} alt={description} />
    {:else}
        <Icon name="photo-off" t-sz="50px" m="4px" />
    {/if}
</Flex>
