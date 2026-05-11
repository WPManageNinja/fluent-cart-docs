#!/usr/bin/env bash
# Show changed files (with stat) between <since-ref> and HEAD in the FluentCart plugin.
# Usage: ./scripts/plugin/diff-since.sh <tag-or-commit>
# Examples: ./scripts/plugin/diff-since.sh 1.3.26
#           ./scripts/plugin/diff-since.sh v1.3.26  (auto-strips the v)

set -euo pipefail

PLUGIN_PATH="/Users/authlab-24/Desktop/fluent-cart"

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <since-ref>" >&2
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

echo "Diff: $REF ($REF_SHA) → HEAD ($HEAD_SHA)"
echo ""
echo "--- Commits between ---"
git -C "$PLUGIN_PATH" log --oneline "$REF..HEAD"
echo ""
echo "--- Changed files (stat) ---"
git -C "$PLUGIN_PATH" diff --stat "$REF..HEAD"
echo ""
echo "--- Changed files (paths only) ---"
git -C "$PLUGIN_PATH" diff --name-only "$REF..HEAD"
