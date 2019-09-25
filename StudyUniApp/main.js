import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {test: 12345},
})
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
