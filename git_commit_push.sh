#!/bin/bash

# Add all changes
git add ./src/Sidebar/Price/Price.css

# Commit changes with the specified commit message
git commit -m "
style: Adjust styling in Price component

- Added margin-top to the price title in the Price component
- Applied margin-left to the Price component container for better spacing


"
# Push changes to the remote repository
git push origin HEAD

echo "Changes committed and pushed successfully."
