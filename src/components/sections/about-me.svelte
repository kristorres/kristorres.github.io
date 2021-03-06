<script>
    import Section from "../section.svelte";
</script>

<style>
    div {
        max-width: 720px;
        margin: 0 auto;
    }
    .lead {
        font-family: var(--font-text);
        font-size: 20px;
        font-weight: 400;
        font-variant-ligatures: none;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: var(--theme-text-on-background);
    }
    .social-links {
        font-size: 40px;
        text-align: center;
        margin: 48px 0 24px;
    }
    .fa {
        margin: 0 12px;
    }
    .fa-github {
        color: #222222;
    }
    .fa-twitter {
        color: #1DA1F2;
    }
    .fa-linkedin-square {
        color: #0A66C2;
    }
    .fa-envelope {
        color: black;
    }
    @media (min-width: 420px) {
        .lead {
            font-size: 24px;
        }
        .social-links {
            font-size: 48px;
        }
    }

    @media (prefers-color-scheme: dark) {
        .fa {
            color: white;
        }
    }
</style>

<Section title="About Me">
    <div>
        <p class="lead">
            <b>Hello, world!</b> I’m an app developer and K‑pop/J‑pop aficionado
            from Carson, CA. I love to build fun apps for myself, and I learn a
            lot from the somewhat addictive experience. In my free time, I like
            to sit back and watch Korean dramas on Netflix.
        </p>
        <p class="lead">
            My goal is to be a full-time iOS developer and/or work at Apple! 😎
        </p>
        <div class="social-links">
            <a href="https://github.com/kristorres">
                <span class="fa fa-github"></span>
            </a>
            <a href="https://twitter.com/ohayoukris">
                <span class="fa fa-twitter"></span>
            </a>
            <a href="https://www.linkedin.com/in/ohayoukris">
                <span class="fa fa-linkedin-square"></span>
            </a>
            <a href="mailto:kristorresdayo@gmail.com">
                <span class="fa fa-envelope"></span>
            </a>
        </div>
    </div>
</Section>
