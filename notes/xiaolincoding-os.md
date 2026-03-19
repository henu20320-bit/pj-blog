---
title: 小林 coding 操作系统专栏抓取笔记
date: 2026-03-19
tags:
  - 笔记
  - 操作系统
  - 爬取
---

# 小林 coding 操作系统专栏抓取笔记

> 来源： [小林 coding - 图解系统](https://xiaolincoding.com/os/)
>
> 说明：本页基于仓库内现有爬虫工具抓取 `https://xiaolincoding.com/os/` 后整理而成，原始抓取快照保存在 `scraped_data/xiaolincoding_com_os_.md`。

## 这页内容是什么

这是小林 coding 的操作系统专栏首页，既是一篇导读，也是一份完整目录。页面前半部分主要介绍这套内容适合谁、怎么阅读、如何用来准备面试；后半部分则按主题把整套操作系统笔记拆成若干章节。

如果想把它当成学习入口，这一页最大的价值不是单篇正文，而是它把整套知识体系按模块整理好了。

## 抓取后整理出的主结构

### 1. 前言

这一部分主要是导读，包含：

- 图解系统介绍
- 小白适合看吗
- 要怎么阅读
- 如何应对面试
- 有错误怎么办

### 2. 硬件结构篇

代表文章：

- [CPU 是如何执行程序的？](https://xiaolincoding.com/os/1_hardware/how_cpu_run.html)
- [磁盘比内存慢几万倍？](https://xiaolincoding.com/os/1_hardware/storage.html)
- [如何写出让 CPU 跑得更快的代码？](https://xiaolincoding.com/os/1_hardware/how_to_make_cpu_run_faster.html)
- [CPU 缓存一致性](https://xiaolincoding.com/os/1_hardware/cpu_mesi.html)
- [什么是软中断？](https://xiaolincoding.com/os/1_hardware/soft_interrupt.html)

### 3. 系统结构篇

代表文章：

- [Linux 内核 vs Windows 内核](https://xiaolincoding.com/os/2_os_structure/linux_vs_windows.html)

### 4. 内存管理篇

代表文章：

- [为什么要有虚拟内存？](https://xiaolincoding.com/os/3_memory/vmem.html)
- [malloc 是如何分配内存的？](https://xiaolincoding.com/os/3_memory/malloc.html)
- [内存满了，会发生什么？](https://xiaolincoding.com/os/3_memory/mem_reclaim.html)
- [深入理解 Linux 虚拟内存管理](https://xiaolincoding.com/os/3_memory/linux_mem.html)
- [深入理解 Linux 物理内存管理](https://xiaolincoding.com/os/3_memory/linux_mem2.html)

### 5. 进程管理篇

代表文章：

- [进程、线程基础知识](https://xiaolincoding.com/os/4_process/process_base.html)
- [进程间有哪些通信方式？](https://xiaolincoding.com/os/4_process/process_commu.html)
- [多线程冲突了怎么办？](https://xiaolincoding.com/os/4_process/multithread_sync.html)
- [怎么避免死锁？](https://xiaolincoding.com/os/4_process/deadlock.html)
- [什么是悲观锁、乐观锁？](https://xiaolincoding.com/os/4_process/pessim_and_optimi_lock.html)

### 6. 调度算法篇

代表文章：

- [进程调度/页面置换/磁盘调度算法](https://xiaolincoding.com/os/5_schedule/schedule.html)

### 7. 文件系统篇

代表文章：

- [文件系统全家桶](https://xiaolincoding.com/os/6_file_system/file_system.html)
- [进程写文件时崩溃，已写入的数据会丢失吗？](https://xiaolincoding.com/os/6_file_system/pagecache.html)

### 8. 设备管理篇

代表文章：

- [键盘敲入 A 字母时，操作系统期间发生了什么？](https://xiaolincoding.com/os/7_device/device.html)

### 9. 网络系统篇

代表文章：

- [什么是零拷贝？](https://xiaolincoding.com/os/8_network_system/zero_copy.html)
- [I/O 多路复用：select/poll/epoll](https://xiaolincoding.com/os/8_network_system/selete_poll_epoll.html)
- [高性能网络模式：Reactor 和 Proactor](https://xiaolincoding.com/os/8_network_system/reactor.html)
- [什么是一致性哈希？](https://xiaolincoding.com/os/8_network_system/hash.html)

### 10. Linux 命令篇

代表文章：

- [如何查看网络的性能指标？](https://xiaolincoding.com/os/9_linux_cmd/linux_network.html)
- [如何从日志分析 PV、UV？](https://xiaolincoding.com/os/9_linux_cmd/pv_uv.html)

### 11. 学习心得

代表文章：

- [操作系统怎么学？](https://xiaolincoding.com/os/10_learn/learn_os.html)
- [画图经验分享](https://xiaolincoding.com/os/10_learn/draw.html)

## 如果按学习路径来读

我会建议这样读：

1. 先看“图解系统介绍”和“要怎么阅读”，明确这套内容的组织方式。
2. 再读“硬件结构篇”和“内存管理篇”，把 CPU、缓存、虚拟内存这些底层基础先打牢。
3. 然后重点看“进程管理篇”和“网络系统篇”，这两块通常也是后端面试里最常考的内容。
4. 最后补“文件系统篇”和“Linux 命令篇”，把实际工程里的落地点接起来。

## 为什么适合放进笔记板块

这份内容更像“学习地图”，而不是我自己的原创博客文章，所以我把它归到“笔记”而不是“博客”：

- 它主要用于整理学习路径
- 它天然带有目录属性
- 它适合后续继续往下拆成更多专题笔记

## 后续可扩展方向

如果后面你想继续把这个板块做厚，我建议可以沿着这页目录继续扩展：

- 每个大章节单独做一篇学习笔记
- 每篇笔记补“核心概念 + 高频面试题 + 自己理解”
- 最后做一个“操作系统学习路线图”汇总页

