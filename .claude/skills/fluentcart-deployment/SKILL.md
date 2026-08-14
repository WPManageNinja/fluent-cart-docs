---
name: fluentcart-deployment
description: Use when publishing docs changes, adding or updating an npm dependency, when the live site does not update after a push, when a Cloudflare Pages build fails, or when a second lockfile (pnpm-lock.yaml) or Node version error appears.
---

# FluentCart Docs Deployment

## Overview

docs.fluentcart.com is a VitePress site deployed by **Cloudflare Pages**, which auto-builds on every push to `master` on `WPManageNinja/fluent-cart-docs`. There is no workflow file in this repo; the build config lives on the Cloudflare side. Propagation after a successful push takes roughly **5 to 30 minutes**.

Core rule: **npm is the only package manager, and `package-lock.json` is the only lockfile.**

## Publish workflow

1. Verify locally first: `npm run docs:build` must pass (it fails on dead internal links).
2. Commit on a feature branch, merge to `master`, push to `origin`. The push is the deploy trigger; nothing else needs to be run.
3. Verify live with a marker unique to the change, not by eyeballing:
   ```bash
   curl -s https://docs.fluentcart.com/<page-path> | grep -o '<expected marker>'
   ```
   A new static asset is the cleanest marker: `curl -s -o /dev/null -w '%{http_code}' https://docs.fluentcart.com/<asset-path>` flips 404 to 200 when the new build is live.
4. Not live after 30+ minutes usually means the Cloudflare build failed. The build log is only visible in the Cloudflare Pages dashboard; from the repo side, diagnose with the dependency checklist below.

## Adding or updating a dependency

- `npm install -D <pkg>` (or `npm install <pkg>`). Never `pnpm add` or `yarn add`.
- Never commit a `pnpm-lock.yaml` or `yarn.lock`. If one appears (an editor or teammate generated it), delete it in the same commit.
- Check the dependency's minimum Node version against the repo's pinned Node before pushing: `.node-version` (exact), `.nvmrc`, and `engines` in `package.json` must all satisfy it. Update all three together if the floor rises.
- Native-binary packages (sharp, esbuild-style) are the ones that break remote builds: they enforce their Node floor at install time.

## Why these rules exist (2026-08-14 incident)

A push adding `sharp` as a devDependency stalled deployment for ~1 hour with two independent build failures:

1. **Stale second lockfile.** The repo carried an old `pnpm-lock.yaml` next to `package-lock.json`. Cloudflare auto-detects the package manager from lockfiles and chose pnpm, installing from the stale lockfile that lacked sharp. Local npm builds passed the whole time, so nothing looked wrong from the repo.
2. **Node floor.** Cloudflare built on Node 18; sharp requires ≥ 20.9. Fixed by pinning Node 22 via `.node-version`, `.nvmrc`, and `engines`.

Both failures were invisible locally. The checklist above is what would have caught them before the push.

## Quick reference

| Question | Answer |
|---|---|
| What triggers a deploy | Any push to `master` |
| Hosting / build | Cloudflare Pages, config on Cloudflare side, no repo workflow file |
| Package manager | npm only; `package-lock.json` is the single lockfile |
| Node version | Pinned in `.node-version`, `.nvmrc`, `engines` (keep in sync) |
| Local pre-push gate | `npm run docs:build` |
| Live verification | curl a change-specific marker or new asset URL |
| Typical propagation | 5–30 min; longer = build likely failed on Cloudflare |
| Build logs | Cloudflare Pages dashboard only |
