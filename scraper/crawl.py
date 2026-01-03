"""
网站抓取工具
使用 crawl4ai 库抓取网页内容并转换为 Markdown 格式
"""
import asyncio
import sys
import re
import os
from crawl4ai import AsyncWebCrawler


async def main():
    """主函数：处理命令行参数并执行抓取"""
    # 检查命令行参数
    if len(sys.argv) < 2:
        print("用法: python crawl.py <网址>")
        sys.exit(1)

    url = sys.argv[1]
    print(f"正在抓取 {url}...")

    try:
        # 使用异步爬虫抓取网页
        async with AsyncWebCrawler(verbose=True) as crawler:
            result = await crawler.arun(url=url)
            
            # 检查抓取是否成功
            if not result.success:
                print(f"抓取失败: {url}")
                sys.exit(1)

            # 根据 URL 生成文件名
            name = generate_filename(url)
            
            # 创建输出目录
            output_dir = "scraped_data"
            os.makedirs(output_dir, exist_ok=True)
            
            # 保存 Markdown 内容到文件
            filename = os.path.join(output_dir, f"{name}.md")
            save_markdown(filename, url, result.markdown)
                
            print(f"成功! 内容已保存至 {filename}")

    except Exception as e:
        print(f"发生错误: {e}")
        sys.exit(1)


def generate_filename(url: str) -> str:
    """
    从 URL 生成合法的文件名
    
    参数:
        url: 网页地址
    
    返回:
        处理后的文件名（不含扩展名）
    """
    # 移除协议前缀 (http:// 或 https://)
    name = re.sub(r'^https?://', '', url)
    # 将非字母数字字符替换为下划线
    name = re.sub(r'[^a-zA-Z0-9]', '_', name)
    # 限制文件名长度为 50 个字符
    return name[:50]


def save_markdown(filename: str, url: str, content: str) -> None:
    """
    保存 Markdown 内容到文件
    
    参数:
        filename: 输出文件路径
        url: 原始网页地址
        content: Markdown 内容
    """
    with open(filename, "w", encoding="utf-8") as f:
        f.write(f"# Source: {url}\n\n")
        f.write(content)


if __name__ == "__main__":
    asyncio.run(main())

