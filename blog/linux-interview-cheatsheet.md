---
title: Linux常用命令与面试高频知识
date: 2026-03-19
tags:
  - Linux
  - 面试
  - 命令行
  - 操作系统
---

# Linux常用命令与面试高频知识

面试里问 Linux，通常不会只考你会不会敲命令，更常见的是看你能不能把命令、系统结构和排障思路连起来。准备这部分内容时，建议把重点放在三个方向：

- 常用命令是否熟悉
- 常见场景是否知道怎么排查
- 基础概念是否能说清楚

这篇就按这个思路做一份面试速查。

## 一、文件与目录操作

这类命令是使用频率最高的一组，基本每场技术面都可能问到。

### 1. `pwd`

查看当前所在目录。

```bash
pwd
```

常见追问：绝对路径和相对路径有什么区别？

- 绝对路径从根目录 `/` 开始
- 相对路径是相对于当前工作目录

### 2. `ls`

查看目录内容。

```bash
ls
ls -l
ls -la
```

常见参数：

- `-l`：显示详细信息
- `-a`：显示隐藏文件
- `-h`：配合 `-l` 以更友好的方式显示文件大小

面试常问：为什么 Linux 里的隐藏文件以 `.` 开头？

- 这是约定，不是单独的文件类型
- 例如 `.bashrc`、`.gitignore`

### 3. `cd`

切换目录。

```bash
cd /etc
cd ..
cd ~
```

记住几个常用位置：

- `cd ..` 返回上一级
- `cd ~` 回到用户家目录
- `cd -` 回到上一次所在目录

### 4. `mkdir`

创建目录。

```bash
mkdir test
mkdir -p project/src/utils
```

`-p` 很常用，可以递归创建多级目录。

### 5. `touch`

创建空文件，或者更新文件时间戳。

```bash
touch app.log
```

### 6. `cp`、`mv`、`rm`

复制、移动、删除文件。

```bash
cp a.txt b.txt
cp -r dir1 dir2
mv old.txt new.txt
rm file.txt
rm -rf temp/
```

重点记住：

- `cp -r` 用于复制目录
- `mv` 既能移动，也能重命名
- `rm -rf` 很危险，面试时可以顺带强调操作要谨慎

### 7. `find`

按条件查找文件。

```bash
find . -name "*.log"
find /var -type f -name "nginx.conf"
```

这是排查问题时非常实用的命令。

### 8. `grep`

按内容查找。

```bash
grep "error" app.log
grep -r "database" .
grep -n "listen" nginx.conf
```

常见参数：

- `-r`：递归搜索
- `-n`：显示行号
- `-i`：忽略大小写

面试里经常把 `find` 和 `grep` 放一起问：

- `find` 偏文件名和路径查找
- `grep` 偏文件内容查找

## 二、文件查看与日志排查

### 1. `cat`

快速查看小文件。

```bash
cat config.yml
```

### 2. `more` 与 `less`

分页查看长文件。

```bash
less app.log
```

实际使用里更推荐 `less`，因为它支持前后翻页和搜索。

### 3. `head` 与 `tail`

查看文件开头和结尾。

```bash
head -n 20 app.log
tail -n 50 app.log
tail -f app.log
```

`tail -f` 是线上排查日志最经典的命令之一。

面试常见场景题：

- 项目启动失败，怎么快速看错误日志？
- 可以回答：先 `tail -f` 看实时日志，再配合 `grep` 过滤关键字

## 三、权限与用户管理

### 1. `chmod`

修改权限。

```bash
chmod 755 script.sh
chmod +x deploy.sh
```

权限中的 `rwx`：

- `r`：读
- `w`：写
- `x`：执行

数字权限要会解释：

- `7 = 4 + 2 + 1 = rwx`
- `6 = 4 + 2 = rw-`
- `5 = 4 + 1 = r-x`

所以 `755` 表示：

- 所有者：`rwx`
- 同组用户：`r-x`
- 其他用户：`r-x`

### 2. `chown`

修改文件所属用户和用户组。

```bash
chown user file.txt
chown -R user:group project/
```

### 3. `sudo`

以管理员权限执行命令。

```bash
sudo systemctl restart nginx
```

面试中如果被问到为什么有时命令执行不了，可以从权限角度回答：

- 当前用户权限不足
- 目标文件不属于当前用户
- 目录没有执行权限

## 四、进程管理

### 1. `ps`

查看进程信息。

```bash
ps -ef
ps aux
```

### 2. `top` 与 `htop`

动态查看系统资源和进程占用。

```bash
top
```

如果环境装了 `htop`，交互体验会更好。

### 3. `kill` 与 `kill -9`

结束进程。

```bash
kill 1234
kill -9 1234
```

面试回答建议：

- `kill` 默认发送 `SIGTERM`，是“尽量正常退出”
- `kill -9` 发送 `SIGKILL`，是强制杀掉
- 不是所有场景都应该直接 `-9`

### 4. `jobs`、`bg`、`fg`、`nohup`

后台任务相关命令。

```bash
jobs
nohup python app.py > app.log 2>&1 &
```

重点理解：

- `nohup`：退出终端后进程仍可继续运行
- `&`：让命令在后台执行
- `2>&1`：把标准错误重定向到标准输出

## 五、磁盘、内存与系统状态

### 1. `df`

查看磁盘使用情况。

```bash
df -h
```

### 2. `du`

查看目录占用空间。

```bash
du -sh .
du -sh /var/log/*
```

面试场景：服务器磁盘满了怎么办？

可以这样回答：

1. `df -h` 看哪个分区满了
2. `du -sh` 逐层定位大目录
3. 检查日志、缓存、临时文件
4. 清理无用文件或迁移数据

### 3. `free`

查看内存使用情况。

```bash
free -h
```

## 六、网络相关命令

### 1. `ping`

测试网络连通性。

```bash
ping 8.8.8.8
ping baidu.com
```

可以顺带区分：

- 能 ping 通 IP，不一定代表 DNS 正常
- 能 ping 通域名，说明 DNS 解析也基本正常

### 2. `curl` 与 `wget`

请求接口或下载文件。

```bash
curl http://127.0.0.1:8080/health
curl -I https://example.com
wget https://example.com/file.zip
```

排查 Web 服务时，`curl` 非常常用。

### 3. `ss` 或 `netstat`

查看端口监听情况。

```bash
ss -lntp
netstat -lntp
```

面试高频题：

- 如何查看某个端口是否被占用？

可以回答：

```bash
ss -lntp | grep 8080
```

### 4. `lsof`

查看文件或端口被谁占用。

```bash
lsof -i :8080
```

### 5. `scp`

在服务器之间传文件。

```bash
scp app.jar user@192.168.1.10:/home/user/
```

## 七、服务与系统日志

### 1. `systemctl`

管理系统服务。

```bash
systemctl status nginx
systemctl start nginx
systemctl restart nginx
systemctl enable nginx
```

### 2. `journalctl`

查看 systemd 管理的日志。

```bash
journalctl -u nginx
journalctl -u nginx -f
```

如果面试问“服务起不来怎么查”，回答时可以把这组命令带上。

## 八、Linux面试常见基础知识

### 1. 目录结构要知道

几个高频目录最好能说清楚：

- `/`：根目录
- `/home`：普通用户家目录
- `/root`：root 用户家目录
- `/etc`：配置文件
- `/var`：日志、缓存、经常变化的数据
- `/tmp`：临时文件
- `/usr`：用户程序和系统资源
- `/proc`：内核和进程信息的虚拟文件系统

### 2. 硬链接和软链接

这是很常见的面试题。

硬链接：

- 本质上是同一个 inode 的多个目录项
- 删除原文件后，只要还有硬链接，数据仍然在
- 一般不能跨文件系统

软链接：

- 类似快捷方式
- 保存的是目标文件路径
- 可以跨文件系统
- 原文件删了之后，软链接会失效

创建方式：

```bash
ln file1 hard_link
ln -s file1 soft_link
```

### 3. 进程和线程

回答时不必特别学术，但要说到点上：

- 进程是资源分配的基本单位
- 线程是 CPU 调度的基本单位
- 同一进程内的线程共享内存空间
- 多线程通信更方便，但也更容易出现线程安全问题

### 4. 用户态和内核态

这个问题也很常见。

- 用户态权限较低，应用程序通常运行在用户态
- 内核态权限最高，可以直接访问硬件资源
- 系统调用是用户态进入内核态的重要方式

比如文件读写、网络请求、进程创建，背后都涉及系统调用。

### 5. 为什么一切皆文件

这是 Linux 非常经典的设计理念。

可以这样理解：

- 普通文件是文件
- 目录是文件
- 设备也可以抽象成文件
- 网络、管道、终端很多时候也可以按文件方式访问

这样做的好处是接口统一，很多工具和命令可以复用。

## 九、面试里很实用的排障思路

如果面试官问你“服务器访问异常怎么排查”，不要只回答单个命令，最好给出一个有层次的思路。

一个比较稳的回答方式是：

1. 先确认进程在不在：`ps`、`top`
2. 再看端口有没有监听：`ss -lntp`
3. 再测服务是否可访问：`curl`
4. 再查日志：`tail -f`、`journalctl`
5. 再排查权限、配置、磁盘和网络

这样回答会显得你不是“背命令”，而是真的有问题定位意识。

## 十、面试前建议重点记住的命令

如果时间不多，至少把下面这些练熟：

- `ls`
- `cd`
- `pwd`
- `mkdir`
- `cp`
- `mv`
- `rm`
- `find`
- `grep`
- `cat`
- `less`
- `tail -f`
- `ps`
- `top`
- `kill`
- `chmod`
- `chown`
- `df -h`
- `du -sh`
- `free -h`
- `curl`
- `ss -lntp`
- `systemctl`

## 总结

准备 Linux 面试题时，最有效的方法不是死记硬背，而是把命令和真实场景绑定起来。你要能说清楚：

- 这个命令是干什么的
- 常用参数是什么
- 一般在什么场景下用
- 出问题时怎么组合命令做排查

如果这几个层面都能答出来，Linux 这一块通常就不会吃亏。
