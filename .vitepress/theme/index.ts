import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import HomeHeroContent from './components/HomeHeroContent.vue'
import ArticleMetadata from './components/ArticleMetadata.vue'

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'home-hero-info-after': () => h(HomeHeroContent),
            'doc-before': () => h(ArticleMetadata)
        })
    }
}
