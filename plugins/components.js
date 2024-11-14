import Vue from 'vue'
import Page from '@/components/Bloks/Page.vue'
import Teaser from '@/components/Bloks/Teaser.vue'
import Grid from '@/components/Bloks/Grid.vue'
import FeatureItem from '@/components/Bloks/Feature/FeatureItem.vue'
import Hero from '@/components/Bloks/Hero.vue'
import FeatureList from '~/components/Bloks/FeatureList.vue'
import CtaBar from '~/components/Bloks/CtaBar.vue'
import HeadingParagraph from '~/components/Bloks/HeadingParagraph.vue'
import Prose from '~/components/Bloks/Prose.vue'

// Assets
import Button from '~/components/Bloks/Assets/Button.vue'
import Spacer from '~/components/Bloks/Assets/Spacer.vue'

Vue.component('Page', Page)
Vue.component('Teaser', Teaser)
Vue.component('Grid', Grid)
Vue.component('FeatureList', FeatureList)
Vue.component('FeatureItem', FeatureItem)
Vue.component('Hero', Hero)
Vue.component('CtaBar', CtaBar)
Vue.component('HeadingParagraph', HeadingParagraph)
Vue.component('Prose', Prose)

Vue.component('Btn', Button)
Vue.component('Spacer', Spacer)
