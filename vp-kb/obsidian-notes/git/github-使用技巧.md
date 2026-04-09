---
id: git-github-use-skill
slug: /git-github-use-skill
title: 【github】使用技巧
date: 2022-05-10T00:00:00.000Z
tags:
  - Git
---
# 前言

# 如何高效地寻找开源项目？

具体教程:[如何高效地在网上找开源项目做！在职程序员实际演示一波视频教程操作](https://www.bilibili.com/video/BV1yJ411S7Wu?spm_id_from=333.337.search-card.all.click)

**搜索栏搜索格式：**

|        搜索栏内容         |          描述           |
| :------------------: | :-------------------: |
|    in:name `关键词`     |     库名字包含关键词的开源项目     |
|     stars:>`数值`      | 收藏数大于`数值 `的开源项目（火热程度） |
|      fork:>`数值`      |    分支数大于`数值`的开源项目     |
|   in:readme `关键词`    |  readme文件中包含关键词的开源项目  |
| in:description `关键词` |    项目描述中包含关键词的开源项目    |
|     pushed:>`日期`     |    更新为指定`日期`的开源项目     |
|   language:`语言名称`    |      使用指定语言的开源项目      |

==注意：上述搜索约束条件都可以并行使用。==



# 单独下载库中单个文件或目录

> 下载单个文件



> 下载单个目录

````shell
git clone 克隆地址 "目标文件名"
````



# 配置相关

## 更改本地提交人

1. 查看个人信息是否跟github设置里的一样

   ````bash
   git show
   ````

2. 修改邮箱

   ````shell
   git config --global user.email "youremail@email.com"
   ````

3. 再次确认

   ````shell
   git config --global user.email
   ````

# 分枝相关

## 删除本地分枝

````bash
git branch -d <分枝名>
````

## 创建分支

````bash
git checkout -b <分支名>
````

## 切换分支

````bash
## 根据分支名切换
git checkout <分支名>

## 切回上次分支
git checkout -

## 根据标签名切换
git checkout <标签名>
````



## 本地创建分枝关联远程分枝

1. pull远程分枝索引
2. 创建本地分枝与远程分枝关联

````bash
git checkout -b {本地分枝名} origin/{需要关联的远程分枝名}
````

# 项目相关

## 子仓库相关

### 在已有项目中添加子仓库

1. 进入目标项目路径
2. 关联子仓库

````bash
git submodule add {仓库地址} {文件名}
````

### 清除子仓库

````bash
git rm --cached {创建的子仓库文件名}
````

【使用场景】

* 创建子仓库位置错误

### 修改子项目内容

> 方法一：单独修改项目仓库

【使用场景】

* 一次修改多处使用。

> 方法二：直接在项目引用的子仓库中修改

1. 先进入子仓库
2. 查看分枝，若不是主分枝则切换至主分枝。
3. 修改结束后走正常提交流程。
4. 进入主项目更新子仓库引入版本。
5. 提交主项目引用子项目索引。

【使用场景】

* 在项目组仓库中修改引用的子仓库

### 项目初始化拉取子仓库

```bash
# 无嵌套子模块 → 一步搞定
git submodule update --init

# 有嵌套子模块 → 万能兜底，无脑用
git submodule update --init --recursive
```

## 将本地项目绑定远程仓库

1. 在本地项目中`git bash`

   ````shell
   git remote
   ````

2. 复制远程仓库SSH

   ```shell
   git remote add origin 地址
   ```

3. 查看当前

   ````shell
   git remote
   ````

4. 将项目内容提交到远程仓库

   ````shell
   git push origin master
   ````

5. 创建开发分支

   ````shell
   git checkout -b dev
   ````

6. 提交开发分支

   ````shell
   git push origin dev
   ````

## 提交本地文件到远程仓库

【前提】

* 远程仓库已创建
* git已安装



1. **克隆远程仓库**

   ````shell  
   git clone
   ````

2. **拖动要上传的文件到克隆的远程仓库内**

3. **把文件夹所有文件添加到仓库**

   ````shell
   git add .
   ````

   【拓展】**add命令的使用**

   > 将修改的文件添加到缓存区

   ````shell
   git add 文件名
   ````

   >

4. **添加本次提交的说明**

   ````shell
   $ git commit -m " "
   ````

5. **把本地库的所有内容推送到远程库上**

   ````shell
   $ git push -u origin master
   ````



# 快捷键相关

## 如何打开/关闭搜索栏？

* mac：`command`+`k`

# tag相关

## Q：如何添加tag

* A：

  1. 打标签

     ````bash
     git tag <标签名>
     ````

  2. 提交标签

     ````bash
     git push origin <标签名>
     ````

  3. 删除标签

     ````bash
     git tag -d <标签名>
     ````

     

  
