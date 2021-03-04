<style>
    footer {
        background-color: var(--theme-surface);
        padding: 20px 24px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    }
    p {
        font-family: var(--font-text);
        font-size: 12px;
        font-weight: 400;
        font-variant-ligatures: none;
        letter-spacing: 0.4px;
        line-height: 1.25;
        color: #757575;
    }
    p > .material-icons {
        font-size: 1rem;
        vertical-align: text-bottom;
    }
    a {
        text-decoration: none;
        color: #007BFF;
    }
    a:hover {
        text-decoration: underline;
        color: #0056B3;
    }
    .pink {
        color: #FF4081;
    }
    @media (min-width: 360px) {
        footer {
            padding: 20px 32px;
        }
    }
    @media (min-width: 420px) {
        p {
            font-size: 16px;
            letter-spacing: 0.25px;
        }
        p > .material-icons {
            font-size: 1.125rem;
        }
    }

    @media (prefers-color-scheme: dark) {
        p {
            color: #A0A0A0;
        }
        a {
            color: white !important;
        }
    }
</style>

<footer>
    <p>
        <span class="material-icons">code</span> with
        <span class="material-icons pink">favorite</span> by
        <a href="mailto:kristorresdayo@gmail.com">Kris Torres</a>. This site is
        a constant work in progress (WIP). Check out the
        <a href="https://github.com/kristorres/kristorres.github.io">repo</a>!
    </p>
</footer>
