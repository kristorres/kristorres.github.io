<style>
    footer {
        background-color: var(--theme-surface);
        padding: 20px 32px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    }
    footer > p {
        font-family: var(--font-text);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.25px;
        line-height: 1.25;
        color: #757575;
    }
    footer > p > .material-icons {
        font-size: 1.125rem;
        vertical-align: text-bottom;
    }
    footer a {
        text-decoration: none;
        color: #007BFF;
    }
    footer a:hover {
        text-decoration: underline;
        color: #0056B3;
    }
    .pink {
        color: #FF4081;
    }

    @media (prefers-color-scheme: dark) {
        footer > p {
            color: #A0A0A0;
        }
        footer a {
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
