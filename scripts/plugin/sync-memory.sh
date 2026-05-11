#!/usr/bin/env bash
# Refresh the plugin-memory layer after the user has pulled new plugin code.
#
# Lists every changed plugin file since <prev-ref>, groups by Modules/<X>,
# prints a CHANGES.md skeleton entry, prints the exact ctx_index invocation
# Claude should run to refresh the FTS5 index, and lists modules whose
# `Last fully audited:` line in CATALOG.md should be bumped.
#
# Usage: ./scripts/plugin/sync-memory.sh <prev-ref>
# Examples: ./scripts/plugin/sync-memory.sh 1.3.26
#           ./scripts/plugin/sync-memory.sh v1.3.26   (auto-strips the v)

set -euo pipefail

PLUGIN_PATH="/Users/authlab-24/Desktop/fluent-cart"
DOCS_PATH="/Users/authlab-24/Desktop/fluent-cart-docs"

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <prev-ref>" >&2
  echo "  e.g. $0 1.3.26" >&2
  exit 1
fi

if [ ! -d "$PLUGIN_PATH/.git" ]; then
  echo "ERROR: $PLUGIN_PATH is not a git repo" >&2
  exit 1
fi

REF="$1"

# Accept "v1.3.26" or "1.3.26" — try both.
if ! git -C "$PLUGIN_PATH" rev-parse --verify "$REF" >/dev/null 2>&1; then
  ALT="${REF#v}"
  if [ "$ALT" != "$REF" ] && git -C "$PLUGIN_PATH" rev-parse --verify "$ALT" >/dev/null 2>&1; then
    REF="$ALT"
  else
    echo "ERROR: ref '$1' not found in $PLUGIN_PATH" >&2
    exit 1
  fi
fi

HEAD_SHA=$(git -C "$PLUGIN_PATH" rev-parse --short HEAD)
REF_SHA=$(git -C "$PLUGIN_PATH" rev-parse --short "$REF")
TODAY=$(date '+%B %-d, %Y')

# All changed files in the diff (any extension, anywhere in the plugin).
CHANGED_ALL=$(git -C "$PLUGIN_PATH" diff --name-only "$REF..HEAD")

# Filter to PHP under app/ (the bulk-indexed corpus).
CHANGED_PHP=$(printf '%s\n' "$CHANGED_ALL" | grep -E '^app/.*\.php$' || true)

# Vue allowlist (kept in sync with CATALOG.md "Vue / admin-UI allowlist" section).
# Pro-only files (ActivatedSitesList, ViewSite) intentionally excluded — they live in fluent-cart-pro.
VUE_ALLOWLIST_REGEX='^(resources/admin/Modules/Settings/Licensing\.vue|resources/admin/Modules/Subscriptions/Components/SubscriptionDetails\.vue|resources/admin/Charts/LicenseStatistics\.vue|resources/admin/BlockEditor/.*\.vue)$'
CHANGED_VUE=$(printf '%s\n' "$CHANGED_ALL" | grep -E "$VUE_ALLOWLIST_REGEX" || true)

# Combined index target list.
INDEX_TARGETS=$(printf '%s\n%s\n' "$CHANGED_PHP" "$CHANGED_VUE" | sed '/^$/d')

# Touched Modules/<X> set (unique, alphabetical).
TOUCHED_MODULES=$(printf '%s\n' "$CHANGED_PHP" \
  | sed -nE 's|^app/Modules/([^/]+)/.*|\1|p' \
  | sort -u)

# Touched non-Modules app/ subtrees (CPT, Hooks, Http, Models, Services, etc.)
TOUCHED_APP_OTHER=$(printf '%s\n' "$CHANGED_PHP" \
  | sed -nE 's|^app/([^/]+)/.*|\1|p' \
  | grep -v '^Modules$' \
  | sort -u)

echo "================================================================"
echo "Plugin memory sync: $REF ($REF_SHA) → HEAD ($HEAD_SHA)"
echo "================================================================"
echo ""

# 1. File counts.
PHP_COUNT=$(printf '%s\n' "$CHANGED_PHP" | sed '/^$/d' | wc -l | tr -d ' ')
VUE_COUNT=$(printf '%s\n' "$CHANGED_VUE" | sed '/^$/d' | wc -l | tr -d ' ')
ALL_COUNT=$(printf '%s\n' "$CHANGED_ALL" | sed '/^$/d' | wc -l | tr -d ' ')

echo "--- Change summary ---"
echo "  Total files changed:        $ALL_COUNT"
echo "  PHP under app/ (indexed):   $PHP_COUNT"
echo "  Vue allowlist (indexed):    $VUE_COUNT"
echo ""

# 2. Touched modules (alphabetical, one per line).
echo "--- Modules/ touched ---"
if [ -z "$TOUCHED_MODULES" ]; then
  echo "  (none)"
else
  printf '%s\n' "$TOUCHED_MODULES" | sed 's/^/  Modules\//'
fi
echo ""

if [ -n "$TOUCHED_APP_OTHER" ]; then
  echo "--- Non-Modules app/ subtrees touched ---"
  printf '%s\n' "$TOUCHED_APP_OTHER" | sed 's|^|  app/|;s|$|/|'
  echo ""
fi

# 3. Files Claude should re-index via ctx_index.
echo "--- Files to re-index (paste into ctx_index) ---"
if [ -z "$INDEX_TARGETS" ]; then
  echo "  (no PHP or allowlisted Vue files changed — index is already current)"
else
  printf '%s\n' "$INDEX_TARGETS" | sed "s|^|  $PLUGIN_PATH/|"
fi
echo ""

# 4. Suggested ctx_index invocation (MCP — Claude must call this tool, the script can't).
echo "--- Suggested ctx_index call (Claude runs this; the script does not) ---"
if [ -z "$INDEX_TARGETS" ]; then
  echo "  (skip — nothing to re-index)"
else
  echo "  Tool: mcp__plugin_context-mode_context-mode__ctx_index"
  echo "  Target paths (one ctx_index call covering all of them):"
  printf '%s\n' "$INDEX_TARGETS" | sed "s|^|    - $PLUGIN_PATH/|"
fi
echo ""

# 5. CHANGES.md skeleton entry.
echo "--- CHANGES.md skeleton (paste at the TOP of .claude/plugin-memory/CHANGES.md) ---"
echo ""
echo "## v<NEW-VERSION> — $TODAY"
if [ -n "$TOUCHED_MODULES" ]; then
  MODULES_CSV=$(printf '%s\n' "$TOUCHED_MODULES" | paste -sd ', ' -)
  echo "- **Modules touched:** $MODULES_CSV"
else
  echo "- **Modules touched:** (none — fix or doc-only release)"
fi
echo "- **Doc-relevant files of note:**"
if [ -n "$INDEX_TARGETS" ]; then
  printf '%s\n' "$INDEX_TARGETS" | head -10 | sed 's|^|  - `|;s|$|`|'
  REMAINING=$(printf '%s\n' "$INDEX_TARGETS" | tail -n +11 | wc -l | tr -d ' ')
  if [ "$REMAINING" -gt 0 ]; then
    echo "  - …and $REMAINING more (see full list above)"
  fi
else
  echo "  - (none)"
fi
echo "- **Doc pages updated:**"
echo "  - <fill in after edits>"
echo "- **Doc pages created (with sidebar entries added):**"
echo "  - <fill in after edits, or remove this line>"
echo "- **Plugin changes flagged but skipped (no doc-body impact):**"
echo "  - <internal refactor / CSS-only / dev-docs domain — list them with one-line reason>"
echo "- **Open questions carried forward:**"
echo "  - <fill in if any, or remove this line>"
echo "- **Build status:** <run npm run docs:build and paste the result>"
echo ""

# 6. CATALOG.md `Last fully audited:` bump list.
echo "--- CATALOG.md \`Last fully audited:\` bumps ---"
if [ -z "$TOUCHED_MODULES" ]; then
  echo "  (no Modules/ entries to bump)"
else
  echo "  After updating docs, bump \`Last fully audited: v<NEW-VERSION>\` in these CATALOG.md sections:"
  printf '%s\n' "$TOUCHED_MODULES" | sed 's/^/    - ### Modules\//'
fi
echo ""

echo "================================================================"
echo "Done. User: review the lists above. Claude: run the ctx_index"
echo "call, append the CHANGES.md entry, then proceed with doc edits."
echo "================================================================"
