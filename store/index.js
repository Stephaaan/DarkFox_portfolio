
import Vue from 'vue'
import Vuex from 'vuex'
import Language from '~/helpers/Language'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    settings: {
      language: 'sk'
    }
  },
  mutations: {
    setLanguage (state, language) {
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

