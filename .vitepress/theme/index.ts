import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import HomeHeroContent from './components/HomeHeroContent.vue'
import ArticleMetadata from './components/ArticleMetadata.vue'
import LayoutModeSync from './components/LayoutModeSync.vue'
import RightRailPanel from './components/RightRailPanel.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(LayoutModeSync),
      'home-hero-info-after': () => h(HomeHeroContent),
      'doc-before': () => h(ArticleMetadata),
      'aside-outline-after': () => h(RightRailPanel)
    })
  }
}
