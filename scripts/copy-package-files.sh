echo '☢️  preparing package...'
mkdir dist
cp -r src/* dist/.
cp readme.md dist/.
cp license dist/.
cp package.json dist/.
echo '☢️  dist ready.'
