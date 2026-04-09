---
id: npm-pnpm-useNote
slug: /npm-pnpm-useNote
title: 【pnpm】使用技巧
date: 2022-05-10T00:00:00.000Z
tags:
  - npm/知识库
---
# pnpm

## Q：解决了什么问题？

* A：
  * 更快
  * 使用非扁平目录，避免幽灵依赖

## Q：什么是幽灵依赖？

* A：依赖内部使用的依赖，被当前项目引用。

## Q：为什么使用非扁平化目录？

* A：防止依赖包内部引用包找不到了

## Q：如何从老项目中安全过渡？

* A：

  1. 复制原项目文件做备份

  2. 检查package.json配置是否正确

     * 用原包管理工具重新安装依赖，运行项目查看依赖配置是否有效。
  
  3. 删除文件中`node_modules`文件

     ````bash
     rm -rf node_modules
     ````
  
  4. 使用原`xxx-lock.xxx`文件生成`pnpm-lock.yaml`文件

     ````bash
     pnpm import
     ````

     > 该指令作用：[通过其他软件包管理器的 lockfile 文件生成 `pnpm-lock.yaml`](https://www.pnpm.cn/cli/import)
  
  5. 检查是否有使用内部源，若有使用则切换源地址

     ````bash
     pnpm config set registry {源地址}
     ````
  
  6. 安装依赖

     ````bash
     pnpm i
     ````
  
  7. 处理报错

     ````bash
     pnpm add {缺失包} -{mode}
     ````
  
     > 注意：根据包对项目的影响决定添加包至不同的模式
     >
     > `mode`：
     >
     > * d：生产环境依赖
     > * D：开发环境依赖

## Q：如何查看当前镜像源？

* A：

  ````bash
  pnpm config get registry
  ````

## Q：为什么修改镜像源失败？

* A：
  * 检查项目中`.npmrc`文件中`registry=`的值

## Q：依赖安装过程终端显示内容是啥？

* A：

  ````bash
  Progress: resolved 175, reused 175, downloaded 0, added 0
  ````

  * `resolved`：解析依赖树时发现的所有依赖项的数量
  * `reused`：pnpm 从缓存中复用的依赖项的数量。
  * `downloaded`：从远程仓库下载的依赖项的数量。
  * `added`：将下载的依赖项添加到项目中的数量。

# bug处理

## bug：mac系统全局安装找不到全局路径？

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/pnpm/20240531092133.png)

* 处理方法

  1. 终端运行pnpm setup命令

  2. 找到用户的主目录下的.zshrc 文件（注意：该文件默认隐藏，可以用Cmd + Shift +。查看）

  3. 修改`.zshrc`

     ````bash
     # pnpm
     export PNPM_HOME="/Users/xxx/Library/pnpm"
     case ":$PATH:" in
       *":$PNPM_HOME:"*) ;;
       *) export PATH="$PNPM_HOME:$PATH" ;;
     esac
     ++ export PATH="/Users/xxx/Library/pnpm/bin:$PATH"
     # pnpm end
     ````

     > （XXX:替换为自己的用户的主目录）

  4. 终端运行**source ~/.zshrc**命令
