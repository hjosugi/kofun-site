# kofun-site

Everything about the [Kofun language](https://github.com/hjosugi/kofun) that is
not the language implementation: the official site, the documentation renderer,
the delivery-planning snapshots, and the long-range issue catalogue.

It exists so the language repository can stay a language repository. `kofun`
carries no npm, Next.js, React, Cloudflare, or TypeScript toolchain, and its
`make verify` neither reads nor needs anything here.

## Layout

| Path | What it is |
|---|---|
| `app/` | Next.js App Router: landing page, `/docs` renderer, playground |
| `site/` | build, synchronization, and export scripts with their tests |
| `content/` | documents this repository owns: generated planning snapshots, internal policy, and public narrative guides under `content/docs/` |
| `backlog/` | the 13,500-issue long-range catalogue, 500 per area across 27 areas |
| `scripts/verify_backlog.kofun` | the catalogue's verifier, written in Kofun |
| `kofun/` | submodule: the language repository, source of compiler/specification documents and the browser tour |

## The dependency runs one way

This site reads the language repository and never writes source changes to it.
Compiler and specification documents named in `app/docs/docs-manifest.ts` are
read from the `kofun/` submodule; site-owned public guides are read from
`content/docs/`. `site/prepare-tour.mjs` copies the browser tour from the
submodule. Nothing here is on the language repository's critical path.

Two consequences worth stating plainly:

- The browser tour is language-repository source. `kofun/docs/tour/compiler.mjs`
  is a browser port of `bootstrap/wasm/compiler.c`, and kofun's own `make tour`
  gate pins it to the native wasm32 output byte for byte. `npm run test:tour`
  runs that same gate here, because this site publishes the application.
- The Project remote-write guard in `site/setup-project.mjs` interrogates the
  submodule's origin, not this repository's. Proving kofun-site is kofun-site
  would prove nothing about which repository's Project an apply is about to
  write to.

## The narrative documents

`content/ISSUE_TRIAGE.md` and the three public guides under `content/docs/`
came from the language repository's `docs/`, where nothing resolved them: not
`release/claims.json`, not `rfcs/index.json`, not the release-evidence pack, not
a gate script, and—before this change—not this site's own manifest. The rest of
`docs/` stays there and is read from the submodule, for the reason
`kofun/docs/REPOSITORY_GUIDE.md` records.

`ONE_DAY_TUTORIAL.md`, `CODING_INTERVIEW.md`, and `SCIENTIFIC_COMPUTING.md` are
now first-class pages in `app/docs/docs-manifest.ts`. The renderer marks their
source as `kofun-site` and keeps design guidance separate from active compiler
claims. `content/ISSUE_TRIAGE.md` remains internal policy and is not rendered.
Links from these guides into the language repository are absolute URLs because
the files they name are owned elsewhere.

## Getting started

```sh
git submodule update --init
npm ci
npm run verify:site
```

`site/README.md` documents the individual scripts, the docs manifest, the
playground boundary, and the publishing flow.

## Publishing

`https://hjosugi.github.io/kofun/` is served from the **language**
repository's `.github/workflows/pages.yml`, and it keeps that address after the
split. That workflow checks out an exact `kofun-site` commit, builds the verified
static export, records both source revisions, and deploys through GitHub Pages.
Publishing a site change therefore means advancing that pinned renderer commit
in `hjosugi/kofun` and running the Pages workflow; this repository needs no
cross-repository publication credential. The older hourly monitor is not the
publication authority and remains disabled. Project synchronization still uses
`PROJECTS_TOKEN`, since `GITHUB_TOKEN` cannot reach Projects.

Issues stay in [`hjosugi/kofun`](https://github.com/hjosugi/kofun/issues).

## Verifying the backlog

`scripts/verify_backlog.kofun` is a Kofun program, so it runs on the compiler
built from the submodule:

```sh
kofun/bin/kofun run scripts/verify_backlog.kofun
```

**It does not currently run.** The Core rejects it with
`error[E2S10]: unsupported Core builtin call 'chars'`, because the script was
written against builtins (`chars`, `contains`, `starts_with`, `text_slice`,
`parse_int`) that the compiler no longer accepts. This predates the split: the
copy here is byte-identical to the one that was in the language repository, and
it failed the same way there. No gate ran it, so nothing reported the rot.
Repairing it means rewriting the script against the current Core, which is
separate work from moving it.

## License

Apache-2.0 OR MIT, matching the language repository. See `LICENSE-APACHE`,
`LICENSE-MIT`, and `NOTICE`.
