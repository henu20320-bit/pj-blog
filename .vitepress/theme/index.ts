/**
 * VitePress 主题配置文件
 * 
 * 此文件扩展了 VitePress 默认主题,并添加了自定义组件:
 * - HomeHeroContent: 首页 Hero 区域的自定义内容
 * - ArticleMetadata: 文章页面的元数据显示组件
 */
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import HomeHeroContent from './components/HomeHeroContent.vue'
import ArticleMetadata from './components/ArticleMetadata.vue'

export default {
    // 继承 VitePress 默认主题
    extends: DefaultTheme,

    /**
     * 自定义布局函数
     * 
     * 通过插槽(slots)在默认布局中注入自定义组件:
     * - 'home-hero-info-after': 在首页 Hero 信息后插入内容
     * - 'doc-before': 在文档内容前插入内容
     */
    Layout() {
        return h(DefaultTheme.Layout, null, {
            // 首页 Hero 区域后插入自定义内容
            'home-hero-info-after': () => h(HomeHeroContent),

            // 文档页面开头插入文章元数据
            'doc-before': () => h(ArticleMetadata)
        })
    }
}

