import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HomeHeroContent from './components/HomeHeroContent.vue'

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'home-hero-info-after': () => h(HomeHeroContent)
        })
    }
}
