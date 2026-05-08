#!/usr/bin/env bash
# List the last N commits in the FluentCart plugin with subject + changed-file count.
# Usage: ./scripts/plugin/recent-changes.sh [N]   (default N=20)

set -euo pipefail

PLUGIN_PATH="/Users/authlab-24/Desktop/fluent-cart"
N="${1:-20}"

if [ ! -d "$PLUGIN_PATH/.git" ]; then
  echo "ERROR: $PLUGIN_PATH is not a git repo" >&2
  exit 1
fi

echo "Last $N commits in $PLUGIN_PATH:"
echo ""

git -C "$PLUGIN_PATH" log -n "$N" --pretty=format:'%h %ad %s' --date=short --shortstat \
  | awk '
    /^[0-9a-f]{7,} / { print ""; print; next }
    /file/ { print "    " $0 }
    NF > 0 && !/^[0-9a-f]/ && !/file/ { print "    " $0 }
  '

echo ""
echo "---"
echo "Recent tags:"
git -C "$PLUGIN_PATH" tag --sort=-creatordate | head -5
