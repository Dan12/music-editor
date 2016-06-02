git add -A
echo "Enter Commit Message"
read -e COMMESS
git commit -m "$COMMESS" -a
git push -u origin master
git status