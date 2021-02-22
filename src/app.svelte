<script>
    import Footer from "./components/footer.svelte";
    import Jumbotron from "./components/jumbotron.svelte";
    import TitleBar from "./components/title-bar.svelte";

    import AboutMeSection from "./components/sections/about-me.svelte";
    import HobbiesSection from "./components/sections/hobbies.svelte";
    import XPSection from "./components/sections/xp.svelte";

    import {jobs, projects} from "./data/xp.json";
</script>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        background-color: #CFD8DC;
        min-height: 100vh;
    }
    .layout > main {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: var(--theme-background);
    }

    @media (prefers-color-scheme: dark) {
        .layout {
            background-color: #263238;
        }
    }
</style>

<root>
    <div class="layout">
        <TitleBar/>
        <main>
            <Jumbotron/>
            <AboutMeSection/>
            {#if jobs.length > 0}
                <XPSection title="Now" items={jobs}/>
            {/if}
            {#if projects.length > 0}
                <XPSection title="Projects" items={projects}/>
            {/if}
            <HobbiesSection/>
        </main>
        <Footer/>
    </div>
</root>
