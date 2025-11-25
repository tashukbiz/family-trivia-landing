#!/bin/zsh

# Exit on error
set -e

# Clean and create docs directory
rm -rf docs
mkdir docs

# Copy build output
cp -r out/* docs/

# Copy github pages configuration files
cp pages/CNAME docs/
cp pages/.nojekyll docs/

# Commit and push changes
git add .
git commit -m 'Deploy static site'
git push origin main

echo "Deployment successful!"