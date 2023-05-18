import Vue from 'vue'
import Vuex from 'vuex'

//modules
import user from './user/index'
import prospect from './prospect/index'
import application from './application/index'

Vue.use(Vuex)

export default new Vuex.Store({
    // strict: process.env.NODE_ENV !== 'production',

    state: {
        barColor: 'rgba(0, 0, 0, .87), rgba(0, 0, 0, .87)',
        barImage: '/img/sidebar-1.jpg',
        drawer: null,
        // apiURL: 'http://localhost:8000/api',
        // serverPath: 'http://localhost:8000'
        apiURL: 'https://api.lifeplus.tv/api',
        serverPath: 'https://api.lifeplus.tv'
    },
    mutations: {
        SET_BAR_IMAGE (state, payload) {
            state.barImage = payload
        },
        SET_DRAWER (state, payload) {
            state.drawer = payload
        },
    },
    actions: {

    },
    modules: {
        user,
        prospect,
        application
    }
})
