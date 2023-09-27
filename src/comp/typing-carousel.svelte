<script>
    import {onMount} from "svelte"
    import Typed from "typed.js"

    onMount(
        () => {
            const typed = new Typed(
                "typing-carousel",
                {
                    strings: [
                        "Hello, world!",
                        "Kumusta, mundo!",
                        "おはよう、世界！",
                        "안녕, 세계!",
                        "Salve mundi!",
                        "Det bedste er ikke for godt!",
                        "Слава Україні!",
                    ],
                    typeSpeed: 100,
                    backSpeed: 50,
                    loop: true,
                }
            )
        }
    )
</script>

<typing-carousel ws-x="t-ws[pre]" />
