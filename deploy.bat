
set -e
yarn run build
cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:username/hello-world.git master:gh-pages
cd -