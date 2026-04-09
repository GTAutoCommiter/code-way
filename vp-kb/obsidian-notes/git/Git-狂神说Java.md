---
id: git-kuangshenshuo
slug: /git-kuangshenshuo
title: 【狂神说Java】Git
date: 2022-05-10T00:00:00.000Z
tags:
  - Git
---
# 前言

学习视频：[【狂神说Java】Git最新教程通俗易懂](https://www.bilibili.com/video/BV1FE411P7B3?p=1)

***感谢狂神！！！***



**此笔记用于记录本人在学习中还有不懂以及值得注意的地方。以方便日后的工作与学习。**



笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。

**部分内容不完整，请读者结合视频观看效果更佳。**



## 注意：

**此笔记并非完整笔记**

需要完整笔记的同学可以移步到[视频同步笔记：狂神聊Git](https://blog.csdn.net/qq_33369905/article/details/106647320)



***再次感谢狂神！！！***

跟对人，做对事。——狂神说

------



# 什么是版本控制？

- 用于管理多人协同开发项目的技术
- 对文件的版本控制，要对文件进行修改、提交等操作



## 版本控制分类

### 1、本地版本控制  RCS

- 记录文件每次的更新
- 以对每个版本做一个快照，或是记录补丁文件
- 适合个人用

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMERnM2ZIcmJQcWJORU9NTzlHVGpGaFZhdWtNWld4NTRpY1M3ZVMyeDhBN0JFdTBWQjlpYndFaHpRLzY0MA?x-oss-process=image/format,png)



### 2、集中版本控制  SVN

- 所有的版本数据都保存在服务器上
- 协同开发者从服务器上同步更新或上传自己的修改
- 用户的本地只有自己以前所同步的版本，如果不连网的话，用户就看不到历史版本，也无法切换版本验证问题，或在不同分支工作。
- 所有数据都保存在单一的服务器上，有很大的风险这个服务器会损坏，这样就会丢失所有的数据，当然可以定期备份

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMDBWNHVMYWlieHRaSTlSTHBxN3RrU2RsV2lhRjkyQVZlWjBpYjlEaWNxQmtTMnBvbzV1OHNFVTJtQ1EvNjQw?x-oss-process=image/format,png)



### 3、分布式版本控制 Git

- 每个人都拥有全部的代码！安全隐患！
- 所有版本信息仓库全部同步到本地的每个用户，这样就可以在本地查看所有版本历史，可以离线在本地提交，只需在连网时push到相应的服务器或其他用户那里。
- 由于每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据，但这增加了本地存储空间的占用。
- 不会因为服务器损坏或者网络问题，造成不能工作的情况！

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMGV2OFE3cVhqc1RmZVN3RmV4ZEE0dEdqRkFpYVZFS1F6QUhkR2NJTlhJTEtmbEkyY2ZrOUJpYXdRLzY0MA?x-oss-process=image/format,png)



## Git与SVN的主要区别

|                  |                             Git                              |                             SVN                              |
| :--------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| **版本控制系统** |                            分布式                            |                            集中式                            |
|    **版本库**    |       没有中央服务器，每个人的电脑就是一个完整的版本库       |                      集中放在中央服务器                      |
| **是否需要联网** |                     工作的时候不需要联网                     |            必须联网才能工作，对网络带宽要求较高。            |
|   **协同方式**   | 自己在电脑上改了文件A，其他人也在电脑上改了文件A，这时只需把各自的修改推送给对方，就可以互相看到对方的修改了。Git可以直接看到更新了哪些代码和文件！ | 首先要从中央服务器得到最新的版本，然后工作，完成工作后，需要把自己做完的活推送到中央服务器。 |



# 软件下载安装

自行看视频[安装Git及环境配置](https://www.bilibili.com/video/BV1FE411P7B3?p=4)。

【安装包】[国内下载镜像](https://registry.npmmirror.com/binary.html?path=git-for-windows/)



# 启动Git

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMGphaWFBZnIycEFmV3RGWDU3a0dZcVIzU2xOeERsQVpEa0NVNklPQjFZQWljS3hIaWI1eUdidjl6US82NDA?x-oss-process=image/format,png)

**Git Bash：** Unix与Linux风格的命令行，使用最多，推荐最多

**Git CMD：** Windows风格的命令行

**Git GUI**：图形界面的Git，不建议初学者使用，尽量先熟悉常用命令



# 常用的Linux命令

|           命令           |                          描述                          |
| :----------------------: | :----------------------------------------------------: |
|      cd `文件路径`       |                       改变目录。                       |
|          cd . .          |          回退到上一个目录，直接cd进入默认目录          |
|           pwd            |                显示当前所在的目录路径。                |
|          ls(ll)          | 列出当前目录中的所有文件，ll(两个ll)列出的内容更为详细 |
| touch `文件名（带后缀）` |                      新建一个文件                      |
|  rm `文件名（带后缀）`   |                      删除一个文件                      |
|      mkdir `目录名`      |                 新建一个文件夹（目录）                 |
|      rm -r `目录名`      |                 删除一个文件夹（目录）                 |
| mv `移动文件` `目标文件` |                        移动文件                        |
|          reset           |                  重新初始化终端/清屏                   |
|          clear           |                          清屏                          |
|         history          |                      查看命令历史                      |
|           help           |                          帮助                          |
|           exit           |                          退出                          |
|            #             |                          注释                          |

==注意：`rm -rf `  切勿在Linux中尝试！删除电脑中全部文件！==



# Git配置

==所有的配置文件，其实都保存在本地！==

具体Git配置视频讲解的非常清楚，跟着[Git的必要配置](https://www.bilibili.com/video/BV1FE411P7B3?p=6)一步一步配置即可，这里就不再赘述了。



## 配置过程中涉及到的git语句

> 查看配置

```
git config -l
```



> 查看不同级别的配置文件

```
#查看系统config
git config --system --list
　　
#查看当前用户（global）配置
git config --global  --list
```

`--global`：全局配置



> 设置用户名与邮箱（用户标识，必要）

- 每次Git提交都会使用该信息。它被永远的嵌入到了你的提交中

```php
git config --global user.name " "  #名称
git config --global user.email " "   #邮箱
```



# ==Git基本理论（重要）==

## 三个区域

Git本地有三个工作区域：

- 工作目录（Working Directory）
- 暂存区(Stage/Index)
- 资源库(Repository或Git Directory)
- 远程的git仓库(Remote Directory)【第四个工作区域】

### 文件在这四个区域之间的转换关系

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwME5KNEw5T1BJOWlhMU1taWJwdkRkNmNTZGRCZHZybGJkRXR5RU9yaDRDS25XVmlieWZDSGEzbHpYdy82NDA?x-oss-process=image/format,png)

`Remote`：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换

`Repository`仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本

`ndex / Stage`：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息

`Workspace`：工作区，就是你平时存放项目代码的地方



### 文件在这四个区域的具体存储

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMGljejZYMmFpYklnVVd6SHh0d1g4a2ljUENLcERyc2lhUHpaazA0T2xJMmJ6bHlkemljQnVYVEp2TEVRLzY0MA?x-oss-process=image/format,png)

`Directory`：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。

`WorkSpace`：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间。

`git`：存放Git管理信息的目录，初始化仓库的时候自动创建。

`Index/Stage`：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。

`Local Repo`：本地仓库，一个存放在本地的版本库；HEAD会只是当前的开发分支（branch）。

`Stash`：隐藏，是一个工作状态保存栈，用于保存/恢复WorkSpace中的临时状态。



## 工作流程

|                   流程                    | git管理的文件状态  |
| :---------------------------------------: | :----------------: |
|      1、在工作目录中添加、修改文件；      | 已修改（modified） |
| 2、将需要进行版本管理的文件放入暂存区域； |  已暂存（staged）  |
|    3、将暂存区域的文件提交到git仓库。     | 已提交(committed)  |

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMDlpYU9obDBkQUNmTHJNd05iRHp1Y0dRMzBzM0huc2lhY3pmY1I2ZEM5T2VoaWN1d2liS3VIalJsemcvNjQw?x-oss-process=image/format,png)



# Git项目搭建

## 创建工作目录常用指令

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMEFJSTZZVm9vVXppYnBpYnpKbm9PSEhYVXNMM2Y5RHFBNGhvclVpYmZjcEVaODhPeWYyZ1FRTlI2dy82NDA?x-oss-process=image/format,png)

`WorkSpace`（工作目录）：你希望Git帮助你管理的文件夹，可以是你项目的目录，也可以是一个空目录，建议不要有中文。



### 本地仓库搭建

> 创建全新的仓库

```php
# 在当前目录新建一个Git代码库
$ git init
```

==执行后可以看到在项目目录多出了一个.git目录，关于版本等的所有信息都在这个目录里面。==



> 克隆远程仓库

- 将远程服务器上的仓库完全镜像一份至本地！

```php
# 克隆一个项目和它的整个代码历史(版本信息)
$ git clone [url]  # https://gitee.com/kuangstudy/openclass.git
```



# Git文件操作

要对文件进行修改、提交等操作，首先要知道文件当前在什么状态，不然可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。



## 文件的四种状态

![](https://img-blog.csdnimg.cn/img_convert/f6d1d99b0ed7a5b02150016060b7a30d.png)

> Untracked（未跟踪）

**文件位置**：在文件夹中, 但并没有加入到git库, 不参与版本控制.

**去处**：

|      目标状态      | 实现方法 |
| :----------------: | :------: |
| Staged（暂存状态） | git add  |

`git add .  `：添加所有文件到暂存区



> Unmodified（ 未修改, 即版本库中的文件快照内容与文件夹中完全一致）

 **文件位置**：已经入库

**去处**：

|      目标状态       |       实现方法       |
| :-----------------: | :------------------: |
| Modified（已修改）  |      文件被修改      |
| Untracked（未跟踪） | git rm（移出版本库） |



> Modified（已修改, 仅仅是修改, 并没有进行其他的操作）

**文件位置**：已经入库

**去处**：

|       目标状态       |                          实现方法                          |
| :------------------: | :--------------------------------------------------------: |
|  Staged（暂存状态）  |                          git add                           |
| Unmodified（未修改） | git checkout（丢弃修改过，即从库中取出文件, 覆盖当前修改） |



> Staged（暂存状态）

**去处**：

|       目标状态       |                           实现方法                           |
| :------------------: | :----------------------------------------------------------: |
| Unmodified（未修改） | git commit（将修改同步到库中，这时库中的文件和本地文件又变为一致） |
|  Modified（已修改）  |             git reset HEAD filename（取消暂存）              |

`git commit -m "消息内容"`：提交暂存区中的内容到本地仓库 -m 提交信息



### 文件状态去处图

==请读者结合上述文件状态去处来看此图效果更佳==

![](https://img-blog.csdnimg.cn/img_convert/d1e1b91b4f8988bc943c807861dac512.png)



## 查看文件状态

> 查看指定文件状态

```shell
git status [filename]
```

> 查看所有文件状态

```shell
git status
```



## 忽略文件

有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等

在主目录下建立".gitignore"文件，此文件有如下规则：

> 1、忽略文件中的空行或以井号（#）开始的行将会被忽略。
>
> 2、可以使用Linux通配符。例如：星号（*）代表任意多个字符，问号（？）代表一个字符，方括号（`[abc]`）代表可选字符范围，大括号（`{string1,string2,...}`）代表可选的字符串等。
>
> 3、如果名称的最前面有一个感叹号（!），表示例外规则，将不被忽略。
>
> 4、如果名称的最前面是一个路径分隔符（/），表示要忽略的文件在此目录下，而子目录中的文件不忽略。
>
> 5、如果名称的最后面是一个路径分隔符（/），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。

```shell
#为注释
*.txt        #忽略所有 .txt结尾的文件,这样的话上传就不会被选中！
!lib.txt     #但lib.txt除外
/temp        #仅忽略项目根目录下的TODO文件,不包括其它目录temp
build/       #忽略build/目录下的所有文件
doc/*.txt    #会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
```



# 使用码云

gitee和github的使用，视频里很详细，就不赘述了。



## 设置本机绑定SSH公钥，实现免密码登录！

[配置SSH公钥及创建远程仓库](https://www.bilibili.com/video/BV1FE411P7B3?p=11)



## IDEA中集成Git

[IDEA中集成Git操作](https://www.bilibili.com/video/BV1FE411P7B3?p=12)



# Git分支简介

分支：暂时理解成平行宇宙

## 常见分支类型

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMEJPR3phRzRRVGM0SlhPMGhTbHdjTnR1ak56QXZ4ZWliU3JhakxZTENUNm90Tm5IRFY5eFlXd0EvNjQw?x-oss-process=image/format,png)

`master`（主分支）：应该非常稳定，用来发布新版本，一般情况下不允许在上面工作

`dev`：工作一般情况下在新建的dev分支上工作，工作完后，比如上要发布，或者说dev分支代码稳定后可以合并到主分支master上来。



## git分支中常用指令：

> 列出所有本地分支

```shell
git branch

```

> 列出所有远程分支

```shell
git branch -r

```

> 新建一个分支，但依然停留在当前分支

```shell
git branch [branch-name]

```

> 新建一个分支，并切换到该分支

```shell
git checkout -b [branch]

```

> 合并指定分支到当前分支

```shell
$ git merge [branch]

```

> 删除分支

```shell
$ git branch -d [branch-name]

```

> 删除远程分支

```shell
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]

```



## IDEA中分支操作

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMHdITklZZVRIQzhhSEdBU29EeVpPNjRRaWNzbHFpYU1iMU9KMVoxTFBvaWMzTEJHeURJWUJhN1hYdy82NDA?x-oss-process=image/format,png)



# 结语

 ***感谢狂神!!!***

 ***感谢各位读者能看到最后!!!***
