#!/usr/bin/env bash
# Fetch + pull the FluentCart plugin repo so subsequent reads see latest code.
# Read-only with respect to the docs repo.

set -euo pipefail

PLUGIN_PATH="/Users/authlab-24/Desktop/fluent-cart"

if [ ! -d "$PLUGIN_PATH/.git" ]; then
  echo "ERROR: $PLUGIN_PATH is not a git repo" >&2
  exit 1
fi

CURRENT_BRANCH=$(git -C "$PLUGIN_PATH" branch --show-current)
echo "Plugin repo:    $PLUGIN_PATH"
echo "Current branch: $CURRENT_BRANCH"
echo ""

echo "Fetching all remotes + tags..."
git -C "$PLUGIN_PATH" fetch --all --tags --prune

echo ""
echo "Pulling latest on $CURRENT_BRANCH..."
git -C "$PLUGIN_PATH" pull --ff-only

echo ""
echo "Done. HEAD is now:"
git -C "$PLUGIN_PATH" log -1 --oneline
