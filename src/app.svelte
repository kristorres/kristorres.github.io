<script>
    import {wsx} from "@axel669/zephyr"
</script>

<style>
    :global([ws-x~="theme[light]"]) {
        --torres-blue: #1a64d7;
        --torres-gold: #ffb500;

        --primary: var(--torres-blue);
        --primary-ripple: #1a64d760;
        --secondary: var(--torres-gold);
        --secondary-ripple: #ffb50060;
        --background: #b3e5fc;
        --background-layer: white;

        --text-dark: #000000c0;
        --text-color-secondary: #00000080;

        --font: Rubik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    }
    :global([ws-x~="theme[dark]"]) {
        --torres-blue: #8dcbff;
        --torres-gold: #fee283;

        --primary: var(--torres-blue);
        --primary-ripple: #8dcbff60;
        --secondary: var(--torres-gold);
        --secondary-ripple: #fee28360;
        --background: #0b2958;
        --background-layer: #173460;

        --text-light: #ffffffc0;
        --text-color-secondary: #ffffff80;

        --font: Rubik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    }
</style>

<svelte:body use:wsx={{theme: "light", "@app": true}} />
