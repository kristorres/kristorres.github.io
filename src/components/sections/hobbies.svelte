<script>
    import Section from "../section.svelte";
    import Video from "../video.svelte";

    const legoSets = [
        {
            name: "Lego Architecture — Tokyo",
            image: "lego-architecture-tokyo_21051.jpg"
        },
        {
            name: "Lego Technic — Bugatti Chiron",
            image: "lego-technic-bugatti_chiron_42083.jpg"
        },
        {
            name: "Lego Technic — Lamborghini Sián FKP 37",
            image: "lego-technic-lamborghini_sian_42115.jpg"
        }
    ];
</script>

<style>
    div {
        max-width: 720px;
        margin: 0 auto;
    }
    p {
        font-family: var(--font-text);
        font-size: 16px;
        font-weight: 400;
        font-variant-ligatures: none;
        letter-spacing: 0.25px;
        line-height: 1.5;
        color: var(--theme-text-on-background);
    }
    img {
        width: 100%;
        margin: 24px 0;
    }
    @media (min-width: 420px) {
        p {
            font-size: 20px;
            letter-spacing: 0.5px;
        }
    }
</style>

<Section title="Hobbies">
    <div>
        <p>
            I did piano covers of Linkin Park songs. Check out my
            <i>Transformers</i> medley below. Enjoy! 🙂
        </p>
        <Video
            name="LINKIN PARK — What I’ve Done/New Divide/Iridescent [Piano Cover Compilation]"
            url="https://www.youtube.com/embed/tzspB34ui-Y"
        />
        <p>
            I am also a proud AFOL (<b>A</b>dult <b>F</b>an <b>O</b>f
            <b>L</b>ego). Below are a few of my favorite sets that I built.
        </p>
        {#each legoSets as legoSet}
            <img src="/images/lego/{legoSet.image}" alt="{legoSet.name}"/>
        {/each}
    </div>
</Section>
