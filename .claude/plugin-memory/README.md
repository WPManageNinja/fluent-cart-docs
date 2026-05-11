# Plugin Memory — README

A persistent, three-layer memory of the FluentCart plugin, built so future doc-update sessions can skip re-exploring the plugin from zero.

The plugin lives at `/Users/authlab-24/Desktop/fluent-cart` (read-only, sibling repo). The user owns `git pull` / `git push` on it. Claude only **reads** plugin code, and prefers reading from this memory layer instead of re-walking the plugin tree every release.

---

## Layout

```
.claude/plugin-memory/
├── CATALOG.md     — module-level table of contents (always loaded)
├── CHANGES.md     — per-release delta log (newest first, append-only)
└── README.md      — this file
```

Plus an FTS5 index of the plugin source, maintained via `mcp__plugin_context-mode_context-mode__ctx_index` and queried via `ctx_search`. The index is **not** stored in this repo — it lives in the context-mode knowledge base.

---

## The three layers

### Layer 1 · CATALOG.md — always loaded
A table-of-contents for `app/Modules/` plus the cross-cutting paths that drive docs. One concise entry per module: purpose, key files, user-facing surface, the doc page(s) it drives, and the last release through which the entry was audited end-to-end.

The orchestrator skill (`fluentcart-code-to-docs`) loads this file at the very start of every code-to-docs run.

### Layer 2 · FTS5-indexed plugin source — queried on demand
Persistent full-text index of `/Users/authlab-24/Desktop/fluent-cart/app/**/*.php` plus the small Vue allowlist in `CATALOG.md`.

Use `ctx_search` with focused queries — e.g. `"SubscriptionReactivated"`, `"free shipping bump"`, `"tax country toggle"` — to find symbol locations without `grep`/`find` over the whole tree.

Only fall back to native `Read` for the specific files surfaced by `ctx_search` or named in `CATALOG.md`.

### Layer 3 · CHANGES.md — per-release delta log
One H2 entry per plugin release. Captures: modules touched, doc-relevant files of note, doc pages updated, doc pages created, plugin changes intentionally skipped (with reasons), and open questions.

When a new release ships, **read the most recent entries first** — they tell you what was already done and what was deferred, so you don't re-do work or re-investigate already-resolved questions.

---

## Workflow per release

1. **User pulls** the new plugin code:
   ```bash
   git -C /Users/authlab-24/Desktop/fluent-cart pull
   ```
2. **User runs sync-memory.sh** with the previous tag:
   ```bash
   ./scripts/plugin/sync-memory.sh 1.3.26
   ```
   The script:
   - Lists every `app/**/*.php` file changed since `1.3.26`
   - Prints the exact `ctx_index` invocation Claude should run to re-index just those files
   - Prints a pre-filled `CHANGES.md` skeleton entry to paste at the top of `CHANGES.md`
   - Lists modules whose `Last fully audited:` line in `CATALOG.md` should be bumped

3. **User pastes the changelog** to Claude.

4. **Claude:**
   - Reads `CATALOG.md` + the most recent `CHANGES.md` entries (Step 0 of the orchestrator skill)
   - Runs the `ctx_index` invocation surfaced by `sync-memory.sh` (refreshes the FTS5 layer)
   - Uses `ctx_search` to find the exact code paths for each changelog item
   - Updates the matching doc pages via the master + template specialist skills
   - Appends a new entry to `CHANGES.md` and bumps `Last fully audited:` for touched modules

5. **User reviews and commits** the doc edits.

---

## What lives where (cheat-sheet)

| Question | Where to look |
|---|---|
| "What does Modules/X do?" | `CATALOG.md` |
| "What's the doc page for plugin path X?" | `CATALOG.md` (Drives docs field) |
| "What changed in v1.3.X — did we already address Y?" | `CHANGES.md` (most recent entry) |
| "Where in the plugin is symbol Z defined?" | `ctx_search` (Layer 2 index) |
| "Which Vue file drives doc page X?" | `CATALOG.md` (Vue allowlist section) |
| "What's the helper for refreshing memory?" | `scripts/plugin/sync-memory.sh` |

---

## Maintenance rules

- **Don't drift CATALOG.md from reality.** When a new module is added to the plugin, add a new H3 entry. When a module is removed, delete the entry.
- **Append-only on CHANGES.md.** Never edit a past release entry — if you discover a missed item, note it in the **next** release's entry under "Open questions carried forward".
- **The FTS5 index is throwaway.** It can always be rebuilt from the plugin source. If `ctx_search` returns stale results, run `sync-memory.sh` against an earlier ref to re-index.
- **No Pro plugin coverage yet.** Pro features get flagged in `CHANGES.md` open-questions until a Pro clone becomes available.
