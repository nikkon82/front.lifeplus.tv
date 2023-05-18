import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMeta from 'vue-meta'

import './plugins/base'
import './plugins/chartist'
import vuetify from './plugins/vuetify'
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib'
import Vuelidate from 'vuelidate'
import i18n from './i18n'
import VueVideoPlayer from 'vue-video-player'
import VuePlayer from '@iomariani/vue-player'
import Vue2Editor from "vue2-editor"

Vue.component('vue-player', VuePlayer)
import '@iomariani/vue-player/dist/vue-player.css'

// require videojs style
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.use(Vue2Editor)

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

Vue.use(VueTelInputVuetify, {
    vuetify,
})

Vue.use(require('vue-cookies'))
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')
