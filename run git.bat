
pushd "%userprofile%\Desktop\app"

git add .
git commit -m "autoCommit %date:~-4%%date:~3,2%%date:~0,2%.%time:~0,2%%time:~3,2%%time:~6,2%"
git remote add origin https://github.com/virgoid/rdpku1.git
git push  origin main

pause