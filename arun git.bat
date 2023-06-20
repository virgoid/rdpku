
pushd "%userprofile%\Desktop\app"

git add .
 git commit -m "autoCommit %date:~-4%%date:~3,2%%date:~0,2%.%time:~0,2%%time:~3,2%%time:~6,2%"

 git branch -M main

git remote set-url origin https://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@github.com/virgoid/rdpku.git

 git push origin main


pause