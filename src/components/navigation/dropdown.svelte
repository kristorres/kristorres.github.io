<script>
    import {fade} from "svelte/transition";

    import {projects} from "../../data/xp.json";

    const webApps = projects.filter(
        (project) => project.url !== undefined
    );
</script>

<style>
    .dropdown {
        position: absolute;
        top: 60px;
        right: 30px;
        background-color: var(--theme-surface);
        border-radius: 8px;
        width: 300px;
        padding: 16px 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    }
    .group-header {
        background-color: rgba(0, 0, 0, 0.25);
        padding: 8px 16px;
    }
    .group-header > p {
        font-family: var(--font-text);
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: var(--theme-text-on-surface);
        margin: 0;
    }
    .item {
        display: grid;
        grid-template-columns: 48px 1fr;
        grid-auto-rows: 48px;
        grid-column-gap: 16px;
        align-items: center;
        padding: 16px;
        transition: background-color 0.25s;
    }
    .item:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 9999px;
        -webkit-user-select: none;
        user-select: none;
        width: 100%;
        height: 100%;
    }
    .item p {
        font-family: var(--font-text);
        font-size: 20px;
        font-weight: 400;
        font-variant-ligatures: none;
        letter-spacing: 0.5px;
        color: var(--theme-text-on-surface);
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    .material-icons {
        font-size: 32px;
        color: var(--theme-text-on-surface);
    }

    @media (prefers-color-scheme: dark) {
        .group-header {
            background-color: rgba(255, 255, 255, 0.25);
        }
        .item:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        .icon-container {
            background-color: rgba(255, 255, 255, 0.25);
        }
    }
</style>

<div class="dropdown" transition:fade>
    <div class="group-header">
        <p>Web Apps</p>
    </div>
    {#each webApps as app}
        <a href="{app.url}">
            <div class="item">
                <div class="icon-container">
                    <span class="material-icons">{app.dropdownIcon}</span>
                </div>
                <div>
                    <p>{app.name}</p>
                </div>
            </div>
        </a>
    {/each}
</div>
