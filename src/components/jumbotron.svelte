<script>
    import {onMount} from "svelte";

    onMount(
        () => {
            new Typed(
                ".typing-carousel",
                {
                    strings: [
                        "Hello, world!",
                        "Kumusta, mundo!",
                        "おはよう、世界！",
                        "안녕, 세계!"
                    ],
                    typeSpeed: 250,
                    backSpeed: 125,
                    loop: true,
                    showCursor: false
                }
            );
        }
    );
</script>

<style>
    header {
        background-color: #0C3E36;
        background-image: url("images/banners/slytherin_night_sky.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        padding: 48px 24px;
    }
    header > .avatar {
        display: block;
        border: 8px solid rgba(255, 255, 255, 0.5);
        border-radius: 9999px;
        width: 250px;
        box-shadow: 0 0 1px 8px rgba(255, 255, 255, 0.25), 0 0 1px 16px rgba(255, 255, 255, 0.125);
        margin: 0 auto;
    }
    header > h1 {
        font-family: Oswald, HelveticaNeue-CondensedBold, sans-serif;
        font-size: 96px;
        font-weight: 700;
        letter-spacing: -1.5px;
        line-height: 1.25;
        text-align: center;
        text-transform: uppercase;
        color: white;
    }
    header > h1::selection {
        background-color: white;
        color: #0C3E36;
    }
    header > .typing-carousel {
        background-color: rgba(0, 0, 0, 0.25);
        border: 8px solid rgba(255, 255, 255, 0.5);
        border-radius: 16px;
        font-family: SFMono-Regular, Menlo, ui-monospace, Monaco, Consolas, "Courier New", monospace;
        font-size: 32px;
        color: white;
        white-space: pre;
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-user-select: none;
        user-select: none;
        max-width: 512px;
        height: 1.125em;
        padding: 0.375em;
        margin: 0 auto;
        cursor: default;
    }
</style>

<header>
    <img class="avatar" src="images/profile.jpg" alt="Kris Torres"/>
    <h1>Kris Torres</h1>
    <div class="typing-carousel"></div>
</header>
