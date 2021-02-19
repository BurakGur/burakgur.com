// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faMediumM, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faMediumM, faGithub, faMoon, faSun, faLinkedin)


window.eventBus = new Vue()
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

// For iOS Devices (Full Screen - 100vh)
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", `${vh}px`)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store: store,
	components: { App },
	template: '<App/>'
})
