<p>
    <img src="/static/images/miffy-rounded.png" width="240" alt="A circular logo featuring Miffy in front of a blue background." />
</p>

kristorres.github.io
====================

<p>
    <img src="https://img.shields.io/badge/Svelte-3-ff3e00?style=for-the-badge&logo=svelte" alt="" />
</p>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="/screenshots/dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="/screenshots/light.png" />
    <img src="/screenshots/light.png" alt="A screenshot of Kris Torres’s personal website." />
</picture>

This repository contains the codebase for my developer portfolio. The website is
built with [Svelte](https://svelte.dev).

Visual Studio Code Extensions
-----------------------------

  * Svelte for VS Code (`svelte.svelte-vscode`)
  * Axel’s Static Server (`axel669.static-serve`)

Building and Running Locally
----------------------------

```sh
git clone https://github.com/kristorres/kristorres.github.io
cd kristorres.github.io
pnpm install
pnpm build/dev
```

Acknowledgements
----------------

Special thanks to [Donovan Hutchinson](https://github.com/donovanh) for his
implementation of
[lazily loading images in Svelte](https://css-tricks.com/lazy-loading-images-in-svelte).
