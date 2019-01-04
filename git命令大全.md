git init // 初始化本地git环境，创建新的版本库
git clone xxx //克隆一份代码到本地库
git pull // 把远程库的代码更新到本地
git pull --rebase origin master // 强制把远程库的代码跟新到当前分支上面
git fetch //把远程库的代码更新到本地库
git add . //把本地的修改添加到stage中
git commit -m "描述" //把stage中的修改提交到本地库
git push // 把本地库的修改提交到远程库中