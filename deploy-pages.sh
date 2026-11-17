#!/usr/bin/env bash
# Build the static site and publish it to the gh-pages branch (GitHub Pages).
# Usage: ./deploy-pages.sh
set -euo pipefail
REPO_URL=$(git remote get-url origin)
REPO_NAME=$(basename -s .git "$REPO_URL")
BASE_PATH="/$REPO_NAME" npx next build
touch out/.nojekyll            # let GitHub serve the _next/ folder
cd out
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C .. config user.name)" -c user.email="$(git -C .. config user.email)" commit -q -m "Deploy site"
git push -f -q "$REPO_URL" gh-pages
rm -rf .git
echo "Published to gh-pages."
