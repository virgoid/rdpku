
pushd "%userprofile%\Desktop\app"

@REM for %%I in (.) do set dirName=%%~nxI
@REM curl -i -H "Authorization: token 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 " -d "{\"name\": \"%dirName%\", \"auto_init\": \"true\", \"private\": \"false\" }" https://api.github.com/user/repos
@REM git init
@REM echo>placeholder.txt
git add .
git commit -m "initial commit --auto"
git remote add origin https://github.com/virgoid/%dirName%.git
@REM git push -f --set-upstream origin master


 git push  origin main


pause