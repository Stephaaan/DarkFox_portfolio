
import Vue from 'vue'
import Vuex from 'vuex'
import Language from '~/helpers/Language'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    settings: {
      language: window.localStorage.getItem("lang") || 'sk'
    }
  },
  mutations: {
    setLanguage (state, language) {
      window.localStorage.setItem("lang", language)
      state.settings.language = language
    }
  },
  getters: {
    selectLanguage (state) {
      return state.settings.language
    }
  },
  actions: {
    setLanguage({commit}, language) {
      commit('setLanguage', language)
    }
  }
})

