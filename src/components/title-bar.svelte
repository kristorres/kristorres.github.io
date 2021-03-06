<script>
    import Dropdown from "./navigation/dropdown.svelte";

    let dropdownIsOpen = false;

    const toggleDropdown = () => {
        dropdownIsOpen = (dropdownIsOpen === false);
    };
</script>

<style>
    nav {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        background-color: var(--torres-blue);
        padding: 8px 24px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
    }
    .brand-container {
        justify-self: start;
    }
    .brand {
        font-family: var(--font-text);
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.15px;
        text-decoration: none;
        color: white;
    }
    .items-container {
        display: grid;
        justify-content: end;
        grid-template-columns: repeat(auto-fit, 48px);
        grid-auto-rows: 48px;
        grid-column-gap: 16px;
    }
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #003BA5;
        border-radius: 9999px;
        -webkit-user-select: none;
        user-select: none;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: filter 0.25s;
    }
    .item:hover {
        filter: brightness(1.25);
    }
    .material-icons {
        font-size: 32px;
        color: white;
    }
    @media (min-width: 360px) {
        nav {
            padding: 8px 32px;
        }
        .brand {
            font-size: 24px;
        }
    }
</style>

<nav>
    <div class="brand-container">
        <a class="brand" href="https://kristorres.github.io">
            kristorres.github.io
        </a>
    </div>
    <div class="items-container">
        <div>
            <div class="item" on:click={toggleDropdown}>
                <span class="material-icons">insert_chart_outlined</span>
            </div>
            {#if dropdownIsOpen}
                <Dropdown/>
            {/if}
        </div>
    </div>
</nav>
