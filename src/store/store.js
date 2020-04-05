import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    theme: localStorage.getItem('theme') || 'light'
  }, 
  getters: {
    getTheme(state) {
      if (state.theme === 'dark' ) {
        return 'dark'
      } else {
        return 'light'
      }
    }
  }, 
  mutations: {
    changeStorageTheme(state, theme) {
      state.theme = theme
    }
  }, 
  actions: {
    changeTheme(context) {
      if(context.getters.getTheme === 'light') {
        localStorage.setItem('theme', 'dark');
        context.commit('changeStorageTheme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
        context.commit('changeStorageTheme', 'light');
      }
    }
  }
})