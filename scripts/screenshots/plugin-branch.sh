#!/usr/bin/env bash
# Switch the FluentCart plugin clone (which cart.local symlinks to) to a branch and
# rebuild its admin assets so unreleased UI can be screenshotted.
#
#   ./scripts/screenshots/plugin-branch.sh <branch>     switch + build
#   ./scripts/screenshots/plugin-branch.sh --restore    back to develop + build
#
# `npm run build` in the plugin has two side effects this script undoes:
#   1. it rewrites config/app.php to env=production / using_faker=false
#   2. it regenerates vendor/composer/autoload_* (tracked files)
# The local config is snapshotted before the build and put back afterwards; the
# autoload diff is discarded because the target branch carries its own copy.
set -euo pipefail

PLUGIN="/Users/authlab-24/Desktop/fluent-cart"
DEFAULT_BRANCH="develop"
target="${1:-}"

if [[ -z "$target" ]]; then
  echo "usage: $0 <branch> | --restore" >&2; exit 1
fi
[[ "$target" == "--restore" ]] && target="$DEFAULT_BRANCH"

cd "$PLUGIN"
echo "plugin clone: $(git branch --show-current) @ $(git rev-parse --short HEAD)"

# 1. snapshot the developer's local config (env / faker flags)
snap="$(mktemp)"
cp config/app.php "$snap"

# 2. drop build-generated autoload noise so checkout is not blocked
git checkout -- vendor/composer/ 2>/dev/null || true

# 3. switch
git fetch origin "$target" --quiet 2>/dev/null || true
git checkout "$target"
git pull --ff-only --quiet 2>/dev/null || true

# 4. rebuild admin JS/CSS (~30 s; the SPA is compiled, PHP is not)
npm run build > /tmp/fluent-cart-build.log 2>&1 && grep -E "built in" /tmp/fluent-cart-build.log | tail -1 || {
  echo "build failed, see /tmp/fluent-cart-build.log" >&2; exit 1; }

# 5. put the local config back and clear autoload noise again
cp "$snap" config/app.php
git checkout -- vendor/composer/ 2>/dev/null || true
rm -f "$snap"

echo "now on: $(git branch --show-current) @ $(git rev-parse --short HEAD)"
git status --short | head -5
