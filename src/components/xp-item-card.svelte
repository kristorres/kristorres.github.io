<script>
    export let info;
    export let imagePosition = "left";

    const {
        name,
        url,
        imageURL,
        summary,
        role,
        technologies,
        repositoryURL
    } = info;
</script>

<style>
    .card {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-areas:
            "image image image image image image image image image image image image"
            "info info info info info info info info info info info info"
        ;
        grid-gap: 16px;
        align-items: center;
        border: 4px solid #1A64D7;
        border-radius: 16px;
        max-width: 1200px;
        padding: 16px;
        margin: 48px auto;
        transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out;
    }
    .card:hover {
        background-color: #FFFFB2;
        border-color: #FFB500;
    }
    .card > .image-container {
        grid-area: image;
        justify-self: center;
        padding: 32px 16px;
    }
    .card > .image-container img {
        max-width: 100%;
        max-height: 600px;
    }
    .card > .info-container {
        grid-area: info;
        justify-self: start;
        padding: 16px;
    }
    .card > .info-container > h3 {
        font-family: Oswald, HelveticaNeue-CondensedBold, sans-serif;
        font-size: 36px;
        font-weight: 700;
        letter-spacing: 0.25px;
        color: #1A64D7;
        margin: 0 0 1em;
    }
    .card > .info-container > h4 {
        font-family: Oswald, HelveticaNeue-CondensedBold, sans-serif;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0;
        color: #1A64D7;
        margin-bottom: 0.67em;
    }
    .card > .info-container > p {
        font-family: Rubik, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: black;
    }
    .card > .info-container > .button {
        display: inline-block;
        background-color: #343A40;
        border-radius: 8px;
        font-family: Rubik, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-decoration: none;
        color: white;
        -webkit-user-select: none;
        user-select: none;
        padding: 8px 16px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
        margin: 24px 0;
        transition: box-shadow 0.25s ease-in-out;
    }
    .card > .info-container > .button:hover {
        box-shadow: none;
    }
    @media (min-width: 960px) {
        .card.image-left {
            grid-template-areas:
                "image image image image image info info info info info info info"
            ;
        }
        .card.image-right {
            grid-template-areas:
                "info info info info info info info image image image image image"
            ;
        }
    }
</style>

<div class="card image-{imagePosition}">
    <div class="image-container">
        {#if url === undefined}
            <img src={imageURL} alt={name}/>
        {:else}
            <a href={url}>
                <img src={imageURL} alt={name}/>
            </a>
        {/if}
    </div>
    <div class="info-container">
        <h3>{name}</h3>
        <p>{summary}</p>
        {#if role !== undefined}
            <h4>My Role:</h4>
            <p>{role}</p>
        {/if}
        {#if technologies?.length > 0}
            <h4>Technologies:</h4>
            <p>{technologies.join(" • ")}</p>
        {/if}
        {#if repositoryURL !== undefined}
            <a class="button" href={repositoryURL}>Go to Source Code</a>
        {/if}
    </div>
</div>
