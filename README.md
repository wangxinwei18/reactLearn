#test
Already Tracked Files: If the node_modules folder was added to your repository before you added it to .gitignore, Git will continue to track it. You need to remove it from the repository with:
git rm -r --cached node_modules
git commit -m "Remove node_modules from tracking"
