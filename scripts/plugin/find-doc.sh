#!/usr/bin/env bash
# Search the docs repo's guide/ folder for a feature/keyword and report matching pages.
# Helps locate which doc page documents a given plugin feature.
# Usage: ./scripts/plugin/find-doc.sh <pattern>
# Examples: ./scripts/plugin/find-doc.sh stripe
#           ./scripts/plugin/find-doc.sh "tax country toggle"

set -euo pipefail

DOCS_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
GUIDE_DIR="$DOCS_ROOT/guide"

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <pattern>" >&2
  echo "  e.g. $0 stripe" >&2
  echo "       $0 \"tax country toggle\"" >&2
  exit 1
fi

PATTERN="$1"

if [ ! -d "$GUIDE_DIR" ]; then
  echo "ERROR: guide/ not found at $GUIDE_DIR" >&2
  exit 1
fi

echo "Searching guide/ for: $PATTERN"
echo ""

echo "--- Filename matches ---"
find "$GUIDE_DIR" -type f -name "*.md" -iname "*$PATTERN*" 2>/dev/null \
  | sed "s|$DOCS_ROOT/||" \
  || echo "  (none)"

echo ""
echo "--- Content matches (file: count) ---"
grep -ril --include="*.md" -e "$PATTERN" "$GUIDE_DIR" 2>/dev/null \
  | while read -r f; do
      count=$(grep -ic -e "$PATTERN" "$f" || true)
      printf "  %3d  %s\n" "$count" "${f#$DOCS_ROOT/}"
    done \
  | sort -rn \
  || echo "  (none)"
