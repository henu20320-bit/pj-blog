---
description: 抓取网站内容并保存为 Markdown
---

此工作流将帮助你抓取指定网站的内容。

1. 安装依赖 (仅需运行一次)
// turbo
```bash
pip install -r scraper/requirements.txt
playwright install
```

2. 运行抓取工具
请将 `<URL>` 替换为你想要抓取的网址。
```bash
python scraper/crawl.py <URL>
```

3. 查看结果
抓取的内容将保存在 `scraped_data` 目录下。
