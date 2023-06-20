
pushd "%userprofile%\Desktop\app"

for %%I in (.) do set dirName=%%~nxI
curl -i -H "Authorization: token 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 " -d "{\"name\": \"%dirName%\", \"auto_init\": \"true\", \"private\": \"false\" }" https://api.github.com/user/repos
git init
echo>placeholder.txt
git add .
git commit -m "initial commit --auto"
git remote add origin https://github.com/virgoid/%dirName%.git
git push -f --set-upstream origin master



@REM git add .
@REM  git commit -m "autoCommit %date:~-4%%date:~3,2%%date:~0,2%.%time:~0,2%%time:~3,2%%time:~6,2%"

@REM  git branch -M main

@REM git remote set-url origin https://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@github.com/virgoid/rdpku.git

 git push origin main


pause