echo 'Resetting'
git reset
echo 'Done!'

echo 'adding files...'
git add -f ./todo-list/dist
echo 'Done!'

echo 'Commiting...'
git commit -m "Deploy to Github Pages"
echo 'Done!'

echo 'pulling from origin'
git pull origin gh-pages -f
echo 'Done!'

echo 'Pushing changes to repo...'
git push --force origin gh-pages
echo 'Done!'
