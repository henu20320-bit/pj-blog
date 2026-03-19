import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import HomeHeroContent from './components/HomeHeroContent.vue'
import ArticleMetadata from './components/ArticleMetadata.vue'
import RightRailPanel from './components/RightRailPanel.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-after': () => h(HomeHeroContent),
      'doc-before': () => h(ArticleMetadata),
      'aside-outline-before': () => h(RightRailPanel)
    })
  }
}
