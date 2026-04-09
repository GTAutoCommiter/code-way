---
id: npm-fnm-note
slug: /npm-fnm-note
title: 【fnm】使用技巧
date: 2022-05-10T00:00:00.000Z
tags:
  - npm/知识库
---
# 项目自动化相关

## Q：如何进入项目自动切换node版本？

* A：

  1. **创建`.nvmrc`或`.node-version`文件**
     在项目的根目录下创建一个名为`.nvmrc`或`.node-version`的文件，并在其中指定希望使用的Node.js版本号。

     * 例如，如果您想要使用版本16.14.2，则可以在该文件中写入`16.14.2`。

  2. **配置shell环境**
     根据使用的shell类型，在相应的配置文件中添加一行来启用FNM的自动切换功能。

     * 对于Bash，在`.bashrc`或`.zshrc`文件的末尾添加以下行：

       ````bash
       eval "$(fnm env --use-on-cd)"
       ````

     * 对于PowerShell，在`Microsoft.PowerShell_profile.ps1`文件的末尾添加以下行：

       ````bash
       fnm env --use-on-cd | Out-String | Invoke-Expression
       ````

  3. **应用更改**
     保存配置文件的更改并重新加载它们，以便FNM能够在您进入项目目录时自动读取`.nvmrc`或`.node-version`文件并切换到指定的Node.js版本。

     * 对于`zsh`

       ````bash
       source ~/.zshrc
       ````

## Q：如何安装指定版本？

* A：

  ````bash
  fnm install {版本号}
  ````
