---
id: git-learngitbranching
slug: /git-learngitbranching
title: 【learngitbranching】git线上实战练习
date: 2022-05-10T00:00:00.000Z
tags:
  - Git
---
# 前言

* 【练习网站】[Learn Git Branching](https://learngitbranching.js.org/)



# 练习笔记

## 主要



> Git Branch

* 创建到一个名为 `newImage` 的分支。

### 基础篇

#### 提交记录

````shell
git commit
````

- 修改了代码库，并把这些修改保存成了一个提交记录



#### 分支

1. 创建新分支

   ````shell
   git branch <新分支名>
   ````

2. 切换到的分支上

   ````shell
   git checkout <分支名>
   ````

3. 提交

   ````shell
   git commit
   ````



#### 分支与合并

##### 方法一

1. 创建分支

   ````shell
   git branch <分支名>
   ````

2. 用切换到分支

   ````shell
   git checkout <分支名>
   ````

3. 提交一次

   ````shell
   git commit
   ````

4. 切换回`main`

   ````shell
   git checkout main
   ````

5. 提交

   ````shell
   git commit
   ````

6. 两分支合并

   ````shell
   git merge <所要合并的分支名>
   ````

   【==注意==】此时指针要在被合并的分支上



##### 方法二

1. 创建分支

   ````shell
   git branch -b <分支名>
   ````

2. 提交

   ````shell
   git commit
   ````

3. 切换回`main`提交一次

   ````shell
   git checkout main
   git commit
   ````

4. 切换到分支，rebase 到main上

   ````shell
   git rebase main
   ````

5. 切换到`main`，rebase到分支上

   ````shell
   git checkout main
   git rebase <需要合并分支>
   ````

### 高级篇





### 移动提交记录



### 杂项



### 高级话题



## 远程

### Push & Pull ——Git 远程仓库



### 关于 origin 和它的周边——Git远程仓库高级操作



# 结语

