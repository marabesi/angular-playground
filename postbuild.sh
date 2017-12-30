git init
#git remote add origin "https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git"
git add -f ./todo-list/dist
git commit -m "Deploy to Github Pages"
git push --force origin gh-pages
